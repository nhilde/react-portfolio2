import React from 'react';
import '../styles/aboutMe.css'
import pic from '../images/selfie.jpg'
import Footer from './footer';
import Navigation from './navigation';
// import MobileNav from './mobileNav';

function AboutMe() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                crossorigin="anonymous"
            />
            <link rel="stylesheet" href="../styles/aboutMe.css" />

            <Navigation/>
           

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className=" mainHeader3">About Me</h1>
                </div>
            </div>

            

            <div className='row mainRow justify-content-center'>
                <div className='col-8 mainCol'>
                    <img src={pic} alt='' className='mainPic'></img>
                </div>
            </div>

            <br/>
           
            <div className='row mainRow justify-content-center'>
                <div className='col-6 secondCol'>
                    <p className='textArea'>My name is Noah and i'm from Northeast Philadelphia. I am a fullstack web developer, currently finishing up the Penn LPS Coding Bootcamp.
                    I'm a huge fan of music and sports and i'm super excited for the world cup this summer. I love learning new things and find React especially interesting. Coding and web development really
                    drew me in with the idea of building really interesting projects and being able to put a creative touch on them. I'm working on a few passion projects on the side to expand
                    my understanding of different technologies and would eventually love to build something I can share with the world.</p>
                </div>
            </div>

            <br/>
            <br/>

            <Footer/>













        </>
    )
}

export default AboutMe;