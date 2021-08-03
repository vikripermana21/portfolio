import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyles';
import { Icon, InlineIcon } from '@iconify/react';
import wavingHand from '@iconify-icons/emojione/waving-hand';
import downloadIcon from '@iconify-icons/akar-icons/download';
import Typed from 'react-typed';

const Container = styled.div`
width:100%;
height:100%;
`
const HeroSection = styled.div`
width:100vw;
height:100vh;
background-image:url('assets/photo/background.png');
background-position:left bottom;
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

div.teks{
    margin-bottom:40px;
}

div.role{
    display:flex;
    justify-content:center;

    *{
        color:white;
        font-family: 'Overpass Mono', monospace;
        font-size:2vw;
    }
}

div.button{
display:flex;
justify-content:center;
}

p{
    font-family: 'Overpass Mono', monospace;
    color:white;
    font-size:1vw
}

h1{
    font-family: 'Bungee', cursive;
    color:#C55218;
    font-size:10vw;
    line-height:80%;
    margin-bottom:20px;
}

`

const Button = styled.a`
background: hsl(107deg 100% 32%);
border-radius: 12px;
border: none;
padding: 0;
cursor: pointer;
outline-offset: 4px;
text-decoration:none;
font-family: 'Overpass Mono', monospace;
transition:0.3s;

span{
    display: block;
    font-family: 'Overpass Mono', monospace;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.5rem;
    background: hsl(107deg 100% 40%);
    color: white;
    transform: translateY(-6px);
    transition:0.3s;
}
 
&.large{
    font-size:2vw;
}

&:active span{
    transform: translateY(-2px);
}

`

const AboutSection = styled.div`
height:100%;
width:100%;
background:#FFD60A;
display:flex;
justify-content:center;
padding:100px 0px;

div.about-wrapper{
    width:90%;
    height:100%;
    display:flex;
    justify-content:center;
}

div.column-1{
    height:100%;
    
    img{
        width:30rem;
        box-shadow:-25px 25px;
    }
}
div.column-2{
    width:60%;
    height:100%;
    padding-left:20px;

div.teks-wrap{
}

    h1{
        font-family: 'Bungee', cursive;
        margin-left:60px;
        color:#C55218;
        font-size:4rem;
    }
    p{
        font-family: 'Overpass Mono', monospace;
        font-size:1.7rem
    }
}
`


function App() {

    return (
        <>
            <GlobalStyle />
            <Container>
                <HeroSection>
                    <div className="teks">
                        <p className="animate__animated animate__fadeInLeftBig animate__delay-1s">hello there <Icon icon={wavingHand} /> i'm</p>
                        <h1 className="animate__animated animate__fadeInDownBig animate__slow">VIKRI</h1>
                        <div className="role">
                            <Typed
                                className="subteks animate__animated animate__fadeIn animate__slower animate__delay-0.7s"
                                strings={[
                                    'front end developer',
                                    'web designer',
                                    'gamer',
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                startDelay={1200}
                                loop
                            />
                            <br />
                        </div>
                    </div>
                    <div className="button">
                        <Button className="large">
                            <span class="front">
                                <Icon icon={downloadIcon} /> resume
                            </span>
                        </Button>
                    </div>
                </HeroSection>
                <AboutSection>
                    <div className="about-wrapper">
                        <div className="column-1">
                            <img src="assets/photo/profile.jpeg" alt="" />
                        </div>
                        <div className="column-2">
                            <div className="teks-wrap">
                                <h1>About Me</h1>
                                <br />
                                <p>Hello my name is Vikri Permana , you can call me vikri or whatever you want to
                                    <br /> <br />
                                    I am passionate on Design and Web Development
                                    <br /> <br />
                                    I am just graduated at High School , as Software Engineer Student
                                    <br /><br />
                                    I like listening to some music recently , cause its keeps my mood stable :D
                                    <br /><br /><br /><br /><br />
                                    Education Journey : <br />
                                    SDN SUMBER SARI INDAH > SMPN 39 BANDUNG > SMKN 11 BANDUNG
                                </p>
                            </div>
                        </div>
                    </div>
                </AboutSection>
            </Container>
        </>
    )
}

export default App
