import React from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';


const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                Here are some of my clients that I have worked for. 
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt='Clients' className='clientImg'/>
                <img src={Microsoft} alt='Clients' className='clientImg'/>
                <img src={Adobe} alt='Clients' className='clientImg'/>
                <img src={Facebook} alt='Clients' className='clientImg'/>

            </div>
        </div>

        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the form to discuss any work opportunities.</span>
          <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='email' className='email' placeholder='Your Email'/>
            <textarea className='msg' name='message' rows="5" placeholder='Your Messege'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
              <img className='link' src={FacebookIcon} alt='Facebook'/>
              <img className='link' src={TwitterIcon} alt='Twitter'/>
              <img className='link' src={InstagramIcon} alt='Instagram'/>
              <img className='link' src={YoutubeIcon} alt='Youtube'/>

            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact