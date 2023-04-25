import React from 'react'
import photo from './../../assets/hote.jpg'
export const ContactHero = () => {
    return (
        <div style={{ padding: '10%', backgroundColor: 'black', color: 'red' }}>
            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading"> Thanks for your visit. <span className="text-muted"> if you have arrived to this place then surely you are interested?.</span></h2 >
                    <p className="lead" > Perhaps I may not be proficient in coding or website creation yet, but I am grateful for your presence in my learning journey.Your clicks and support are highly appreciated, and I hope to improve with your guidance.Thank you for being a part of this journey.</p >
                </div >
                <div className="col-md-5" >
                    {/* <svg  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    < img src={photo} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="" />
                </div >
            </div >
        </div >
    )
}
