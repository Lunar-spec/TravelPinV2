import { GiDirectionSigns } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div>
                <Link to={'/'} className="logo">
                    Travel Pin
                    <GiDirectionSigns className='icon' />
                </Link>
            </div>
            <div className="links">
                <div>
                    <Link to={'/about'} className="link">
                        About
                    </Link>
                </div>
                <div>
                    <Link to={'/login'} className="link">
                        Login
                    </Link>
                </div>
                <div>
                    <Link to={'/register'} className="link">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar