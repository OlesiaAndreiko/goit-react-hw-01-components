import PropTypes from "prop-types";
import {
  ProfileUser,
  ProfileDesc,
  ProfileAvatar, 
  UserName, 
  UserTag,
  UserLocation,
  ProfileStats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
  LastStatsItem,
} from "./Profile.styled"

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (    
<ProfileUser>
<ProfileDesc>
  <ProfileAvatar
    src={avatar}
    alt={"User " + username}
  />
  <UserName>{username}</UserName>
  <UserTag>{"@"+tag}</UserTag>
  <UserLocation>{location}</UserLocation>
</ProfileDesc>

<ProfileStats>
  <StatsItem>
    <StatsLabel>Followers</StatsLabel>
    <StatsQuantity>{followers}</StatsQuantity>
  </StatsItem>
  <StatsItem>
    <StatsLabel>Views</StatsLabel>
    <StatsQuantity>{views}</StatsQuantity>
  </StatsItem>
  <LastStatsItem>
    <StatsLabel>Likes</StatsLabel>
    <StatsQuantity>{likes}</StatsQuantity>
  </LastStatsItem>
</ProfileStats>
</ProfileUser>
  );
};

  Profile.propTypes = {
    user: PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    }).isRequired,
};


