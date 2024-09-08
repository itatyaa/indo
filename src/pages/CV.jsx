import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaUser, FaSchool, FaBriefcase } from "react-icons/fa";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function CV() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <h1>Curriculum Vitae</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--personal"
                        date="Personal Detail"
                        iconStyle={{ background: '#007bff', color: '#fff' }}
                        icon={<FaUser />}
                    >
                        <h3 className="vertical-timeline-element-title">Chandra Arga Jaya Alfarel</h3>
                        <p>
                            <strong>Umur:</strong> 17<br />
                            <strong>Alamat:</strong> Buahbatu 302<br />
                            <strong>Jenis Kelamin:</strong> Laki-laki<br />
                            <strong>Hobi:</strong> Main game<br />
                            <strong>Nomor HP:</strong> 085647884233<br />
                            <strong>Email:</strong> chandraargajaya@gmail.com<br />
                            <strong>Bahasa:</strong> Indonesia
                        </p>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="Pendidikan"
                        iconStyle={{ background: '#28a745', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">SMK Negeri 4 Bandung</h3>
                        <h4 className="vertical-timeline-element-subtitle">Jurusan: Rekayasa Perangkat Lunak</h4>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Kemampuan"
                        iconStyle={{ background: '#f39c12', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >                        <p>
                            <strong>Saya menguasai java, laravel, html, css, bootstrap, c#, react, mysql. Selain itu saya cepat dalam belajar apapun</strong>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default CV;