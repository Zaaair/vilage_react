
import { NavLink } from 'react-router-dom';



const NavItem = (props) => {
    return(
        <NavLink to={props.road} activeStyle={{color: 'gold'}}>
        {props.name}
    </NavLink>

    )
}

export default NavItem;