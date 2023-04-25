import React from 'react'
import { Link } from 'react-router-dom'
import photo from './../../assets/hote.jpg'
import './icons.css'

export const HeroCentered = () => {
    return (
        <div className="px-4 py-5  text-center" style={{ backgroundColor: '#BD7FE0', minHeight: '100vh' }}>
            <img className="d-block mx-auto mb-4" src={photo} alt="" height="300" style={{ borderRadius: '47%' }} />
            < div className='icons' >
                <a target="_blank" rel="noreferrer" href="https://ma.linkedin.com/in/ayoub-elouaizi-2b1742234"><i className="bi bi-linkedin text-primary display-5 fw-bold "></i></a >
                <a target="_blank" rel="noreferrer" href="https://github.com/AyoubELOUAIZI"><i className="bi bi-github text-dark display-5 fw-bold "></i></a >
                <a target="_blank" rel="noreferrer" href="https://twitter.com/ElouaiziAyoub"><i className="bi bi-twitter text-info display-5 fw-bold "></i></a >
                <a target="_blank" rel="noreferrer" href="https://web.facebook.com/profile.php?id=100089666041709"><i className="bi bi-facebook text-primary display-5 fw-bold "></i></a >
            </div >

            <h1 className="display-5 fw-bold" style={{ color: 'blue' }}> I Would Like to try it</h1 >
            <div className="col-lg-6 mx-auto" >
                <p className="lead mb-4" style={{ color: 'blue' }}> My journey in computer science began in 2021, following the completion of my Baccalaureate degree.Over the past two years, I have delved into a vast array of programming languages and frameworks, developing a strong passion for the field.My desire to continually challenge myself and explore cutting - edge technologies motivates me to eagerly seek out new learning opportunities and actively contribute to advanced projects.</p >
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" >
                    <Link type="button" to="/" className="btn btn-outline-secondary btn-lg px-4">Back</Link>
                    <Link type="button" to="/skills" className="btn btn-primary btn-lg px-4 gap-3">More About Skills</Link>
                </div >
            </div >
        </div >
    )
}
