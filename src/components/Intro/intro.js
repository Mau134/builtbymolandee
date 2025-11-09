import React from 'react';
import './intro.css';
import bg from '../../assets/Mau.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I am <span className='introName'>Maurice Molande</span><br/>
                Web Developer</span>
                <p className='introPara'>I am a professional and skilled web developer with expirience in creating<br/> appealing and user freindly websites.</p>
                <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    )
}

export default Intro;