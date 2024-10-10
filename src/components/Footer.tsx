import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>Yeniliklerimizden Haberdar Olun</h4>
              <p>Ürünlerimizden ve gelişimlerden haberdar olmak için tıklayın!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Yükleniyor</div>
                <div className="error-message"></div>
                <div className="sent-message">Takip isteğiniz gönderildi. Teşekkürler!</div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="d-flex align-items-center">
              <span className="sitename">İstanbul Ticaret Üniversitesi</span>
            </a>
            <div className="footer-contact pt-3">
              <p>Sütlüce Kampüs </p>
              <p>İstanbul, Beyoğlu 535022</p>
              <p className="mt-3"><strong>Phone:</strong> +1 5589 55488 55</p>
              <p><strong>Email:</strong> info@example.com</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>En Çok Tıklananlar</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="/">Anasayfa</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="/about">Hakkımızda</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="">Sonuçlar</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Servislerimiz</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4>Bizi Takip Et</h4>
            <p>İstanbul Ticaret Üniversitesi Yazılım Akademisi</p>
            <div className="social-links d-flex">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Moderna</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by Büşra AKNAR
        </div>
      </div>
    </footer>
  );
};

export default Footer;
