import React from 'react'

export const Section = (props) => {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{ backgroundColor: '#CAF1F1', borderRadius: '1%' }}>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">{props.title}</h1>
                        <p className="lead">{props.description}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            {/* <button type="button"   className="btn btn-primary btn-lg px-4 me-md-2" style={{ backgroundColor: 'blue', color: 'white' }}>Primary</button>
                            <button type="button"   className="btn btn-outline-secondary btn-lg px-4">Default</button> */}

                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={props.image} className="d-block mx-lg-auto img-fluid shadow-lg" alt="my img" width="700" height="500" loading="lazy" style={{ borderRadius: '2%' }} />
                    </div>
                </div>
            </div>
        </>
    )
}
