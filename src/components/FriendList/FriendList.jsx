import React from "react";
import PropTypes from "prop-types";
import style from './FriendList.module.css'

function FriendList({ name, avatar, isOnline }) {
    return (
        <li className={style.item} FriendItem>
            <span className={(style.status, isOnline ? style.online : style.offline)} />
            <img className={style.avatar} src={avatar} alt="" width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
}

export default FriendList;