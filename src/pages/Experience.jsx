import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiVite } from "react-icons/si";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'



function Experience() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <h1>Pengalaman</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<SiVite />}
                    >
                        <h3 className="vertical-timeline-element-title">Curaweda</h3>
                        <h4 className="vertical-timeline-element-subtitle">QE</h4>
                        <p>
                            Saya bekerjasama dengan curaweda, merancang sebuah aplikasi untuk presensi umum, saya sendiri mempunyai role sebagai QE(Quality Engineering)
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - 2023"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Median Skill</h3>
                        <h4 className="vertical-timeline-element-subtitle">FE dan BE</h4>
                        <p>
                            Saya membuat website e-commer sekaligus dengan database nya.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - 2023"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaHtml5 />}
                    >
                        <h3 className="vertical-timeline-element-title">Learning X</h3>
                        <h4 className="vertical-timeline-element-subtitle">Full Stack</h4>
                        <p>
                            Saya Membuat beberapa Projek seperti kalkulator, wishlist, fanbook beserta database nya menggunakan mysql.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Experience