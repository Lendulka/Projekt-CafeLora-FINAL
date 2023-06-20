
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import './style.css'

export const OrderPage = () => {
    const pageElement = document.createElement('div')
    pageElement.classList.add('page')

    const main = document.createElement('main')
    main.textContent = 'TEST'

    pageElement.append(Header({ showMenu: false }), main, Footer())

    return pageElement
}


