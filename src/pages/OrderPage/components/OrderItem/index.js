import './style.css'

export const OrderItem = (props) => {
    const { name, image } = props

    const element = document.createElement('div')
    element.classList.add('order-item')
    element.innerHTML = `
        <img class="order-item__image" src=${image} alt="${name}">
        <div class="order-item__name">${name}</div>
    `
    return element
}