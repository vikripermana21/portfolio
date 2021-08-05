import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyles';
import { Icon } from '@iconify/react';
import wavingHand from '@iconify-icons/emojione/waving-hand';
import downloadIcon from '@iconify-icons/akar-icons/download';
import Typed from 'react-typed';
import ScrollAnimation from 'react-animate-on-scroll';

const Container = styled.div`
width:100%;
height:100%;
background:#FFD60A;
overflow:hidden;
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
overflow:hidden;

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

@media (max-width: 1024px) {
    p{
        font-family: 'Overpass Mono', monospace;
        color:white;
        font-size:2vw
    }
    
    h1{
        font-family: 'Bungee', cursive;
        color:#C55218;
        font-size:20vw;
        line-height:80%;
        margin-bottom:20px;
    }
  }

@media (max-width: 768px) {
    p{
        font-family: 'Overpass Mono', monospace;
        color:white;
        font-size:3vw;
    }
    
    div.role{
        display:flex;
        justify-content:center;
    
        *{
            color:white;
            font-family: 'Overpass Mono', monospace;
            font-size:3vw;
        }
    }

    h1{
        font-family: 'Bungee', cursive;
        color:#C55218;
        font-size:20vw;
        line-height:80%;
        margin-bottom:20px;
    }
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
overflow:hidden;

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
        -webkit-text-stroke: 2px black;
    }
    p{
        font-family: 'Overpass Mono', monospace;
        font-size:1.7rem
    }
}

@media (max-width: 1024px) {
    div.about-wrapper{
        display:flex;
        flex-direction:column;
        align-items:center;

    }
    div.column-1{
        overflow:hidden;
        margin-bottom:40px;
        img{
            visibility:hidden;
            width:20px;            
        }
    }
    div.column-2{
        width:100%;
        height:100%;
    
        h1{
            font-family: 'Bungee', cursive;
            color:#C55218;
            margin-left:0px;
            font-size:3rem;
            -webkit-text-stroke: 2px black;
        }
        p{
            font-family: 'Overpass Mono', monospace;
            font-size:1.2rem
        }
    }
  }

`

const ProjectSection = styled.div`
height:100%;
width:100%;
background:#FFD60A;
display:flex;
align-items:center;
padding:100px 0px;
flex-direction:column;
overflow:hidden;

h1.title{
    font-family: 'Bungee', cursive;
    color:#C55218;
    font-size:8rem;
    -webkit-text-stroke: 1px black;
}
div.project{
width:90%;
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
}

@media (max-width: 768px) {
    h1.title{
        font-family: 'Bungee', cursive;
        color:#C55218;
        font-size:3rem;
        -webkit-text-stroke: 1px black;
    }
    div.project{
        width:100%;
        display:flex;
        justify-content:space-evenly;
        flex-wrap:wrap;
        }
  }

`

const Kotak = styled.div`
height:400px;
width:400px;
background:#E4B50B;
margin-top:40px;
transition:1s;
display:flex;
justify-content:flex-end;
flex-direction:column;
padding: 10px 20px;

&:hover{
    box-shadow:-30px 30px;
    cursor:pointer;
}

h1{
    font-family: 'Overpass Mono', monospace;
        font-size:1.7rem
}

@media (max-width: 768px) {
    height:200px;
width:200px;

}    `

const EndSection = styled.div`
height:100%;
width:100%;
background:#FFD60A;
padding:100px 10px 10px 10px;
overflow:hidden;
div.container{
    width:90%;
    display:flex;
justify-content:space-between;
}

h1{
    font-family: 'Overpass Mono', monospace;
    font-size:1.7rem;
}
p{
    font-family: 'Overpass Mono', monospace;
    font-size:1.4rem;
}

@media (max-width: 768px) {
    div.container{
        width:100%;
        display:flex;
    justify-content:space-between;
    }
    
    h1{
        font-family: 'Overpass Mono', monospace;
        font-size:0.6rem;
    }
    p{
        font-family: 'Overpass Mono', monospace;
        font-size:0.6rem;
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
                        <ScrollAnimation animateIn="fadeInLeftBig">
                            <p>hello there <Icon icon={wavingHand} /> i'm</p>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInDown">
                            <h1>VIKRI</h1>
                        </ScrollAnimation>
                        <div className="role">
                            <Typed
                                className="subteks"
                                strings={[
                                    'front end developer',
                                    'web designer',
                                    'gamer',
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                startDelay={1500}
                                loop
                            />
                            <br />
                        </div>
                    </div>
                    <ScrollAnimation animateIn="fadeIn" duration={1} delay={1200}>
                        <div className="button">
                            <Button href="assets/vikri-resume.pdf" className="large" download>
                                <span class="front">
                                    <Icon icon={downloadIcon} /> resume
                                </span>
                            </Button>
                        </div>
                    </ScrollAnimation>
                </HeroSection>
                <AboutSection>
                    <div className="about-wrapper">
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="column-1">
                                <img src="assets/photo/Profile.jpeg" alt="" />
                            </div>
                        </ScrollAnimation>
                        <div className="column-2">
                            <div className="teks-wrap">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h1>About Me</h1>
                                </ScrollAnimation>
                                <br />
                                <ScrollAnimation animateIn="fadeInUp" delay={500}>
                                    <p>Hello my name is Vikri Permana , you can call me vikri or whatever you want to
                                        <br /> <br />
                                        I am passionate on Design and Web Development
                                        <br /> <br />
                                        I am just graduated at High School , as Software Engineer Student
                                        <br /><br />
                                        I like listening to some music recently , cause its keeps my mood stable :D
                                        <br /><br /><br /><br /><br />
                                        Education Journey : <br />
                                        SDN SUMBER SARI INDAH &gt; SMPN 39 BANDUNG &gt; SMKN 11 BANDUNG
                                    </p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </AboutSection>
                <ProjectSection>
                    <ScrollAnimation animateIn="bounceInDown">
                        <h1 className="animate__animated animate__pulse animate__slower animate__infinite title">PROJECTS</h1>
                    </ScrollAnimation>
                    <div className="project">
                        <ScrollAnimation animateIn="fadeIn" delay={1000}>
                            <Kotak>
                                <h1>supervise</h1>
                                <p>REACT JS + EXPRESS JS</p>
                            </Kotak>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" delay={1300}>
                            <Kotak>
                                <h1>monev bankeu</h1>
                                <p>LARAVEL</p>
                            </Kotak>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" delay={1600}>
                            <Kotak>
                                <h1>real estate</h1>
                                <p>REACT JS</p>
                            </Kotak>
                        </ScrollAnimation>
                    </div>
                </ProjectSection>
                <EndSection>
                    <div className="container">
                        <div>
                            <h1>EMAIL -</h1>
                            <p>vikripermana91@gmail.com</p>
                        </div>
                        <div>
                            <h1>PHONE -</h1>
                            <p>+(62)815-6393-6568</p>
                        </div>
                    </div>
                    <p>&copy; 2021 vikri</p>
                </EndSection>
            </Container>
        </>
    )
}

export default App
