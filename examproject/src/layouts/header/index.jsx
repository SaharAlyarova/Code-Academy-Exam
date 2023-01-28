import React from 'react'
import { Link } from 'react-router-dom'
import App from '../../components'
import "./headerStyle.scss"
const Header = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div><h1>Notary</h1></div>
            <div>
                <ul>
                 <Link to={'/'} style={{color:"black"}}>   <li>Home</li></Link>
                    <li><App/></li>
                    <li>Testimonials</li>
                    <li>About</li>
                    <li>Contact</li>
                    <Link to={'/addpage'} style={{color:"black"}}><li>Add Page</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header