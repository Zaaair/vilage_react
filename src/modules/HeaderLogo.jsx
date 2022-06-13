import Logo from './../iconn/account.png'
import { Link } from 'react-router-dom'

const HeaderLogo = () => {
    return (
        <div className='header-logo'>
            <Link to={`/`} >
                <img className='header-logo-img' alt='#' src={Logo} />
            </Link>
        </div>

    )
}

export default HeaderLogo