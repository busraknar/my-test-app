import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage: React.FC = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <div id="hero-carousel" className="carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="container position-relative">
            <div className="carousel-item active">
              <div className="carousel-container">
                <h2>Söz Test Sonuç Değerlendirme sayfasına hoş geldiniz.</h2>
                <p>Değerlendirme kriterleri ayrıntılı olarak paylaşılacaktır.</p>
                <a href="#about" className="btn-get-started">Daha fazla</a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-container">
                <h2>1. Sınıfların değerlendirmesi tamamlandı.</h2>
                <p>Sonuçlar için Sabri Öz hocaya ulaşabilirsiniz.</p>
                <Link to="/university1" className="btn-get-started">Daha fazla</Link>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-container">
                <h2>2. Sınıfların değerlendirmesi Ekim sonu açıklanacaktır.</h2>
                <p>Sonuçlar için sabırlı olmanız tavsiye olunur.</p>
                <a href="#about" className="btn-get-started">Daha fazla</a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-container">
                <h2>3 ve 4. Sınıfların değerlendirmesi tamamlanmıştır.</h2>
                <p>Mezuniyet durumu etkilenmeyecek şekilde yardımcı olunmuştur.</p>
                <a href="#about" className="btn-get-started">Daha fazla</a>
              </div>
            </div>

            <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </section>


    </main>
  );
};

export default IndexPage;
