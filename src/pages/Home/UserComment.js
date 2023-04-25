import React, { useState } from 'react'
import { Photo } from './Photo';
// import photo from './../../assets/hote.jpg'

export const UserComment = ({ mycomment }) => {

  const [showPhoto, setShowPhoto] = useState(false);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return ` at ${year}-${month}-${day},${hours}:${minutes}`;
  }
  const date = mycomment.createdAt;
  const formattedDate = formatDate(date);
  return (
    // <div  className="col-lg-4  p-3 border-bottom">
    //   <img src={photo} alt=""  className="bd-placeholder-img rounded-circle" width="60" height="60" />
    //   <p   className='bold'>elouaizi ayoub <span><a target="_blank" rel="noreferrer" href="https://ma.linkedin.com/in/ayoub-elouaizi-2b1742234"><i  className="bi bi-linkedin text-primary display-12 fw-bold "></i></a></span>{<i  className="bi bi-patch-check-fill text-warning m-2"></i>}</p>
    //   <p>And lastly this, the third column of representative placeholder content.</p>
    //   {/* <p><a  className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
    // </div>
    <div className="col-lg-4  p-3 border-bottom">
      <div style={{ display: 'flex', alignItems: 'end' }}>
        < img src={mycomment?.Account?.photo} alt=""  onClick={() => { setShowPhoto(true) }} className="bd-placeholder-img rounded-circle" width="40" height="40" style={{ marginRight: '10px',cursor:"pointer" }} />
        <p className='bold'>{mycomment?.Account?.userName} <span> <a target="_blank" rel="noreferrer" href={mycomment?.Account?.linkedin}><i className="bi bi-linkedin text-primary display-12 fw-bold "></i></a></span>{mycomment?.Account?.isUsertverified && <i className="bi bi-patch-check-fill text-warning m-2" ></i >}
          <span> {formattedDate}</span>
        </p >
      </div>
      <p style={{ marginLeft: '50px' }}>{mycomment.comment}</p>
      {/* <p><a  className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
      <Photo photo={mycomment?.Account?.photo} showPhoto={showPhoto} setShowPhoto={setShowPhoto} />
    </div >
  )
}
