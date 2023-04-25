import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from '../../common/Alert/alert';
const SignUpPop = ({ showSignUp, setShowSignUp, setShow, account, setAccount }) => {
  //URL
  const apiUrl = process.env.REACT_APP_API_URL;
  const defaultImage = "https://i.pinimg.com/236x/37/10/97/3710970c86f357babf9dfc9b957ca0a5.jpg";
  const [image, setImage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);

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
      setError("please your user name very short!");
      return false;
    } else if (userName.length > 20) {
      setError("please your user name very long!");
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

  //the sign in Logic here//
  const handelSignUpn = async (event) => {
    event.preventDefault();
    setError("");

    //if in progress user should wait
    if (loading) {
      setError("Please wait Login is in progress ...");
      return;
    }
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
      setLoading(true);
      const response = await axios.post(`${apiUrl}/api/user/sign-up`,
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
        setLoading(false);
        setShowSignUp(false);
        //show an alert
        setAlertParams({
          color: "green",
          msg: `Thanks, ${account.userName}, for signing up. I appreciate your time!`,
          icon: "check",
        });
        setAlert(true)
      }

    } catch (error) {
      setLoading(false);
      console.log("an error shows in sign up");
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
          show={showSignUp}
          onHide={() => setShowSignUp(false)}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Header closeButton style={{ backgroundColor: '#146C94' }}>
            <Modal.Title>Sign up</Modal.Title>
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
                          <Form.Control type="email" placeholder="You can enter email" ref={emailRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label className="text-center">
                            User Name
                          </Form.Label>
                          <Form.Control type="text" placeholder="name" ref={userNameRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLinkedinLink">
                          <Form.Label className="text-center">
                            Your Linkedin Link
                          </Form.Label>
                          <Form.Control type="text" placeholder="Link" ref={LinkedinRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhotoLink">
                          <Form.Label className="text-center">
                            Your Linkedin/Account photo Link
                            <img src={image ? image : defaultImage} alt="" className="bd-placeholder-img rounded-circle" width="50" height="50" style={{ marginLeft: "10px" }} />
                          </Form.Label>
                          <Form.Control type="text" placeholder="Link" ref={photoRef} onChange={e => setImage(e.target.value)} />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="text-primary" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button onClick={handelSignUpn} variant="primary" type="submit">

                            {!loading ? 'Create Account' :
                              <>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Creating Account...
                              </>
                            }
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account?{" "}
                          <span onClick={() => { setShowSignUp(false); setShow(true); }} style={{ cursor: 'pointer' }} className="text-primary fw-bold">
                            Sign in
                          </span>
                        </p>
                      </div>
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
export default SignUpPop;