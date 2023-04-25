import React from 'react'
import { Link } from 'react-router-dom'

import photo from './../../assets/photo.jpg'
export const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className = "container py-5 border-top">
      < div  className = "row" >
    <div  className="col-12 col-md" >
          <img   className="m-3" src={photo} alt="" width="60" style={{ borderRadius: '20%' }} />
          <small   className="d-block m-3 mt-0 text-muted">&copy; 2022–{thisYear}</small>
        </div >
  <div  className="col-6 col-md" >
          <h5>See More</h5>
          <ul  className="list-unstyled text-small" >
            <Link to='/home'   className='nav-link'>Home</Link>
            <Link to='/about'   className='nav-link'>About</Link>
            <Link to='/education'   className='nav-link'>Education</Link>
            <Link to='/skills'   className='nav-link'>Skills</Link>
            <Link to='/projects'   className='nav-link'>Projects</Link>
            <Link to='/contact'   className='nav-link'>Contact</Link>
          </ul >
        </div >
  <div  className="col-6 col-md" >
          <h5>Accounts</h5>
          <ul  className="list-unstyled text-small" >
  <li><a  className="link-secondary" target="_blank" rel="noreferrer" href="https://ma.linkedin.com/in/ayoub-elouaizi-2b1742234">LinkedIn</a></li >
    <li><a  className="link-secondary" target="_blank" rel="noreferrer" href="https://github.com/AyoubELOUAIZI">GitHub</a></li >
      <li><a  className="link-secondary" target="_blank" rel="noreferrer" href="https://www.hackerrank.com/Ayoub_ELOUAIZI?hr_r=1">Hackerrank</a></li >
        <li><a  className="link-secondary" target="_blank" rel="noreferrer" href="https://twitter.com/ElouaiziAyoub">Twitter</a></li >
          <li><a  className="link-secondary" target="_blank" rel="noreferrer" href="https://web.facebook.com/profile.php?id=100089666041709">Facebook</a></li >
          </ul >
        </div >
  <div  className="col-6 col-md" >
          <h5>My old sites</h5>
          <ul  className="list-unstyled text-small" >
  <li><a  className="link-secondary" target="_blank" rel="noreferrer" href="https://ayoubelouaizi.github.io/CV/">First portfolio 2022</a></li >
    <li><a  className="link-secondary" target="_blank" rel="noreferrer" href="https://ayoubelouaizi.github.io/resking-portfolio/">Secend portfolio 2022</a></li >
          </ul >
        </div >
  <div  className="col-6 col-md" >
          <h5> Learning Platforms</h5>
          <ul  className="list-unstyled text-small" >
  <li><a  className="link-secondary" href="https://www.youtube.com/">YouTube</a></li >
    <li><a  className="link-secondary" href="https://stackoverflow.com/">Stack Overflow</a></li >
      <li><a  className="link-secondary" href="https://chat.openai.com/chat">Chat gpt</a></li >
        <li><a  className="link-secondary" href="#documentations">Documentations</a></li >
          </ul >
        </div >
      </div >
    </footer >

  )
}
