import React, { useState } from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  const [video, setVideo] = useState(true);

  const toggleVideo = () => setVideo(prevState => !prevState);

  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <img className={video ? 'background-img' : 'background-img show'} src='/images/img-home.jpg' alt='Background'/>
        <h1>Podróże</h1>
        <p>małe i duże</p>
        <div className='hero-btns'>
          <Button buttonStyle='btn--outline' buttonSize='btn--large'>
            ROZPOCZNIJ PRZYGODĘ
          </Button>
          <div className='video-btns'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large'>
              OBEJRZYJ ZWIASTUN <i className='far fa-play-circle'/>
            </Button>
            <Button className='btn-toggle-video' buttonStyle={video ? 'btn--primary' : 'btn--outline'} buttonSize='btn--large' onClick={toggleVideo}>
            </Button>
          </div>
        </div>
    </div>
  )
}

export default HeroSection