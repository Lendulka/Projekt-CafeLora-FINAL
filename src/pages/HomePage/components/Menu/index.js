import { Drink } from '../Menu/components/Drink'
import './style.css'

export const Menu = (props) => {
  const { drinks } = props
  const element = document.createElement('section')
  element.classList.add('menu')
  element.setAttribute('id', 'menu')
  element.innerHTML = `
      <div class="container">
        <h2>Naše nabídka</h2>
        <p class="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div class="drinks-list"></div>
        <div class="order-detail">
          <a href="objednavka">Detail objednávky</a>
        </div>
      </div>
    `

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

  const listDrinksElm = element.querySelector('.drinks-list')
  listDrinksElm.append(
    // lze poslat jen Drink(oneDrink)
    ...drinks.map((oneDrink) => Drink({
      drinkId: oneDrink.id,
      name: oneDrink.name,
      ordered: oneDrink.ordered,
      image: oneDrink.image,
      layers: oneDrink.layers,
    }))
  )

  return element
}