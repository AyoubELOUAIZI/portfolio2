import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from '../../common/Alert/alert';
const UpdateInfoPop = ({ showUpdateInfo, setShowUpdateInfo, account, setAccount }) => {

    const defaultImage = "https://i.pinimg.com/236x/37/10/97/3710970c86f357babf9dfc9b957ca0a5.jpg";

    //URL
    const apiUrl = process.env.REACT_APP_API_URL;
    const [error, setError] = useState("")
    //
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (!showUpdateInfo) {
            return;
        }
        setEmail(account?.email);
        setUserName(account?.userName)
        setLinkedin(account?.linkedin)
        setPhoto(account?.photo)
        setPassword(account?.password)
    }, [showUpdateInfo])

    //5 data
    const emailRef = useRef(null);
    const userNameRef = useRef(null);
    const LinkedinRef = useRef(null);
    const photoRef = useRef(null);
    const passwordRef = useRef(null);

    //
    useEffect(() => {
        if (error.length > 0) {
            setAlertParams({
                color: "red",
                msg: error,
                icon: "error",
            });
            setAlert(true)
        }
    }, [error])


    const validateFields = (email, userName, Linkedin, photo, password) => {
        setError("");
        if (!email) {
            setError("Please enter your email");
            return false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError("Please enter a valid email address");
            return false;
        } else {
            // additional email validation rules
            const [local, domain] = email.split('@');
            if (local.length > 64) {
                setError("Your email username is too long");
                return false;
            } else if (domain.length > 255) {
                setError("Your email domain is too long");
                return false;
            } else if (/\.\./.test(domain)) {
                setError("Your email domain is not valid");
                return false;
            } else if (!/^((?!@)[\w-_.]*[a-zA-Z0-9])+$/.test(local)) {
                setError("Your email username is not valid");
                return false;
            } else {
                setError("");
            }
        }

        if (!userName) {
            setError("please user name is required");
            return false;
        } else if (userName.trim().length < 5) {
            setError("please verify your user name");
            return false;
        } else if (userName.length > 20) {
            setError("please verify your user name");
            return false;
        } else {
            setError("");
        }

        if (!Linkedin) {
            setError("Please enter your LinkedIn account link");
            return false;
        } else if (!/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(Linkedin)) {
            setError("Please enter a valid LinkedIn account link");
            return false;
        } else {
            setError("");
        }


        if (!photo) {
            setError("Please enter the link to your LinkedIn profile photo");
            return false;
        } else if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(photo)) {
            setError("Please enter a valid link to your LinkedIn profile photo");
            return false;
        } else {
            setError("");
        }


        if (!password) {
            setError("please password is required");
            return false;
        } else if (password.length < 8) {
            setError("please password at least 8 characters");
            return false;
        } else {
            setError("");
        }
        return true;
    };



    const handelUpdateInfo = async (event) => {
        event.preventDefault();
        setError("");
        const email = emailRef.current.value;
        const userName = userNameRef.current.value;
        const Linkedin = LinkedinRef.current.value;
        const photo = photoRef.current.value;
        const password = passwordRef.current.value;

        // console.log(error);
        const isValid = validateFields(email, userName, Linkedin, photo, password);
        if (!isValid) {
            // console.log('not valide! ')
            return
        }

        //sent to login api
        console.log('data are actully good')
        try {
            const response = await axios.patch(`${apiUrl}/api/account/`,
                {
                    //and other data
                    email: email.trim(),
                    userName: userName.trim(),
                    linkedin: Linkedin.trim(),
                    photo: photo.trim(),
                    password: password.trim(),
                },
                { withCredentials: true, }
            );
            if (response) {
                console.log(response.data);
                setAccount(response.data.Account);
                //show an alert
                setAlertParams({
                    color: "green",
                    msg: `Thanks, ${account.userName}, your info has been updated successfully!`,
                    icon: "check",
                });
                setAlert(true)
                setShowUpdateInfo(false);
            }

        } catch (error) {
            console.log("an error shows in update user info");
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
            }, 7000);
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
                    show={showUpdateInfo}
                    onHide={() => setShowUpdateInfo(false)}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton style={{ backgroundColor: '#146C94' }}>
                        <Modal.Title>Sitting</Modal.Title>
                    </Modal.Header>
                    <Row className=" d-flex justify-content-center align-items-center">
                        <Col lg={12} xs={12}>
                            <div className="border border-3 border-primary"></div>
                            <Card className="shadow">
                                <Card.Body >
                                    <div className="mb-3 md-4">
                                        <div className="mb-3">
                                            <Form>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Email address
                                                    </Form.Label>
                                                    <Form.Control type="email" placeholder="You can enter email" onChange={(e) => setEmail(e.target.value)} value={email} ref={emailRef} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicName">
                                                    <Form.Label className="text-center">
                                                        User Name
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder="name" onChange={(e) => setUserName(e.target.value)} value={userName} ref={userNameRef} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicLinkedinLink">
                                                    <Form.Label className="text-center">
                                                        Your Linkedin Link
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder="Link" onChange={(e) => setLinkedin(e.target.value)} value={linkedin} ref={LinkedinRef} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPhotoLink">
                                                    <Form.Label className="text-center">
                                                        Your Linkedin/Account photo Link
                                                        <img src={photo ? photo : defaultImage} alt="" className="bd-placeholder-img rounded-circle" width="50" height="50" style={{ marginLeft: "10px" }} />
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder="Link" onChange={(e) => setPhoto(e.target.value)} value={photo} ref={photoRef} />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} ref={passwordRef} />
                                                </Form.Group>


                                                <div className="d-grid">
                                                    <Button onClick={handelUpdateInfo} variant="primary" type="submit">
                                                        update and save
                                                    </Button>
                                                </div>
                                            </Form>

                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Modal>
            </div>
        </>
    )
}
export default UpdateInfoPop;