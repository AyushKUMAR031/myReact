import React from "react";
import ReactDOM from 'react-dom/client';

//React provide us a method to creatElement 
//It helps to pass an element  as per ReactDOM,
//so that it can transCompile it to objects and form tree structure to render that element.
const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.linkedin.com/in/ayush-kumar-82745324b/.',
        target: '_blank'
    },
    'Click Me to visit my Linkedin'
);

//with the power of algos it optimize multiple thing behind the things
//which make react a powerful library.
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)