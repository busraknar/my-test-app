import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSentMessage('');

    try {
      // Form submission logic (replace with your logic)
      // const response = await fetch('your-api-endpoint', { method: 'POST', body: JSON.stringify(formData) });

      // Simulate success response
      setTimeout(() => {
        setSentMessage('Mesajınız gönderildi. Teşekkürler!');
        setLoading(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 2000);
    } catch (error) {
      setErrorMessage('Mesaj gönderiminde bir hata gerçekleşti.');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section" style={{ marginTop: '50px' }}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Adres</h3>
                  <p>İstanbul Ticaret Üniversite, Sütlüce </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone"></i>
                  <h3>Bize ulaşın</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Gönder</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="İsminiz"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Mailiniz"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Konu"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={4}
                    placeholder="Mesajınız"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Yükleniyor</div>}
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  {sentMessage && <div className="sent-message">{sentMessage}</div>}
                  <button type="submit" disabled={loading}>Mesajı İlet</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Harita kısmı formun altına alındı */}
        <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
          <iframe
            style={{ border: 0, width: '100%', height: '370px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.4970267095414!2d28.948593712146767!3d41.05812707122416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0ca912e850f%3A0x2b6640dcab8994f!2zxLBzdGFuYnVsIFRpY2FyZXQgw5xuaXZlcnNpdGVzaSBTw7x0bMO8Y2UgWWVybGXFn2tlc2kgS8O8dMO8cGhhbmVzaQ!5e0!3m2!1str!2str!4v1727724719012!5m2!1str!2str"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
