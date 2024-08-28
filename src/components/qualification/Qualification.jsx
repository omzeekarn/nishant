import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title"><i className="uil uil-graduation-cap qualification__icon"></i> Qualification</h2>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >

                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">MDU, Rohtak</h3>
                                <span className="qualification__subtitle">B.tech in CSE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Pursuing
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UBTE, Roorkee</h3>
                                <span className="qualification__subtitle">Polytechnic in CSE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Nepal Board</h3>
                                <span className="qualification__subtitle">Metriculation</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Cleared in 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification