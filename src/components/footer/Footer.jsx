import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">

                <div className="footer__social">
                    <a href="https://www.facebook.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-twitter"></i>
                    </a>

                    <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-whatsapp"></i>
                    </a>

                    <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; Nishant. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer