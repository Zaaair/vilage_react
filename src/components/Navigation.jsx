
import { NavLink } from 'react-router-dom';
import NavItem from '../modules/NavItem';


const Navigation = () => {
    return (
        <nav className='navigation'>
            <NavItem name='Profile' road='/profile' />
            <NavItem name='Dialogs' road='/dialogs' />
            <NavItem name='Massages' road='/massages' />
            <NavItem name='News' road='/news' />
            <NavItem name='Music' road='/music' />

        </nav>
    )
}

export default Navigation;