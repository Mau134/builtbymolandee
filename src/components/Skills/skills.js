import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>
        What I do
      </span>
      <span className='skillDesc'>
        I am fluent in PHP, HTML, CSS/SCSS, JavaScript and C++ programming languages. When it comes to database technologies, I am skilled in MYSQL. I am also familiar with frameworks such as Reactjs.
         I have hands on experience with the Internet of Things (IoT) technologies
         having worked in a few projects in IoT. 
         I am also familiar in working with collaborative environments such as github for projects.
      </span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>
              Proficient in creating user-centered designs that ensure intuitive and engaging experiences.
              Skilled in wireframing, prototyping, and user testing to deliver visually appealing interfaces
              that enhance usability and meet client objectives.
            </p>          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='Web Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>
              Experienced in crafting responsive and accessible websites using modern technologies like
              HTML, CSS(SCSS), JavaScript, and frameworks like React. Expertise in ensuring cross-browser
              compatibility, optimized performance, and seamless user experience.
            </p>          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='App Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Application Design</h2>
            <p>
              Skilled in designing and developing dynamic web and mobile applications, focusing on functionality
              and user engagement. Expertise in integrating APIs, payment systems, and implementing best
              practices for scalable and maintainable code.
            </p>          </div>
        </div>
      </div>
    </section>
  );
}

export default skills