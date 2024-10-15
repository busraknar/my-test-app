import React, { useState } from 'react';
import OMRReader from './OMRReader'; 
import { Link } from 'react-router-dom';
import './readingTest.css';


const ReadingOmr: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>(''); // Seçilen sınıfı takip etmek için..
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleSave = () => {
    if (selectedClass) {
      const results = JSON.parse(localStorage.getItem(selectedClass) || '[]'); // Mevcut sonuçları alalm
      results.push(result); // Yeni sonucu ekle
      localStorage.setItem(selectedClass, JSON.stringify(results)); // Güncellenmiş sonuçları kaydetdemek
      alert(`Sonuç ${selectedClass} için kaydedildi.`);
    } else {
      alert('Lütfen bir sınıf seçin.');
    }
  };

  const handleResult = (text: string) => {
    setResult(text); // Okunan metni ayarlayalım
  };

  return (
    <div className="container2">
      <h2>OMR Okuyucu</h2>
      <OMRReader onResult={handleResult} /> 
      
      <div className="result">
        <h3>Sonuç:</h3>
        <pre>{result}</pre> {/* Sonuç burada görüntülenecek */}
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

export default ReadingOmr;
