import NavItem from "../modules/NavItem";
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className='navigation'>
            <Link to={`/profile`} >
                <NavItem name='Profile' />
            </Link>

            <Link to={`/dialogs`} >
                <NavItem name='Dialogs' />
            </Link>
            <Link to={`/massages`} >
                <NavItem name='Massages' />
            </Link>
            <Link to={`/news`} >
                <NavItem name='News' />
            </Link>
            <NavItem name='Music' />
        </nav>
    )
}

export default Navigation;