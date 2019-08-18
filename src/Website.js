import React from 'react';
import './style.css';


class Website extends React.Component {
    constructor(props){
      super(props);
    }

    render(){


        return(
            <div className='cf w-100 flex flex-wrap ma4 justify-center z-1'>
                <div className=' blue150 ma4 br3 tc pa3 grow'><a className='f4 fw6 db light-blue link dim no-underline-hover z-100' href='https://aceetheridge.github.io/Image-Detection-Website/' target='_blank'>Click here to be redirected to my Image Detection Website</a></div>
                
                <div>
                    
                </div>
            </div>
        )
    }
};

export default Website;