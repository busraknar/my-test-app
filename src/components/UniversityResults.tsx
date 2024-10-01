import React from 'react';
import { useParams } from 'react-router-dom';

const UniversityResults: React.FC = () => {
  const { className } = useParams<{ className: string }>();
  const results = JSON.parse(localStorage.getItem(className || '') || '[]');

  return (
    <div className="results-container">
      <h2>{className} Sonuçları</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result: string, index: number) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      ) : (
        <p>Henüz sonuç yok.</p>
      )}
    </div>
  );
};

export default UniversityResults;
