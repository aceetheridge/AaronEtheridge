import React from 'react';
import Job from './Job.js'
import './style.css';

const JobsCard = ({jobsList}) => {
    const cardDraw = jobsList.map((proj, i) => {
        return <Job key={i} title={jobsList[i].title} 
        website={jobsList[i].website} description={jobsList[i].description} 
        logo={jobsList[i].logo} company={jobsList[i].company} years={jobsList[i].years}/>
    })
    return (
        <div className=" cf justify-center ma3 ">
                {cardDraw}

        
        </div>
    );
}

export default JobsCard;