function customRender(reactElement , container)
{
    const  domElement = document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target )

    mainContainer.appendChild(domElement)
}
const reactElement = {
    type : 'a',
    props : {
        href : 'google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)
