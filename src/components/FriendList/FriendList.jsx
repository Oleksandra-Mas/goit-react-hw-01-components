import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/';
import { friend_list } from './FriendList.module.scss';
function FriendList({ friends }) {
    return (
        <ul className={friend_list}>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    );
}
FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.any).isRequired };
export default FriendList;
