import React from 'react'
import img1 from './../../assets/hote.jpg'

export const Album = () => {
  const Videos = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/watch?v=DX0z5pHQywo&list=PLWfppSjjiPxpNsQDappo5NJY2ww179xs9",
      title: "Protected React Routes: How to Redirect to Login and Navigate Back",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/watch?v=egocOUJ2zeU&list=PLWfppSjjiPxo4AbHKYcdz2DU9zVMaqTFg&t=1s",
      title: "Windows Web Server Setup: Apache, PHP, MySQL, and phpMyAdmin Installation Tutorial",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/watch?v=ZJDEpTmxjWk&list=PLWfppSjjiPxpNsQDappo5NJY2ww179xs9&index=2",
      title: "How I spent 5 days searching for a cookie in the wrong place: Lessons Learned.",
    },

  ]
  const funVideos = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/watch?v=eSL-9dNeGGs&list=PLWfppSjjiPxosWFrbZzoPNEQwAghPhCO9&index=7",
      title: "Hilarious Moments with Black Goats - A Must-See for Animal Lovers!",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/watch?v=CtqG_mVKPC4&list=PLWfppSjjiPxosWFrbZzoPNEQwAghPhCO9&index=1",
      title: "Cute and Cuddly: Spending Quality Time with My Adorable Cat",
    },
  ]

  return (
    <div style={{ backgroundImage: 'url(https://data.whicdn.com/images/267688386/original.gif)', backgroundColor: "#05BFDB", marginBottom: '20px' }}>
      <section className="py-5 text-center container" >
        <div className="row py-lg-5" >
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light" style={{ color: 'white' }}>CREATING SOME VIDEOS</h1>
            <p className="lead text-muted" > Although I may not be proficient in creating YouTube content, and my current level of knowledge may not be sufficient, I decided to step out of my comfort zone and give it a try. Through a combination of educational and entertaining videos, I took on this new challenge, and I am grateful for the opportunity to have done so.Thank you for taking the time to watch and support my journey.</p >
            <p>
              {/* <a href="#videos"  className="btn btn-primary my-2">lllllllllllllllllllll</a> */}
              {/* <a href="#"  className="btn btn-secondary my-2">Secondary action</a> */}
            </p>
          </div >
        </div >
      </section >

      < div className="album py-5 bg-light" >
        <div className="container" >
          <h2 className="pb-2 border-bottom" > TECH VIDEOS</h2 >

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
            {
              Videos.map(video => (
                <div className="col">
                  < div className="card shadow-sm" >
                    <div className="ratio ratio-16x9" >
                      <iframe src={video.link} title="YouTube video" allow="fullscreen" allowFullScreen></iframe>
                    </div >
                    <div className="card-body" >
                      <p className="card-text" > {video.title}</p >
                      <div className="d-flex justify-content-between align-items-center" >
                        <div className="btn-group" >
                          {/* <img src={img1} alt="" style={{ width: '30px', borderRadius: '45%' }} /> */}
                        </div >
                        <a type="button" target="_blank" rel="noreferrer" href='https://www.youtube.com/@elouaiziayoub-1087/playlists' className="btn btn-outline-danger">playlists</a>
                      </div >
                    </div >
                  </div >
                </div >
              ))
            }
          </div >
        </div >
      </div >


      < div className="album py-5 bg-light" >
        <div className="container" >
          <h2 className="pb-2 border-bottom" > FUN VIDEOS</h2 >

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
            {
              funVideos.map(video => (
                <div className="col">
                  < div className="card shadow-sm" >
                    <div className="ratio ratio-16x9" >
                      <iframe src={video.link} title="YouTube video" allow="fullscreen" allowFullScreen></iframe>
                    </div >
                    <div className="card-body" >
                      <p className="card-text" > {video.title}</p >
                      <div className="d-flex justify-content-between align-items-center" >
                        <div className="btn-group" >
                          {/* <img src={img1} alt="" style={{ width: '30px', borderRadius: '45%' }} /> */}
                        </div >
                        <a type="button" target="_blank" rel="noreferrer" href='https://www.youtube.com/@elouaiziayoub-1087/playlists' className="btn btn-outline-danger">playlists</a>
                      </div >
                    </div >
                  </div >
                </div >
              ))
            }
          </div >
        </div >
      </div >



    </div >
  );
}
