import React from 'react'
import './Tools.css'
import { ToolsData } from './ToolsData'

export const Tools = () => {
    // console.log('ToolsData')
    // console.log(ToolsData)

    return (
        <div className='Tools'>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">TOOLS I HAVE USED</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" >
                    {
                        ToolsData.map(tool => (
                            <div className="col" key={tool.id} >
                                <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${tool.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                                }>
                                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" >
                                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{ color: `${tool.titleColor}` }}> {tool.title}</h2 >
                                        <ul className="d-flex list-unstyled mt-auto" >
                                            <li className="me-auto" >
                                                <img src={tool.iconUrl} alt="tool-icon" width="32" height="32" className="rounded-circle border border-white" />
                                            </li >
                                            <li className="d-flex align-items-center me-3" >
                                                <a href={tool.documentationUrl} className="btn btn-outline-info" target="_blank" rel="noreferrer">Docs</a>
                                            </li >
                                        </ul >
                                    </div >
                                </div >
                            </div >
                        ))}
                </div >
            </div >
        </div >
    )
}
