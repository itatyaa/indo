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
                            <strong>Saya menguasai berbagai bahasa pemrograman. <br /></strong>
                            <ul>
                                <li>
                                Java: Menguasai Java untuk pengembangan aplikasi berbasis desktop dan mobile, dengan kemampuan dalam pemrograman berorientasi objek serta pembuatan aplikasi yang efisien dan scalable
                                </li><br />
                                <li>
                                Laravel: Berpengalaman menggunakan Laravel sebagai framework PHP untuk membangun aplikasi web yang kuat dan modular, dengan fitur seperti routing, middleware, dan ORM Eloquent.
                                </li><br />
                                <li>
                                HTML: Menguasai HTML untuk pembuatan struktur dan konten web, memastikan bahwa markup yang digunakan sesuai standar dan semantik
                                </li><br />
                                <li>
                                CSS: Terampil dalam penggunaan CSS untuk mempercantik tampilan web, menciptakan desain responsif dan user-friendly dengan pendekatan modern seperti Flexbox dan Grid
                                </li><br />
                                <li>
                                Bootstrap: Berpengalaman dengan Bootstrap sebagai framework front-end untuk membangun layout web yang responsif dan cepat, memanfaatkan komponen UI yang telah tersedia untuk pengembangan yang lebih efisien
                                </li><br />
                                <li>
                                C#: Menguasai C# dalam pengembangan aplikasi desktop dan game menggunakan framework seperti .NET dan Unity, dengan fokus pada pemrograman berorientasi objek dan pengembangan aplikasi yang performatif 
                                </li><br />
                                <li>
                                React: Terampil dalam menggunakan React untuk membangun user interface yang dinamis dan interaktif, dengan pendekatan komponen berbasis JavaScript untuk pengembangan aplikasi web modern. <br />
                                </li><br />
                                <li>
                                MySQL: Memiliki kemampuan dalam desain, pengelolaan, dan optimisasi database MySQL, memastikan performa query yang optimal dan data integrity.
                                </li>
                            </ul>
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