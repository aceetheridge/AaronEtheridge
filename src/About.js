import React, {Component} from 'react';
import './style.css';
import { Link } from "react-router-dom";

class About extends React.Component {
    constructor(props){
      super(props);
    }

    render(){


        return(
            <div className='cf w-100 flex flex-wrap flex-wrap-reverse-l justify-center '>
        

                <div className=' w-25-ns flex items-center min-h-50-l mw5  '>
                    <img className=' blue150 pa1 br-100 z-1' src="https://media.licdn.com/dms/image/C5603AQHZ9XIyp_EDgw/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=oPMoOlicpYg4wA06e4TxhFezB2kQrSGAnYiIRWTVlPM"/>
                </div>    
                <div className=' fl w-50-l mr5 ml5 '>
                    <h1 className='light-blue f2 f-headline-l'>Aaron C Etheridge</h1>
                    <p className='white'>Hello friend, my name is Aaron and I created this website as a portfolio for some of my professional work. In the spring of 2019, I graduated with a Bachelor's in Computer Engineering from the University of North Carolina at Charlotte.
                    Ever since I was a child I've had a passion to experiment and teach myself new things. Recently I have been teaching myself how to write cheats for some online videogames using C#. I like to dabble in just about everything not just technology.
                    I play a little guitar and a little piano, occasionally I make EDM tracks with FL Studio. I'm an amateur acrylic painter. I play about 15 games of chess a day, and I like writing reviews for places on Google. Check out some of my projects below.
                    If you're interested in contacting me you can find my information on the contact section of the menu or at the bottom of this page.  </p>
                </div>
                <div className=' ml5 w-80 flex flex-wrap '>
                    <div className='f3 f-4-l pa3 ma2 light-blue'>C++/C#/C </div>
                    <div className='f3 pa3 ma2 light-blue'>Java </div>
                    <div className='f3 pa3 ma2 light-blue'>Javascript, Node, Express, React, Redux, ES7 </div>
                    <div className='f3 pa3 ma2 light-blue'>VHDL </div>
                    <div className='f3 pa3 ma2 light-blue'>HTML/CSS </div>
                    <div className='f3 pa3 ma2 light-blue'>Python </div>
                    <div className='f3 pa3 ma2 light-blue'>GoLang </div>
                    <div className='f3 pa3 ma2 light-blue'>BlockChain </div>
                    <div className='f3 pa3 ma2 light-blue'> MySql</div>
                    <div className='f3 pa3 ma2 light-blue'> GitHub</div>
                    
               </div>
               
                

            </div>

        )
    }
    };

    export default About;