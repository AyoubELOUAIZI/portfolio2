import React from 'react'
import './Card.css'
import image1 from './../../assets/photo.jpg'
export const Card = () => {

    const Projects = [
        {
            id: 1,
            image: "https://e0.pxfuel.com/wallpapers/538/393/desktop-wallpaper-beautiful-natural-scenery-gallery-beautiful-nature.jpg",
            title: "Small Gallary",
            description: "this is a small gallary to apload and store photos/images in cloudinary and there url in mysql data base",
            codeUrl: "https://github.com/AyoubELOUAIZI/gallery-cloudinary-prisma-mysql-express-react"
        },
        {
            id: 2,
            image: "https://image.winudf.com/v2/image1/Y29tLmlkcy5zbWFydGNhbGN1bGF0b3Jfc2NyZWVuXzBfMTU2Njk5NjE4MV8wNjk/screen-0.jpg?fakeurl=1&type=.jpg",
            title: "Calculator",
            description: "simple calculater using mathjs library and react",
            codeUrl: "https://github.com/AyoubELOUAIZI/react-calculater"
        },
        {
            id: 3,
            image: "https://play-lh.googleusercontent.com/lomBq_jOClZ5skh0ELcMx4HMHAMW802kp9Z02_A84JevajkqD87P48--is1rEVPfzGVf",
            title: "QR Code generater",
            description: "mini projetc in react to generate qr codes from the text input and store theme in the browser storage",
            codeUrl: "https://github.com/AyoubELOUAIZI/QRCode-Reactjs"
        },
        {
            id: 4,
            image: "https://storage.googleapis.com/support-kms-prod/mQmcrC93Ryi2U4x5UdZNeyHQMybbyk71yCVm",
            title: "Scanner app",
            description: "small app for scanning Qr codes I create this app during the final project for testing,and I have used just React native expo",
            codeUrl: "https://github.com/AyoubELOUAIZI/react-native-Simple-Scanner"
        },
        {
            id: 5,
            image: "https://blogs.glowscotland.org.uk/fa/public/AntoninePSP4/uploads/sites/1611/2012/11/swiss-weather-forecast.jpg",
            title: "Weather App",
            description: "web app using react and public apis to get data for weater status by city name.",
            codeUrl: "https://github.com/AyoubELOUAIZI/React-Wheather-App"
        },
        {
            id: 6,
            image: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",
            title: "Todo list",
            description: "simple todo list for traning on react just for learning porposes",
            codeUrl: "https://github.com/AyoubELOUAIZI/react-todo-list"
        },
        {
            id: 7,
            image: "https://cdn-icons-png.flaticon.com/512/3917/3917754.png",
            title: "Search",
            description: "this is small implemantation of the search it was for test befor using it in the final project and  it has tow methods of search using the api and using only react states",
            codeUrl: "https://github.com/AyoubELOUAIZI/SIMPLE-MyERN-CRUD"
        },
        {
            id: 8,
            image: "https://www.atatus.com/glossary/content/images/size/w960/2021/07/CRUD.jpeg",
            title: "CRUD",
            description: "This is a crud operation implementation for training for mysql in nodeJS with react frontend",
            codeUrl: "https://github.com/AyoubELOUAIZI/SIMPLE-MyERN-CRUD"
        },
    ]

    return (
        <div>
            <div>
                <h2 className="Cardstitle">SOME OF MY MINI PROJECTS ON GitHub</h2>
            </div>
            <div className='Cardcontainer'>

                {Projects.map(projet => (
                    <div className="container" style={{ marginBottom: '5%' }}>
                        <div className="card">
                            <div className="front" >
                                <img src={projet.image} alt="" style={{}} width="100%" height="100%" />
                            </div>
                            <div className="back">
                                <h1>{projet.title}</h1>
                                <p style={{ textAlign: 'center' }}>{projet.description}</p>
                                <a type="button" target="_blank" rel="noreferrer" href={projet.codeUrl} className="btn btn-secondary">Code in github</a>

                            </div>
                        </div >
                    </div >
                ))}
            </div >
        </div >
    );
}
