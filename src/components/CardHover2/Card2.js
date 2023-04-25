import React from 'react'
import './Card2.css'
export const Card2 = () => {
    const TOOLS = [
        {
            imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*EitUXT-pqbaQSCTt.gif",
            title: "ReactJS",
            description: "It allows developers to declaratively describe user interfaces, taking a lot of the heavy lifting out of the coding process while making the code more simple to read and understand.",

        },
        {
            imageUrl: "https://raw.githubusercontent.com/yoavain/create-windowless-app/main/resources/docs/logo.gif",
            title: "NodeJS",
            description: "In a nutshell, Node. js is a popular programming environment that can be used for building high-scale applications that need to support multiple concurrent requests.",

        },
        {
            imageUrl: "https://www.pistalix.in/wp-content/uploads/2018/11/mysql.gif",
            title: "MySQL",
            description: "One of the reasons MySQL is the world's most popular open source database is that it provides comprehensive support for every application development need.",

        },
        {
            imageUrl: "https://onepatch.com/wp-content/uploads/2022/03/REACT_NATIVE.gif",
            title: "React Native",
            description: "Designed for building apps on multiple platforms like iOS, Android, and also web applications",

        },
    ]
    return (
        <div>
            <h2 className="Cardstitle">PROJECTS TOOLS I HAVE USED</h2>
            <div className='card2'>

                {TOOLS.map(tool => (
                    <div className="card">
                        <div className="imgbox">
                            <img src={tool.imageUrl} alt='' width="100%" height="100%" />
                        </div>

                        <div className="content" >
                            <h2>{tool.title}</h2>
                            <p>{tool.description}</p>
                        </div >
                    </div >
                ))}
            </div >
        </div >
    )
}
