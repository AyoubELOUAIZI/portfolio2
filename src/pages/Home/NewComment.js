import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Alert from '../../components/common/Alert/alert';
export const NewComment = ({ showAddComment, setShowAddComment, account, getAllComments }) => {


    const apiUrl = process.env.REACT_APP_API_URL;
    const [error, setError] = useState("")
    const commentlRef = useRef(null);
    const [loading, setLoading] = useState(false);


    //When a new error apear the alert will trigger
    useEffect(() => {
        console.log(error)
        if (error.length > 0) {
            setAlertParams({
                color: "red",
                msg: error,
                icon: "error",
            });
            setAlert(true)
        }
    }, [error])

    const validateFields = (comment) => {
        if (!comment) {
            setError("please you did not enter a comment!");
            return false;
        } else if (comment.length > 400) {
            setError("please your comment is to long!");
            return false;

        } else if (comment.trim().length < 6) {
            setError("please your comment is to short!");
            return false;
        } else {
            setError("");
        }
        return true;
    };

    const handelSendComment = async (event) => {
        event.preventDefault();
        setError("");

        //if in progress user should wait
        if (loading) {
            setError("Please wait adding comment is in progress ...");
            return;
        }
        const comment = commentlRef.current.value;
        const isValid = validateFields(comment);
        if (!isValid) {
            console.log('not valide! ')
            return
        }

        try {
            setLoading(true);
            const response = await axios.post(`${apiUrl}/api/comment/add-comment`, { comment }, { withCredentials: true, });
            // setAccount(data.account);
            if (response) {
                console.log(response.data);
                setLoading(false);
                //show an alert
                setAlertParams({
                    color: "green",
                    msg: `Thank you, ${account.userName}, for your kind comment. I truly appreciate your thoughtful words.`,
                    icon: "check",
                });
                setAlert(true)
                getAllComments();
                setShowAddComment(false);
            }
        } catch (error) {
            setLoading(false);
            console.log("an error shows in commenting");
            if (error.response) {
                const backendError = error.response.data.error;
                setError(backendError);
            }
            console.log(error);
        }

    }

    //for the alert
    const [alert, setAlert] = useState(true);
    const [alertParams, setAlertParams] = useState({
        color: "",
        msg: "",
        icon: "",
    });
    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(false);
                setError("");
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <>
            <div>
                <Alert
                    color={alertParams.color}
                    msg={alertParams.msg}
                    icon={alertParams.icon}
                    setAlert={setAlert}
                    alert={alert}
                />
                <Modal
                    show={showAddComment}
                    onHide={() => setShowAddComment(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton >
                        {/* <Modal.Title>New comment</Modal.Title> */}
                    </Modal.Header>
                    <Row className=" d-flex justify-content-center align-items-center" >
                        <Col lg={12} xs={12}>
                            {/* <div   className="border border-3 border-primary"></div> */}
                            <Card className="shadow">
                                <Card.Body >
                                    <div className="mb-3 md-4">
                                        <div className="mb-3">
                                            <Form>

                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    {/* <Form.Label>Example textarea</Form.Label> */}
                                                    <Form.Control as="textarea" placeholder="comment ..." rows={3} ref={commentlRef} />
                                                </Form.Group>

                                                <div className="d-grid">
                                                    <Button variant="primary" onClick={handelSendComment} type="submit">

                                                        {!loading ? 'Add comment' :
                                                            <>
                                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                Adding comment ...
                                                            </>
                                                        }
                                                    </Button>
                                                </div>
                                            </Form>

                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Modal >
            </div >
        </>
    )
}
