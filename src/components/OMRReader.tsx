import React, { useRef } from 'react';

declare var cv: any;

const OMRReader = () => {
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
            // OpenCV işleme kodları burada
            const src = cv.matFromImageData(imgData);
            const gray = new cv.Mat();
            cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
            cv.threshold(gray, gray, 120, 255, cv.THRESH_BINARY);
            // Blob algılama ve yuvarlakları tespit etme kodları gelecek
            cv.imshow(canvasElement, gray); // Sonucu canvas'ta göster
            src.delete();
            gray.delete();
        }
    };

    return (
        <div>
            <h1>OMR Reader</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={processImage}>Process Image</button>
            <canvas ref={canvasRef} width="640" height="480"></canvas>
            <img ref={imageRef} alt="OMR" style={{ display: 'none' }} />
        </div>
    );
};

export default OMRReader;
