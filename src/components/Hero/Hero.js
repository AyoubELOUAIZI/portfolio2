import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import photo from './../../assets/photo.jpg'
export const Hero = () => {
  const [displayedDescription, setDisplayedDescription] = useState('')
  const [isFinishDesc, setIsFinishDesc] = useState(false);
  const fullDescription = "Hey there! I'm a computer science student currently studying at the Higher School of Technology in Agadir, and I absolutely love coding. It's my passion and something I truly enjoy doing. I am constantly seeking new challenges and opportunities to expand my knowledge and skills in the field.";

  function printDescription() {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i <= fullDescription.length) {
        setDisplayedDescription(fullDescription.slice(0, i))
        i++
      } else {
        clearInterval(intervalId);
        setIsFinishDesc(true);

      }
    }, 60)

    return () => clearInterval(intervalId)
  }
  useEffect(() => {
    printDescription();
  }, [])
  return (
    <>
      <div style={{ backgroundImage: 'url(https://data.whicdn.com/images/267688386/original.gif)', backgroundColor: "#05BFDB", marginBottom: '20px' }}>
        <div className="container col-xxl-8  py-5" >
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={photo} className="d-block mx-lg-auto img-fluid shadow-lg" alt="my img" width="700" height="500" loading="lazy" style={{ borderRadius: '2%' }} />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: 'blue' }}>Hi,My name is ELOUAIZI AYOUB</h1 >
              <p className="lead" style={{ color: 'white', fontWeight: 'bold' }
              }> {displayedDescription}</p >
              <div className="d-grid gap-2 d-md-flex justify-content-md-start" >
                {isFinishDesc && <Link type="button" to="/about" className="btn btn-primary btn-lg px-4 me-md-2" style={{ backgroundColor: 'blue', color: 'white' }}>Additional information</Link>}
                {/* <button type="button"  className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
              </div >
            </div >
          </div >
        </div >
      </div >
    </>
  );
}
