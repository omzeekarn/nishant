import React from 'react'
import Backend from './Backend'
import Design from './Design'
import Frontend from './Frontend'
import './skills.css'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Technology</h2>
            <span className="section__subtitle">Tools i use</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Design />
            </div>
        </section>
    )
}

export default Skills