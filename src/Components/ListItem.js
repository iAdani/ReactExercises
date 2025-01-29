import React from "react";

const ListItem = (props) => {
    return (
        <div>
            {props.user.name} ({props.user.username})
        </div>
    )
}

export default ListItem;