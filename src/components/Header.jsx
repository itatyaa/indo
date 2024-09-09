import profilePicture from '../assets/Chandra2.png'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} />
                <h3>Chandra Arga Jaya Alfarel</h3>
                <p>Programmer</p>
                <div className='socialMedia'>
                    <a href='https://www.instagram.com/chandra_alfarel27'><FaInstagram /></a>
                    <a href='https://github.com/itatyaa'><FaGithub /></a>
                </div>
            </div>
        </header>
    )
}

export default Header