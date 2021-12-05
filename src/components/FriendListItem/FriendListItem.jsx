import PropTypes from 'prop-types';
function FriendListItem({ friend }) {
    const { name, avatar, isOnline } = friend;
    return (
        <li class="item">
            {isOnline ? (
                <span class="status online">green</span>
            ) : (
                <span class="status offline">red</span>
            )}
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
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
