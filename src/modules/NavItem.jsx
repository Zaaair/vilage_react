

const NavItem = (props)=> {
    return(
        <div className="nav-item">
            <a href="/"> {props.name}</a>
        </div>
    )
}

export default NavItem;