import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section light-background">
      <div className="container-about">
        <div className="row gy-8">
          <div className="col-lg-4 position-relative align-self-start">
            <img src="assets/img/about.png" className="img-fluid" alt="About Us" />
            <a href="https://www.youtube.com/watch?v=EkkCdTrXM5Q" className="glightbox pulsating-play-btn"   target="_blank" ></a>
          </div>
          <div className="col-lg-6 content">
            <h3>Özgün Test!</h3>
            <p className="fst-italic">
              Herkesin mutlu olduğu, doğru elemeyi sağlayan test.
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i> İstediğiniz puanlama sistemi uygulanabilir.</li>
              <li><i className="bi bi-check2-all"></i> Kolayca test sonuçlarına ulaşabilirsiniz.</li>
              <li><i className="bi bi-check2-all"></i> Arayüz tasarımı konforlu.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
