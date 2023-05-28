import React, { useEffect, useRef, useState } from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  const [video, setVideo] = useState(true);
  const referenceRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(()=> {
    const height = window.getComputedStyle(referenceRef.current).height;
    const style = {
      height: height,
      width: height
    };
    Object.assign(targetRef.current.style, style);
  }, []);

  const toggleVideo = () => setVideo(prevState => !prevState);

  return (
    <div className={video ? 'hero-container' : 'hero-container background-image'}>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1>DUPSKO</h1>
        <p>Spasione</p>
        <div className='hero-btns'>
          <Button buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
          </Button>
          <Button ref={referenceRef} className='srak' buttonStyle='btn--primary' buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle'/>
          </Button>
          <Button ref={targetRef} className='btn-toggle-video' buttonStyle={video ? 'btn--primary' : 'btn--outline'} buttonSize='btn--large' onClick={toggleVideo}>
          </Button>
        </div>
    </div>
  )
}

export default HeroSection