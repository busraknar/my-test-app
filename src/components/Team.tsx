import React from 'react';

const Team: React.FC = () => {
  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="row gy-5">

          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img src="assets/img/team/team-1.png" className="img-fluid" alt="Walter White" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Malik Sarrafoğlu</h4>
              <span>Php Developer</span>
              <p>Php ile backend tarafında QR okuması gerçekleştirdi.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
            <div className="member-img">
              <img src="assets/img/team/team-2.png" className="img-fluid" alt="Sarah Jhonson" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Büşra Aknar</h4>
              <span>.Net Developer</span>
              <p>Responsive ve özgün tasarımlı web arayüzü için geliştirmeler yaptı.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Team;