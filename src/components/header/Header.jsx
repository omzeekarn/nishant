import React, { useState } from 'react'
import './header.css'

const Header = () => {
	/*=============== Change Background Header ===============*/
	window.addEventListener("scroll", function () {
		const header = document.querySelector(".header");
		
		if (this.scrollY >= 80) {
			header.classList.add("scroll-header")
		} else {
			header.classList.remove("scroll-header")
		}
	});

	/*=============== Toggle Menu ===============*/
	const [Toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState("#home");

	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav__logo"><i className="uil-power"></i>mzee</a>

				<div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list grid">
						<li className="nav__item">
							<a
								href="#home"
								onClick={() => setActiveNav('#home')}
								className={
									activeNav === "#home"
										? "nav__link active-link"
										: "nav__link"
								}
							>
							Home
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#about"
								onClick={() => setActiveNav('#about')}
								className={
									activeNav === "#about"
										? "nav__link active-link"
										: "nav__link"
								}
							>
							About
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#skills"
								onClick={() => setActiveNav('#skills')}
								className={
									activeNav === "#skills"
										? "nav__link active-link"
										: "nav__link"
								}
							>
							Skills
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#services"
								onClick={() => setActiveNav('#services')}
								className={
									activeNav === "#services"
										? "nav__link active-link"
										: "nav__link"
								}
							>
							Services
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#portfolio"
								onClick={() => setActiveNav('#portfolio')}
								className={
									activeNav === "#portfolio"
										? "nav__link active-link"
										: "nav__link"
								}
							>
							Portfolio
							</a>
						</li>

						<li className="nav__item">
							<a
								href="#contact"
								onClick={() => setActiveNav('#contact')}
								className={
									activeNav === "#contact"
										? "nav__link active-link"
										: "nav__link"
								}
							>
							Contact
							</a>
						</li>
					</ul>

				</div>

				<div className="linked">
				<a href="https://www.linkedin.com/in/nishant-chaudhary-756ba0204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
					<i className="uil-linkedin"></i></a>
				</div>
				
			</nav>
		</header>
	)
}

export default Header