import PropTypes from 'prop-types';
function FriendListItem({ friend }) {
    const { name, avatar, isOnline } = friend;
    return (
        <li className="item">
            {isOnline ? (
                <span className="status online">green</span>
            ) : (
                <span className="status offline">red</span>
            )}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
}
FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};
export default FriendListItem;
