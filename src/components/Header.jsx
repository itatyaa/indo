import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <p>Programmer</p>
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/chandra_alfarel27'><FaInstagram /></a>
                    <a href='https://github.com/itatyaa'><FaGithub /></a>
                    <a href='https://wa.me/+6285647884233'><FaWhatsapp /></a>
                </div>
            </div>
        </header>
    )
}

export default Header