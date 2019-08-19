import React from 'react';
import { projectList } from './projectList';
import JobsCard from './JobsCard';
import { jobsList } from './jobsList';
import CardList from './CardList';
import Ham from './hamburger';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './About'
import Particles from 'react-particles-js';
import ContactMe from './ContactMe';
import Website from './Website'

import './App.css';
import './knight.svg';





const particlesOptions = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 1500
        }
      }
    },
    polygon: {
        draw: {
            enable: true,
            stroke: {
                color: "rgb(255,0,0)"
            }
        }
    },
    interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          },
      }
  },
  modes: {
    bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0
    },
    repulse: {
        distance: 400,
        duration: 4
    }
}


//   polygon: {
//     debug: false,
//     fps_limit: 1,
//     enable: true,
//     type: 'inside',
//     move: {
//         radius: 10
//     },
//     url: './knight.svg'
// }

//   fps_limit: 1,
//   debug: false,
//   particles: {
//       number: {
//           value: 200,
//           density: {
//               enable: true
//           }
//       },
//       line_linked: {
//           enable: true,
//           distance: 30,
//           opacity: 0.4
//       },
//       move: {
//           speed: 1
//       },
//       opacity: {
//           anim: {
//               enable: true,
//               opacity_min: 0.05,
//               speed: 2,
//               sync: false
//           },
//           value: 0.4
//       }
//   },
//   polygon: {
//       enable: true,
//       scale: 5,
//       type: "inline",
//       move: {
//           radius: 10
//       },
//       url: '/knight.svg',
//       inline: {
//           arrangement: "equidistant"
//       },
//       draw: {
//           enable: true,
//           stroke: {
//               color: "rgba(0, 0, 0, 1)"
//           }
//       }
//   },
//   retina_detect: false,
//   interactivity: {
//       events: {
//           onhover: {
//               enable: true,
//               mode: "bubble"
//           }
//       },
//       modes: {
//           bubble: {
//               size: 6,
//               distance: 40
//           }
//       }
//   }

  };

const App = () => {
    return(
        
            <div className='  center'>
                    <BrowserRouter>
                        
                        <Particles className='particles ' params={particlesOptions} />
                        <Ham />
                        
                        <Switch>
                            <Route exact path="" render={props => (<div><About /><JobsCard {...props} jobsList={jobsList}/> <CardList {...props} projectList={projectList}/> <ContactMe className='z-2'/></div> )}/>
                            <Route exact path="/" render={props => (<div><About /><JobsCard {...props} jobsList={jobsList}/> <CardList {...props} projectList={projectList}/> <ContactMe className='z-2'/></div> )}/>
                            <Route exact path="/JobsCard" render={props => (<div className=' aspect-ratio aspect-ratio--1x1'><JobsCard {...props} jobsList={jobsList} /></div>)}/>
                            <Route  path="/CardList" render={props => (<CardList {...props} projectList={projectList}/>)}/> 
                            <Route  path="/AboutMe" render={props => (<div className='aspect-ratio aspect-ratio--1x1'> <About/></div>)}/>
                            <Route  path='/ContactMe' render={props => (<div className='aspect-ratio aspect-ratio--1x1'> <ContactMe/></div>)}/>
                            <Route  path='/Image-Detection-Website' render={props => (<div className='aspect-ratio aspect-ratio--1x1'> <Website/></div>)}/>
                        </Switch>
                    </BrowserRouter>
                    
                
            </div>
        
    )
}

export default App;