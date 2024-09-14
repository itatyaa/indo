import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>Tentang</h3>
                
                <h4>Kontak</h4>
                <p>Email : chandraargajaya@gmail.com</p>
                <p>No. Telp : +62 856-4788-4233</p>
                <h4>Bahasa pemrograman & Alat</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaBootstrap /><RiTailwindCssFill />
                    <FaLaravel /><FaGit /><VscVscode />

                </div>
            </div>
        </section>
    )
}

export default About