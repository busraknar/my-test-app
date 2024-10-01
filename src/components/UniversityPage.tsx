import React, { useEffect, useState } from 'react';

interface UniversityPageProps {
  university: string;
}

const UniversityPage: React.FC<UniversityPageProps> = ({ university }) => {
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    // Yerel depolamadan sonuçları alalım
    const savedResult = localStorage.getItem(university);
    if (savedResult) {
      setResult(savedResult);
    }
  }, [university]);

  return (
    <div>
      <h1>{university} Sınıfı Sonuçları</h1>
      <pre>{result ? result : 'Bu sınıf için henüz sonuç yok.'}</pre>
    </div>
  );
};

export default UniversityPage;
