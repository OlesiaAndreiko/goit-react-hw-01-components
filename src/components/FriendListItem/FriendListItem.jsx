import PropTypes from 'prop-types';
import { Name, Avatar, OnlineStatus } from './FriendListItem.staled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <OnlineStatus isOnline={!isOnline}></OnlineStatus>
      <Avatar src={avatar} alt={'User ' + name} width="48" height="48px" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
