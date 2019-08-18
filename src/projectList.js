import graph from './graph.png';
import sys from './sys.png';
import faces from './faces.png';

export const projectList = [
{   title: 'Senior Design HyperLedger Blockchain Energy Trading Network',
    github: 'https://github.com/aceetheridge/Hyperledger-Energy-Trading-Network',
    summary: 'Utilizing the Hyperledger Fabric as a foundation for the blockchain network,  I developed a Javascript API that could communicate with the blockchain through the internet. The API utilized nodeJS and the ExpressJs module to manage the routes of the network. My teams Project took 3rd Place overall (out of 97) in the Engineering senior design competition. (Senior Design Project)',
    image: 'https://tr1.cbsistatic.com/hub/i/r/2018/05/08/7647646f-8726-4bd2-904b-1c1059b6fc91/resize/770x/dbc6ad5527a4772a1e115017b5f5c65c/hyperledgerhero.jpg'
},
{   title: 'Image Detection Website',
    github: 'https://github.com/aceetheridge/Image-Detection-Website/',
    summary: `I Developed a React app that can take in an image from a URL and then either draw boxes around the faces in the image, or describe the image's properties.(Personal Project)`,
    image: faces
},
{   title: 'This Portfolio Website',
    github: 'https://github.com/aceetheridge/AaronEtheridge',
    summary: 'Taught myself Reactjs in my personal time and built and designed this webpage for my resume. I created my own hamburgur menu and stylized the menus. (Personal Project)',
    image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
},
{   title: 'C++ Branch Prediction Methods',
    github: 'https://github.com/aceetheridge/Cpp-BranchPredictionMethods',
    summary: 'This project simulates different common branch prediction methods found on x86 and ARMv8 Processors. The prediction methods included in this repository are Gshare, Global, One-level, and Two-Level, as well as my own prediction Method which combines certain aspects from other methods. My Competiton branch predictor had an accuracy of 99.3% and came in second in the class of 87 students. (Class Project)',
    image: 'https://danluu.com/images/branch-prediction/17-local.png'
},
{   title: 'AI Multi-Layer Perceptron for MINST Image Set',
    github: 'https://github.com/aceetheridge/AI-CPP-MultiLayerPerceptron',
    summary: `Using an array file that contains the weights and biases from a python training program, my MLP program first adjusts the weights and biases to 5bit accuracy. Then it feeds the weights and biases through two convolutional layers that return an array with 10 indexes. The highest valued index of the matrix is the guess that my MLP makes, this MLP was 100% accurate with everything except 3's and 8's was about 80% accurate. (Class Project)` ,
    image: 'https://www.researchgate.net/profile/Steven_Young11/publication/306056875/figure/fig1/AS:393921575309346@1470929630835/Example-images-from-the-MNIST-dataset.png'
},
{   title: 'VHDL Systolic Array Matrix Multiplication',
    github: 'https://github.com/aceetheridge/VHDL-Systolic-Array-Matrix-Multiplication',
    summary: 'VHDL implementation of a systolic array matrix multiplier. The systolic array is an efficient mechanism that performs dot matrix multiplication without the minimum number of reads or writes to memory. (Class Project)',
    image: sys
},
{   title: 'C++ L1 and L2 Cache Simulator',
    github: 'https://github.com/aceetheridge/CPP-L1L2Cache-Simulator',
    summary: 'This project simulates different configurations of L1 and L2 memory cache on a processor. This program takes in different arguments like block size, cache size, seperation between the cache, and different levels of associativity. With different cache configurations, this program returns the hit and mis rate of a predefined program. (Class / Personal)',
    image: 'https://www.cbronline.com/wp-content/uploads/2016/06/what-is-cache-memory.jpg'
},
{   title: 'C++ Graph Data Structure for Movie Costars',
    github: 'https://github.com/aceetheridge/Graph-Data-Structure',
    summary: 'Using a Database of movies, and actors, I generated a graph visualization that draws clusters of actors and ties them to all of their costars.',
    image: graph
}];