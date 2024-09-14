import { useRef } from 'react';
import { portfolioList } from '../data/DataPortfolio';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

function Portfolio() {
    const gridRef = useRef(null);

    const handleMouseDown = (e) => {
        const grid = gridRef.current;
        grid.isDown = true;
        grid.startX = e.pageX - grid.offsetLeft;  
        grid.scrollLeftAtStart = grid.scrollLeft;  
    };
    

    const handleMouseLeave = () => {
        const grid = gridRef.current;
        grid.isDown = false;
    };

    const handleMouseUp = () => {
        const grid = gridRef.current;
        grid.isDown = false;
    };

    const handleMouseMove = (e) => {
        const grid = gridRef.current;
        if (!grid.isDown) return;
        e.preventDefault();
        const x = e.pageX - grid.offsetLeft;
        const walk = (x - grid.startX) * 3; // Kecepatan scroll
        grid.scrollLeft = grid.scrollLeft - walk;
    };

    return (
        <section id="portfolio">
            <div className="wrapper">
                <h3>Portofolio</h3>
                <div
                    className="grid"
                    ref={gridRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {
                        portfolioList.map((item) => (
                            <div className="item" key={item.id}>
                                <Link to={`/portfolio/${item.id}`}><img src={item.image} alt={item.title} /></Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
