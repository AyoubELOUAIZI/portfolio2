import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
export const Photo = ({ showPhoto, setShowPhoto, photo }) => {
    return (
        <div >
            <Modal
                show={showPhoto}
                onHide={() => setShowPhoto(false)}
                // backdrop="static"
                keyboard={false}
                centered
                size="lg"
            >
                <Row className=" d-flex justify-content-center align-items-center" >
                    <Col lg={12} xs={12} >
                        <Card className="shadow" style={{ backgroundColor: 'white' }}>
                            <Card.Body >
                                <div className="mb-3 md-4" >
                                    <div className="mb-3" style={{textAlign:'center'}}>
                                        <img src={photo} alt="" style={{ maxHeight: '90vh' ,borderRadius:'50%'}} />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Modal >
        </div>
    )
}
