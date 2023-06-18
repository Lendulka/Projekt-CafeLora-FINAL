import { Layer } from '../Layer'
import './style.css'

export const Drink = (props) => {
    const { drinkId, name, ordered, image, layers } = props

    const element = document.createElement('div')
    element.classList.add('drink')
    element.innerHTML = `
        <div class="drink__product">
            <div class="drink__cup">
                <img src="${image}" alt="${name}">
            </div>
            <div class="drink__info">
                <h3>${name}</h3>
            </div>
        </div>
        <div class="drink__controls">
            <button class="order-btn">
                Objednat
            </button>
        </div>
    `

    const orderBtnElm = element.querySelector('.order-btn')
    if (ordered) {
        orderBtnElm.textContent = 'Zrušit'
        orderBtnElm.classList.add('order-btn--ordered')
    } else if (!ordered) {
        orderBtnElm.textContent = 'Objednat'
        orderBtnElm.classList.remove('order-btn--ordered')
    }

    const orderDrink = () => {
        fetch(`https://cafelora.kodim.app/api/me/drinks/${drinkId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                ordered: !ordered,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.status === 'success') {
                    element.replaceWith(Drink({
                        drinkId, name, ordered: !ordered, image, layers,
                    }))
                } else {
                    console.log('Data nebyla načtena')
                }
            })
    }

    orderBtnElm.addEventListener('click', orderDrink)

    const drinkInfoElm = element.querySelector('.drink__info')
    drinkInfoElm.append(...layers.map((oneLayer) => Layer(
        {
            color: oneLayer.color,
            label: oneLayer.label,
        }
    )))

    return element
}


