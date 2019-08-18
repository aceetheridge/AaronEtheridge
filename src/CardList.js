import React from 'react';
import Project from './Project.js'

const CardList = ({projectList}) => {
    const cardDraw = projectList.map((proj, i) => {
        return <Project key={i} title={projectList[i].title} github={projectList[i].github} summary={projectList[i].summary} image={projectList[i].image}/>
    })
    return (
        <div className="cf flex flex-wrap justify-center">
                {cardDraw}

        
        </div>
    );
}

export default CardList;