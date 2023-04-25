import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { Section } from './Section'
import ESTAimage from './../../assets/ESTA.jpg'
import Aljoulane from './../../assets/Aljoulane.jpg'
import Irondev from './../../assets/Irondev.jpg'
import Almourabitine from './../../assets/Almourabitine.jpg'
import Alhouria from './../../assets/Alhouria.jpg'


export const Education = () => {
  return (
    <>
      <NavBar />
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Some Places</h1 >
          <p className="lead fw-normal" > On this page, I have compiled a list of the various places where I have dedicated a significant amount of time to learning.</p >
          <Link className="btn btn-outline-secondary" to="/projects" > Mini Projects</Link >
        </div >
        <div className="product-device shadow-sm d-none d-md-block" ></div >
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" ></div >
      </div >
      <Section
        image={ESTAimage}
        title="Agadir Higher School of Technology"
        description="Agadir Higher School of Technology is a public institution of higher education located in Agadir, Morocco. It offers a variety of undergraduate and graduate programs in fields such as Computer Science, Electronics, Networks and Telecommunications, and Management of Information Systems, among others. Its mission is to provide quality education and training to prepare students for successful careers in the technology and management industries."
      />
      <Section
        image={Irondev}
        title="Irondev Agency"
        description="is a branch of the Irondev internet strategy consulting agency located in the Technopark Agadir technology park in Morocco. It specializes in providing digital marketing and consulting services to businesses and organizations in the region. The Technopark Agadir is a hub for technology and innovation companies, offering a collaborative environment for startups, entrepreneurs, and established businesses to develop and grow their projects. The presence of Irondev in the Technopark Agadir highlights its commitment to supporting the development of the local digital economy." />
      <Section
        image={Aljoulane}
        title="Lycée Aljoulane - Biougra"
        description="Is a high school located in the city of Biougra, Morocco. It provides secondary education to students in the region and offers a variety of academic programs, including general education in literature, science, and economics. The school's mission is to provide quality education to prepare students for higher education and successful careers in their chosen fields."
      />
      <Section
        image={Almourabitine}
        title="Lycée qualifiant Almorabitine - Biougra"
        description="Is a vocational high school located in the city of Biougra, Morocco. It offers technical and vocational training programs in various fields such as electrical engineering, construction, mechanics, and agriculture, among others. The school's mission is to provide students with practical skills and knowledge in their chosen field to prepare them for employment or further education in their respective industries."
      />
      <Section
        image={Alhouria}
        title="اعدادية الحرية - نيابة اشتوكة ايت باها"
        description="Is a public middle school located in the Ait Baha province of the Souss-Massa region in Morocco. It provides education to students in the middle school cycle, which includes students in the 7th, 8th, and 9th grades. The school offers a comprehensive curriculum covering a range of subjects, including mathematics, science, language, and social studies. Its mission is to provide quality education to prepare students for successful continuation of their studies in high school and beyond."
      />
      <Footer />
    </>
  )
}
