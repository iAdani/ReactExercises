import React, { useState } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { deleteUser } from "../Services/api";

const UserList = (props) => {
    
    const [search, setSearch] = useState("");
    
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleRemove = async (userId) => {
        const user = await deleteUser(userId);
        dispatch(removeUser(user))
    }

    return (
        <div>
            <input 
                onChange={e => setSearch(e.target.value)}/>

            { users.map((user, index) => (
                (search === "" || user.name.toLowerCase().includes(search.toLowerCase())) ?
                    <>
                        <ListItem
                            user={user}
                            key={user.username} />
                        <button 
                            onClick={() => handleRemove(index)}>Remove</button>
                    </>
                    : <></>
            ))}
        </div>
    )
}

export default UserList;