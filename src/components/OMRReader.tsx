import React, { useRef } from 'react';

declare var cv: any;

interface OMRReaderProps {
  onResult: (text: string) => void; // Sonuçları iletmek için prop
}

const OMRReader: React.FC<OMRReaderProps> = ({ onResult }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && imageRef.current) {
            const reader = new FileReader();
            reader.onload = () => {
                if (imageRef.current) {
                    imageRef.current.src = reader.result as string;
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const processImage = () => {
        const imgElement = imageRef.current;
        const canvasElement = canvasRef.current;
        if (!imgElement || !canvasElement) return;

        const ctx = canvasElement.getContext('2d');
        if (ctx) {
            ctx.drawImage(imgElement, 0, 0, canvasElement.width, canvasElement.height);
            const imgData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
        
            // OpenCV işlemlerine başlıyor--------
            const src = cv.matFromImageData(imgData);
            const gray = new cv.Mat();
            cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
            cv.threshold(gray, gray, 120, 255, cv.THRESH_BINARY);

            // Kenar tespiti yap
            const edges = new cv.Mat();
            cv.Canny(gray, edges, 100, 200);

            // Konturları bul
            const contours = new cv.MatVector();
            const hierarchy = new cv.Mat();
            cv.findContours(edges, contours, hierarchy, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE);

            // Dörtgen şekilleri bul - çizdir
            let recognizedText = ""; // Tanınan metin
            for (let i = 0; i < contours.size(); i++) {
                const contour = contours.get(i);
                const perimeter = cv.arcLength(contour, true);
                const approx = new cv.Mat();
                cv.approxPolyDP(contour, approx, 0.02 * perimeter, true);

                // Eğer köşe sayısı 4 ise dörtgen
                if (approx.rows === 4) {
                    cv.drawContours(src, contours, i, new cv.Scalar(255, 0, 0), 3); // Dörtgenleri kırmızı çiz

                    // Burada kontur ile ilgili bir metin elde edebilirsiniz. Örnek olarak:
                    recognizedText += `Contour ${i} recognized.\n`;
                }
                approx.delete();
            }

            // Sonucu canvas'ta göster
            cv.imshow(canvasElement, src);

            // Tanınan metni onResult ile ilet
            onResult(recognizedText); 

            // Bellek temizleme
            src.delete();
            gray.delete();
            edges.delete();
            contours.delete();
            hierarchy.delete();
        }
    };

    return (
        <div>
            <h1>OMR Reader</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={processImage}>Görüntüyü İşle</button>
            <canvas ref={canvasRef} width="640" height="480"></canvas>
            <img ref={imageRef} alt="OMR" style={{ display: 'none' }} />
        </div>
    );
};

export default OMRReader;
