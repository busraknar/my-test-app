import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import './readingTest.css';

const Test: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleButtonClick = () => {
    if (image) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result;
        Tesseract.recognize(
          imageData as string,
          'eng',
          {
            logger: (m) => console.log(m), // Progresi görmek için konsola yazdır
          }
        ).then(({ data: { text } }) => {
          setResult(text);
        });
      };
      reader.readAsDataURL(image);
    } else {
      alert('Lütfen bir görüntü yükleyin.');
    }
  };

  return (
    <div className="container2">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button className="button" onClick={handleButtonClick}>Görüntüyü Oku</button>
      <div className="result">
        <h3>Sonuç:</h3>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default Test;
