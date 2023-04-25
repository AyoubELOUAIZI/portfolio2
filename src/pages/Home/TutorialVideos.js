import React from 'react'

export const TutorialVideos = () => {
    const Videos = [
        {
            id: 1,
            link:"https://www.youtube.com/embed/watch?v=ojZlUQN-wio&list=PLWfppSjjiPxqBzt0OC-mc81qvlkpwZoTd",
            title: "How to Leave Feedback on My Portfolio Site.",
        },
    ];
  return (
    <div>
          < div className="album py-5 bg-light" >
              <div className="container" >
                  <h2 className="pb-2 border-bottom" > TUTORIAL VIDEOS</h2 >

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
    </div>
  )
}
