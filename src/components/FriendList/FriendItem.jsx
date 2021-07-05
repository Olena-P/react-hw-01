import PropTypes from "prop-types";
import FriendList from "./FriendList";
import style from './FriendList.module.css'

function FriendItem({ friends}) {
    return (

        <ul className={style.list}>
            {friends.map((friend) => (
                <FriendList
                    key={friend.id}
                    name={friend.name}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
}

FriendItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.string.isRequired,
        })
    )
}

export default FriendItem;
