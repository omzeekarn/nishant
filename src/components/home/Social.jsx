import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/omzee_karn?igsh=NTFxNGs0cWhjcXlz" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://api.whatsapp.com/send?phone=8797421530&text=Hello, more information!" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-whatsapp"></i>
            </a>

            <a href="https://github.com/omzeekarn" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social