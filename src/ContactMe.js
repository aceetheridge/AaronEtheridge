import React from 'react';
import './style.css';


class ContactMe extends React.Component {
    constructor(props){
      super(props);
    }

    render(){


        return(
            <div className='cf w-100 flex flex-wrap ma4 justify-center z-1'>
                <div className=' blue150 ma4 br3 tc pa3 grow'><a className='f4 fw6 db light-blue link dim no-underline-hover z-100' href='https://drive.google.com/file/d/1FpbRx8VEWY4pAUsalSh5lqJlPaYxjfuF/view?usp=sharing' target='_blank'>Pretty Resume</a></div>
                <div className='blue150 ma4 br3 tc pa3 grow'><a className='f4 fw6 db light-blue link dim  z-100' href='https://drive.google.com/file/d/1WHG8xEWzZyIY9paI5UtVa9EJAEs4JO31/view?usp=sharing' target='_blank'>Simple Resume</a></div>'
                <div>
                    
                </div>
            </div>
        )
    }
};

export default ContactMe;