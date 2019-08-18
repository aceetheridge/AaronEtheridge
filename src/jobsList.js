import energyxchain from './energyxchain.png'
import charlotte from './charlotte.png'
export const jobsList = [
    {   title: 'Blockchain Developer',
        website: 'https://energyxchain.com/about-us',
        description: 'Working as part of a 5-person agile team I helped codesign and code a full-stack system that utilized the Hyperledger Blockchain framework. I wrote the frontend React app that communicates via a Node/Express API. I established all of the backend components inside of docker containers utilizing docker-composer and Kubernetes. I used CouchDB containers to store on-chain data for the network. I also set up the Kafka(RAFT) system that maintained the stability of the overall network. I co-wrote the chaincode in Golang with one other team member and works upon JSON objects and promises. I also built the API that connected the  off-chain data server, (IPFS), to the chaincode. ',
        logo: energyxchain,
        company: 'EnergyXchain',
        years: '2019'
    },
    {   title: `B.S. in Computer Engineering`,
        website: 'https://www.uncc.edu/',
        description: `My degree focused on computer hardware and embedded systems.
                         I have already completed some of my Master's credits and I would like to return to write 
                         a thesis on machine learning and AI. I graduated with Cum Laude honors at a 3.4 GPA`,
        logo: charlotte,
        company: 'University of North Carolina at Charlotte',
        years: '2016-2019'
    },
    
    {
        title: 'Bellhops Captain',
        company: 'Bellhops',
        website: 'https://www.getbellhops.com/',
        logo: 'https://pbs.twimg.com/profile_images/1058054182748516354/ZWsk67Dg_400x400.jpg',
        description: 'I led teams of 2 – 8 people on moving jobs. Coordinated with the customers to make sure the team met every one of the customer’s wishes. I personally maintained a customer review score in the top 3% of all employees..',
        years: '2017-2018'
    }];