import React from 'react';
import { useParams } from 'react-router-dom';
import './UniversityResults.css';

const UniversityResults: React.FC = () => {
  const { className } = useParams<{ className: string }>();
  const results = JSON.parse(localStorage.getItem(className || '') || '[]');

   // className'deki sayıyı bulmak için 1mi 2.sınıf mı diye
   const classNumber = className?.replace('university', '');

   return (
     <div className="results-container">
       <h2>{`Üniversite ${classNumber}. Sınıf Sonuçları`}</h2>
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
