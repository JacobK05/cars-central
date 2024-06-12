import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import './style.css';
import TintImg from '../assets/image.png';

function Body() {
  return (
    <>
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
     <Link to='/tinting'> <button> VIEW MORE </button>  </Link>   
    </section>
    
  </>
  );
}

export default Body;
