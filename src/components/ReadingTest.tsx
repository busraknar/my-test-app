import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Link } from 'react-router-dom'; // Link bileşenini ekleyin
import './readingTest.css';

const ReadingTest: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>(''); // Seçilen sınıfı takip etmek için
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [savedResults, setSavedResults] = useState<{ [key: string]: string }>({});



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

  const handleSave = () => {
    if (selectedClass) {
      // Burada sonucu kaydetme işlemini yaparız.
      const results = JSON.parse(localStorage.getItem(selectedClass) || '[]'); // Mevcut sonuçları al
      results.push(result); // Yeni sonucu ekle
      localStorage.setItem(selectedClass, JSON.stringify(results)); // Güncellenmiş sonuçları kaydet
      alert(`Sonuç ${selectedClass} için kaydedildi.`);
    } else {
      alert('Lütfen bir sınıf seçin.');
    }
  };

  const handleSaveResult = (className: string) => {
    if (result) {
      setSavedResults((prev) => ({ ...prev, [className]: result }));
      setShowMessage(true);
      alert(`Sonuç "${className}" için kaydedildi.`);
  
      // Mesajı belli bir süre sonra gizle
      setTimeout(() => {
        setShowMessage(false);
      }, 3000); // 3 saniye
    } else {
      alert('Önce bir sonuç elde edin.');
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
      <div className="save-section">
        <h3>Sonucu Kaydet</h3>
        <select onChange={(e) => setSelectedClass(e.target.value)} value={selectedClass}>
          <option value="">Sınıf Seçin</option>
          <option value="university1">Üniversite 1. Sınıf</option>
          <option value="university2">Üniversite 2. Sınıf</option>
          <option value="university3">Üniversite 3. Sınıf</option>
          <option value="university4">Üniversite 4. Sınıf</option>
          <option value="university5">Üniversite 5. Sınıf</option>
        </select>
        <button onClick={handleSave}>Kaydet</button>
      </div>
      <div className="results-link">
        <h3>Sonuçları Görüntüle</h3>
        <ul>
          <li><Link to="/university1">Üniversite 1. Sınıf Sonuçları</Link></li>
          <li><Link to="/university2">Üniversite 2. Sınıf Sonuçları</Link></li>
          <li><Link to="/university3">Üniversite 3. Sınıf Sonuçları</Link></li>
          <li><Link to="/university4">Üniversite 4. Sınıf Sonuçları</Link></li>
          <li><Link to="/university5">Üniversite 5. Sınıf Sonuçları</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default ReadingTest;
