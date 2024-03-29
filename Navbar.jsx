import { Link, Outlet } from "react-router-dom"
// import Avatar from './assets/avatar1'

import './Navbar.css'

const Navbar = () => {

    return(

        <>

            <div>

                {/* <img src={Avatar} alt="logo" /> */}

            </div>

            <div className="nav-bar" >

                <Link className="link" to = '/'>Home</Link> 
                <Link className="link" to = '/about'>About</Link>
                <Link className="link" to = '/contact'>Contact</Link>
                <Link className="link" to = '/setting'>Setting</Link>
                <Link className="link" to = '/LogIn' >LogIn</Link>
                <Link className="link" to = '/form'>Form</Link>

            </div>
        
        
        </>
    )
}

export default Navbar