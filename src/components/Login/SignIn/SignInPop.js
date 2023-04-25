import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Alert from '../../common/Alert/alert';
const SignInPop = ({ show, setShow, setShowSignUp, account, setAccount }) => {
  //URL
  const apiUrl = process.env.REACT_APP_API_URL;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //data
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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


  const validateFields = (email, password) => {

    if (!email) {
      setError("please email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("please email not valide");
      return false;
    } else {
      setError("");
    }

    if (!password) {
      setError("please password is required");
      return false;
    } else if (password.trim().length < 8) {
      setError("please password at least 8 characters");
      return false;
    } else {
      setError("");
    }
    return true;
  };

  //the sign in Logic here//
  const handelSignin = async (event) => {
    event.preventDefault();
    setError("");

    //if in progress user should wait
    if (loading) {
      setError("Please wait Login is in progress ...");
      return;
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const isValid = validateFields(email, password);
    if (!isValid) {
      console.log('not valide! ')
      return
    }

    //sent to login api
    console.log('data are actully good')
    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/api/user/sign-in`,
        {
          email: email.trim(),
          password: password.trim(),
        },
        { withCredentials: true }
      );
      if (response) {
        // console.log(response.data);
        setAccount(response.data.Account);
        setLoading(false);
        setShow(false);
      }


    } catch (error) {
      setLoading(false);
      console.log("an error shows in sign in");
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
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <>
      <Alert
        color={alertParams.color}
        msg={alertParams.msg}
        icon={alertParams.icon}
        setAlert={setAlert}
        alert={alert}
      />
      <div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton style={{ backgroundColor: '#146C94' }}>
            <Modal.Title>Sign in</Modal.Title>
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
                          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
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
                          <Button variant="primary" onClick={handelSignin} type="submit">
                            {!loading ? 'Login' :
                              <>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                              </>
                            }
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account?{" "}
                          <span onClick={() => { setShowSignUp(true); setShow(false); }} style={{ cursor: 'pointer' }} className="text-primary fw-bold">
                            Sign up
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
export default SignInPop;

