import React from 'react'

export const Slider = () => {
    const img1 = "https://www.icegif.com/wp-content/uploads/cool-wallpapers-icegif-1.gif";
    const img2 = "https://www.kg-legal.eu/wp-content/uploads/2021/10/blockchain.gif";
    const img3 = "https://forums.macrumors.com/attachments/img_8142-gif.1871673";
    const img4 = "https://blog.logrocket.com/wp-content/uploads/2022/05/testing-go-restful-backend-postman-tool.gif";
    // const img4 = "https://gifdb.com/images/thumbnail/call-me-ice-age-movie-sid-sloth-meme-hm5oblqunio1eebp.gif";
    return (
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner" height="400px" >
                <div class="carousel-item active" >
                    <img src={img1} alt="" width="100%" height="500" />
                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>What are the most kind of Project I Like to do ?</h1>
                            <p>In this slider, I will showcase the projects that I am passionate about working on, not necessarily because I possess expertise in these areas, but because I take pride in exploring and tackling new challenges.</p>
                            {/* <p><a class="btn btn-lg btn-primary" href="#">سجل اليوم</a></p> */}
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
                    <img src={img2} alt="" width="100%" height="500" />
                    <div class="container" >
                        <div class="carousel-caption">
                            <h1>Blockchain projects</h1>
                            <p>Blockchain projects have always intrigued me with their ability to offer unparalleled security and transparency. I am eager to delve deeper into the technology and work on projects that leverage blockchain's potential to transform industries and improve people's lives.</p>
                            {/* <p><a class="btn btn-lg btn-primary" href="#">contact me</a></p> */}
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
                    <img src={img3} alt="" width="100%" height="500" />
                    <div class="container">
                        <div class="carousel-caption text-end">
                            <h1>React Native and Mobile Projects</h1>
                            <p>I am drawn to React Native projects due to my interest in mobile app development and my appreciation for the efficiency and flexibility that this technology provides. I look forward to exploring new opportunities to utilize React Native in my projects.</p>
                            {/* <p><a class="btn btn-lg btn-primary" href="#">تصفح المعرض</a></p> */}
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
                    <img src={img4} alt="" width="100%" height="500" />
                    <div class="container">
                        <div class="carousel-caption text-end">
                            <h1>Web development</h1>
                            <p>As a student with a keen interest in web development, I am particularly drawn to backend development projects. I am eager to learn how to design and implement complex systems, work with different databases and programming languages, and create efficient and scalable solutions. I am excited to work on web development projects that challenge me and help me gain the skills and experience necessary to become a successful backend developer.</p>
                            {/* <p><a class="btn btn-lg btn-primary" href="#">تصفح المعرض</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">السابق</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">التالي</span>
            </button>
        </div>
    );
}
