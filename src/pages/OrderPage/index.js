
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Order } from "./components/Order"

export const OrderPage = () => {
    const pageElement = document.createElement('div')
    pageElement.classList.add('page')

    const main = document.createElement('main')
    main.classList.add('order')
    main.append(Order({ items: 'loading' }))

    pageElement.append(Header({ showMenu: false }), main, Footer())

    return pageElement
}

