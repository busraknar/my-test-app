import React from 'react';

const Main: React.FC = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <div id="hero-carousel" className="carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="container position-relative">
            <div className="carousel-item active">
              <div className="carousel-container">
                <h2>Söz Test Sonuç Değerlendirme sayfasına hoşgeldiniz.</h2>
                <p>Değerlendirme kriterleri ayrıntılı olarak paylaşılacaktır.</p>
                <a href="#about" className="btn-get-started">Daha fazla</a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-container">
                <h2>1.Sınıfların değerlendirmesi tamamlandı.</h2>
                <p>Sonuçlar için Sabri Öz hocaya ulaşabilirsiniz.</p>
                <a href="#about" className="btn-get-started">Daha Fazla</a>
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

      {/* Featured Services Section */}
      <section id="featured-services" className="featured-services section">
        <div className="container">
          <div className="row gy-4">
            {/* Service Items */}
            {/* ... Other service items */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
            </div>
            <div className="col-lg-6 content">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                {/* Other list items */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container section-title">
          <h2>Features</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container">
          {/* Feature Items */}
        </div>
      </section>
    </main>
  );
};

export default Main;
