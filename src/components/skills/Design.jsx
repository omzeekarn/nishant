import React from 'react'

const Design = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Design & Multimedia</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Photoshop</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">Premiere Pro</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">After Effects</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design