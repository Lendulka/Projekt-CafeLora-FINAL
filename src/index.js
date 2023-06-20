
import { HomePage } from './pages/HomePage'
import { OrderPage } from './pages/OrderPage'
import './style.css'

const { pathname } = window.location

const appElm = document.querySelector('#app')

if (pathname === '/') {
    appElm.append(HomePage())
} else if (pathname === '/objednavka') {
    appElm.append(OrderPage())
}


