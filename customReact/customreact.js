function customRender(reactElement, container) {
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // second approach

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue 
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
    // till here

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        terget: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)