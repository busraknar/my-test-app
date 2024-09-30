import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <a href="index.html" className="logo d-flex align-items-center">
                    {/* Eğer bir resim logosu kullanmak isterseniz, aşağıdaki satırı kullanabilirsiniz */}
                    {/* <img src="assets/img/logo.png" alt="logo" /> */}
                    <h1 className="sitename" style={{ color: 'white' }}>Söz Test</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="/" className="active">Anasayfa</Link></li>
                        <li><Link to="/about">Hakkımızda</Link></li>
                        <li><Link to="/test">Sınav Okuma</Link></li>
                        <li><Link to="/team">Hazırlayanlar</Link></li>
                        <li className="dropdown">
                            <a href="#"><span>Sonuçlar</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li className="dropdown">
                                    <a href="#"><span>Sınıflar</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><Link to="/university1">Üniversite 1.Sınıf</Link></li>
                                        <li><Link to="/university2">Üniversite 2.Sınıf</Link></li>
                                        <li><Link to="/university3">Üniversite 3.Sınıf</Link></li>
                                        <li><Link to="/university4">Üniversite 4.Sınıf</Link></li>
                                        <li><Link to="/university5">Üniversite 5.Sınıf</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/contact">İletişim</Link></li>
                    </ul>
                  
                </nav>

            </div>
           
        </header>
        
    );
};

export default Header;
