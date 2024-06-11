import { Link } from 'react-router-dom'
import Navbar from './header'


export default function nav () {
    return(
        <Navbar
        links={[
          <Link key={1} className="link" to="/">Cars Central</Link>,
          <Link key={2} className="link" to="/about">About</Link>,
          <Link key={3} className="link" to="/services">Services</Link>,
          <Link key={4} className="link" to="/contact">Contact</Link>
        ]}
      />
    
    )
}