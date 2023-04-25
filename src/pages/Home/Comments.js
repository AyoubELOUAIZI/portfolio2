import React, { useEffect, useState } from 'react'
import { UserComment } from './UserComment.js';
import axios from 'axios'
import SignInPop from '../../components/Login/SignIn/SignInPop.js';
import SignUpPop from '../../components/Login/SignUp/SignUpPop.js';
import { NewComment } from './NewComment.js';
export const Comments = ({ account, setAccount }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [comments, setComments] = useState([]);

    const [show, setShow] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false)
    const [showAddComment, setShowAddComment] = useState(false)

    const getAllComments = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/comment`);
            if (response) {
                // console.log(response.data);
                setComments(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const fetchUserAccount = async () => {
        if (account) {
            console.log('account exist');
            return;
        }
        try {
            const { data } = await axios.get(`${apiUrl}/api/user/my-account`, { withCredentials: true, });
            console.log(data)
            setAccount(data.Account);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        fetchUserAccount();
        getAllComments();
    }, [])


    //
    function handelAddComment() {
        console.log('add your comment here');
        if (account === null) {
            //for login
            setShow(true);
        } else {
            //for add comment
            setShowAddComment(true);
        }

    }

    const mycomment = {
        comment: "Please navigate or reload the page if you don't say other comments.",
        createdAt: "2023-04-24T17:45:46.262Z",
        Account: {
            userName: 'elouaizi',
            linkedin: "https://ma.linkedin.com/in/ayoub-elouaizi-2b1742234",
            photo: "https://media.licdn.com/dms/image/D4E03AQGeDoREgVEr_A/profile-displayphoto-shrink_200_200/0/1681387549463?e=1687996800&v=beta&t=0w84eOcYXiLkbGr_eoC_4__aS0DORkyIutCPgAj1kAQ",
            isUsertverified: true,
        }
    }
    return (
        <div>
            <div className="container marketing">
                <h2 className="pb-2 border-bottom text-warning">what amazing people are saying:</h2>
                <button className="btn btn-primary" onClick={handelAddComment} type="button" >
                    <span className="spinner-grow spinner-grow-sm" style={{ marginRight: '5px', color: account === null ? 'yellow' : 'green' }
                    } role="status" aria-hidden="true" ></span >
                    {account === null ? "Sign in and comment" : "Connected,Add a comment ..."}
                </button >
                <div className="row" >
                    <UserComment mycomment={mycomment} />
                    {
                        comments && comments.map(comment => (
                            <UserComment key={comment.comment_id} mycomment={comment} />
                        ))
                    }
                </div >
            </div >
            <SignInPop show={show} setShow={setShow} setShowSignUp={setShowSignUp} setAccount={setAccount} account={account} />
            <SignUpPop showSignUp={showSignUp} setShowSignUp={setShowSignUp} setShow={setShow} setAccount={setAccount} account={account} />
            <NewComment showAddComment={showAddComment} setShowAddComment={setShowAddComment} account={account} getAllComments={getAllComments} />
        </div >
    )
}
