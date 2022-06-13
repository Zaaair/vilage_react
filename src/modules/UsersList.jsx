import UserListItem from "./UserListItem"

const UsersList = (props)=> {
    return(
        <div className="users-list">
            <ul className="users-list-items">
                <UserListItem name="user1" />
            </ul>
        </div>
    )
}

export default UsersList;