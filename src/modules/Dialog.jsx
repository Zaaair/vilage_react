import { NavLink } from "react-router-dom";

const Dialog = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className="dialog-item">
            <NavLink activeStyle={{color: 'gold'}} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;