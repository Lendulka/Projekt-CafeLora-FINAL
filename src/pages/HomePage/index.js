import { Banner } from "./components/Banner"
import { Menu } from "./components/Menu"
import { Gallery } from "./components/Gallery"
import { Contact } from "./components/Contact"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const HomePage = () => {
    const pageElement = document.createElement('div')
    pageElement.classList.add('page')

    const main = document.createElement('main')
    main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact())

    pageElement.append(Header({ showMenu: true }), main, Footer())

    return pageElement
}

