import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    );
}
FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.any).isRequired };
export default FriendList;
