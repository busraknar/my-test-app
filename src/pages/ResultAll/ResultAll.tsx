import React from 'react'
import { Link } from 'react-router-dom';

import './ResultAll.css'

const classes = [
    { id: 'university1', name: 'Üniversite 1. Sınıf' },
    { id: 'university2', name: 'Üniversite 2. Sınıf' },
    { id: 'university3', name: 'Üniversite 3. Sınıf' },
    { id: 'university4', name: 'Üniversite 4. Sınıf' },
    { id: 'university5', name: 'Üniversite 5. Sınıf' }
  ];
export default function ResultAll() {
  return (
    <div className="all-results-container">
      <h2>Tüm Sınıf Sonuçları</h2>
      <div className="cards-container">
        {classes.map((classItem) => (
          <div key={classItem.id} className="result-card">
            <Link to={`/${classItem.id}`}>
              <h3>{classItem.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
