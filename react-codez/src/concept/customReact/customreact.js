function customRender(reactEle, Container) {

    //v 1.0
    /*
    const domElement = document.createElement(reactEle.type);
    domElement.innerHTML = reactEle.children;
    domElement.setAttribute('href',reactEle.props.href);
    domElement.setAttribute('target',reactEle.props.target);

    Container.appendChild(domElement);
    */

    //v 2.0

    const domElement = document.createElement(reactEle.type);
    domElement.innerHTML = reactEle.children; // adding the text of element via dom Element
    //looping for passing all attributes/properties to the html element
    for (const prop in reactEle.props) {
        // if the texxt written within tag is passsed in props of the reactElement object it check for that
        if (prop === 'children') continue; 
        domElement.setAttribute(prop, reactEle.props[prop]) // passing element attribute with seAttribute
    }

    Container.appendChild(domElement); // with appendChild injected the VirtualDOM of JS in the div root

}
const user = 'ayush';
//creating tree like sturture model of react bundler(vite or babel) using object concept of JS
//TREE structure of React working
const reactElement = { 
    type: 'a',
    props: {
        href: 'https://www.linkedin.com/in/ayush-kumar-82745324b/.',
        target: '_blank'
    },
    children: 'Click Me to visit my Linkedin',
    user //we pass down the final outcome of evaluted expression of JS.
    //Its just like passing user in  => html tag <p> the link of {user}</p> but in object form
}

//Its the container linked to the html file to inject the reactElement content via querySelector
const mainContainer = document.querySelector('#root');  

customRender(reactElement, mainContainer); // created a function to render the element by passing it to the container

