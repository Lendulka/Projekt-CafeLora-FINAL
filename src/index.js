
import { HomePage } from './pages/HomePage'
import { OrderPage } from './pages/OrderPage'
import './style.css'

const { pathname } = window.location

const appElm = document.querySelector('#app')

if (pathname === BASE_PATH + '/' || pathname === BASE_PATH + '/home') {
    appElm.append(HomePage())
} else if (pathname === BASE_PATH + '/objednavka') {
    appElm.append(OrderPage())
}



