import React from 'react';
import Tilt from 'react-tilt';
import './style.css';



const Job = (props) => {
    return(
    

        <div className=' cf w-100 flex flex-wrap justify-center ma4'>
            <div className=" fl w-20-l flex justify-center items-center order-1-l">
                <Tilt  className="Tilt w-80-m mw5 z-1 ">
                        <a  href={props.website} target="_blank">
                             <img className="Tilt-inner br3 " options={{ max: 100, reverse: true }} src={props.logo}/>
                        </a>
                </Tilt>
            </div>
            <div className=' flex items-center w-20-ns order-3-l '>
                <h1 className=' light-blue '>
                    {props.years}
                </h1>

            </div>
            <div className='pa3 fl w-50-l flex flex-column mr5 order-2-l '>
                <div className='light-blue'>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    <p className='white'>
                        {props.description}
                    </p>
                </div>
                
                
            </div>
        </div>
    );
}

export default Job;