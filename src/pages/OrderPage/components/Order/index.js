import { OrderItem } from "../../components/OrderItem"
import './style.css'

export const Order = (props) => {
  const { items } = props

  const element = document.createElement('div')
  element.classList.add('order__content', 'container')
  element.innerHTML = `
        <h1>Vaše objednávka</h1>
        <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
        <div class="order__items"></div>
    `

  if (items === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const filterResult = data.result.filter((oneOrderItem) => oneOrderItem.ordered === true)
        const emptyOrderElm = element.querySelector('.empty-order')

        if (filterResult.length > 0) {
          element.replaceWith(Order({
            items: filterResult,
          }))
          emptyOrderElm.classList.add('empty-order--hide')
        } else {
          emptyOrderElm.classList.remove('empty-order--hide')
        }
      })

    return element
  }

  const orderItemsElm = element.querySelector('.order__items')
  orderItemsElm.append(...items.map((oneItem) => OrderItem({
    name: oneItem.name,
    image: oneItem.image,
  })))

  return element
}




/*
if (drinks === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.status === 'success') {
          element.replaceWith(Menu({ drinks: data.result }))
        } else {
          console.log('Data nebyla načtena')
        }
      })
    return element
  }
  */