import React from 'react'
import photo from './../../../assets/photo.jpg'
import { ProjectScreens } from './ProjectScreens'
import './FinalProject.css'

export const FinalProject = () => {
  return (
    <div>
      {/* <h2   className='Cardstitle'>EST AGADIR FINAL PROJECT <span style={{ color: 'green' }}>E-ticket</span></h2> */}
      <main>
        <div className="position-relative overflow-hidden p-3  text-center bg-dark">
          <div className="col-md-5 p-lg-5 mx-auto my-5" style={{ color: 'white' }}>
            <h1 className="display-4 fw-normal">PROJECT<span className="neon-button" style={{ color: '#917FB3' }} >E-ticket</span></h1>
            <p className="lead fw-normal" > Let me provide a brief overview of our collaborative final project with <a href="https://github.com/JadaMohamed" target="_blank" rel="noreferrer" className=""> JADA Mohamed</a> and < a href="https://github.com/HafidElmoudden" target="_blank" rel="noreferrer" className="" > Hafid Elmoudden</a >.</p >
            <div className='neonParent'>
              <a href="https://e-ticket.live/" target="_blank" rel="noreferrer" className="neon-button">Site Preview</a>

            </div>
          </div >
          <div className="product-device shadow-sm d-none d-md-block" ></div >
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" ></div >
        </div >

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" style={{ flexWrap: 'wrap', paddingBottom: '90px' }}>
          {
            ProjectScreens.map(item => (
              <div className='item' style={{ margin: '0 1% 4% 1%', }} height="300px">
                <div className=" me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden " style={{ backgroundColor: `${item.backColor}`, borderRadius: '3%', margin: '1% 0' }}>
                  <div className="my-3 py-3">
                    <h2 className="display-5">{item.heading}</h2>
                    <p className="lead" > {item.description}</p >
                  </div >
                  <div className=" shadow-sm mx-auto imageContainer" style={{ width: '100%', borderRadius: '21px 21px 0 0' }} >
                    <img src={item.screenUrl} alt="" width="100%" />
                    {/* style={{ borderRadius: '21px 21px 0 0', }} */}
                  </div >
                </div >
              </div >
            ))
          }
        </div >




      </main >
    </div >
  )
}
