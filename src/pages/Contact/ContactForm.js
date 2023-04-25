import React from 'react'
import Button from 'react-bootstrap/esm/Button'

export const ContactForm = () => {
    return (
        <div style={{ padding: '10%', backgroundImage: 'url(https://data.whicdn.com/images/267688386/original.gif)' }}>
            {/* <!--Section: Contact v.2--> */}
            <section className="mb-10" style={{ padding: '5%', backgroundColor: '#2C3333', color: 'white', borderRadius: '2%' }}>
                {/* <!--Section heading--> */}
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
                <p className='text-muted text-center' >You do not need to fill all fields !</p>
                {/* <!--Section description--> */}
                {/* <p  className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form action="https://getform.io/f/d7ca0034-8dc9-43a9-9f7d-c86c8500ff5f" method="POST">

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="name" className="">Your name</label>
                                        <input type="text" id="name" name="name" className="form-control" />
                                    </div>
                                </div >
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="email" className="">Your email</label>
                                        <input type="text" id="email" name="email" className="form-control" />
                                    </div >
                                </div >
                                {/* <!--Grid column--> */}

                            </div >
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="subject" className="">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                    </div >
                                </div >
                            </div >
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    </div >

                                </div >
                            </div >
                            {/* <!--Grid row--> */}

                            < div className="text-center text-md-left pt-4" >
                                {/* <a  className="btn btn-primary" >Send</a> */}
                                < button className="btn btn-primary" type="submit" > Send</button >
                            </div >
                        </form >
                        <div className="status" ></div >
                    </div >
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-3 text-center">
                        <ul className = "list-unstyled mb-0">
                        <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p>Agadir,founty</p>
                        </li >

                        <li><i className="fas fa-phone mt-4 fa-2x"></i>
                            <p>0650380177</p>
                        </li >

                        <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p>ayoubelouaizi@gmail.com</p>
                        </li >
                    </ul >
                </div >
                {/* <!--Grid column--> */}

        </div >

            </section >
    {/* <!--Section: Contact v.2--> */ }
        </div >
    )
}
