import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import './style.css';
import TintImg from '../assets/image.png';
import DetailingImg from '../assets/image2.png'

function Body() {
  return (
    <>
    <div className='welcome-container'>
      <h2 className='main-header'> Welcome to Car Central </h2>
      <p className='main-p'> Below are the services we provide </p>
    </div>
    <Figure className="custom-figure">
      <Figure.Image
        src={TintImg}
        alt="171x180"
        className="custom-image"
      />
    </Figure>
    <section className='text-container'>
     <h1 className='h1'> Window Tinting</h1>
     <p className='text-p'> Upgrade your driving experience with our professional window tinting service. Not only does tinting add a touch of style to your vehicle, but it also enhances privacy and keeps your interior cooler during those hot summer days. </p>
     <Link to='/tinting'> <button className='view-btn'> VIEW MORE </button>  </Link>   
    </section>
    <Figure className="custom-figure2">
      <Figure.Image
        src={DetailingImg}
        alt="171x180"
        className="custom-image2"
      />
    </Figure>
    <section className='text-container2'>
     <h1 className='h1'> Detailing </h1>
     <p className='text-p'> Elevate your vehicle's appearance with our premium car detailing service. At Car Central, we specialize in meticulous exterior and interior treatments using advanced techniques and top-tier products. From revitalizing paint finishes to restoring interiors to pristine condition, our dedicated team ensures every detail reflects our commitment to automotive excellence. Discover the ultimate in car care and aesthetics with Car Central, where quality craftsmanship meets unparalleled passion. </p>
     <Link to='/detailing'> <button className='view-btn'> VIEW MORE </button>  </Link>   
    </section>
 
    
  </>
  );
}

export default Body;
