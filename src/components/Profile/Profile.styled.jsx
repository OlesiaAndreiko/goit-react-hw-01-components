import styled from 'styled-components';

export const ProfileUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 1px solid rgb(205, 204, 204, 50%);
  box-shadow: 0px 0px 3px rgb(15 14 15 / 70%);
  border-radius: 4px;
`;
export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const ProfileAvatar = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  padding: 15px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 30px;
  font-weight: 500;
  align-items: center;
  text-shadow: 0px 0px 4px rgb(15, 14, 15, 70%);
`;

export const UserTag = styled.p`
  margin: 0;
  padding: 5px;
  color: #7a6c6c;
  font-size: 22px;
  align-items: center;

  text-shadow: 0px 0px 4px rgb(0, 0, 0, 53%);
`;

export const UserLocation = styled.p`
  margin: 0;
  padding: 5px;
  color: #7a6c6c;
  font-size: 24px;
  align-items: center;

  text-shadow: 0px 0px 4px rgb(0, 0, 0, 53%);
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;

  background-color: rgb(138, 161, 184, 22%);
  margin: 0;
  padding: 0;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgb(205, 204, 204, 50%);
  padding: 20px;
  gap: 5px;
`;
export const LastStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: none;
  padding: 20px;
  gap: 5px;
`;

export const StatsLabel = styled.span`
  font-size: 18px;
  color: #7a6c6c;
  text-shadow: 0px 0px 2px rgb(0, 0, 0, 53%);
`;

export const StatsQuantity = styled.span`
  font-size: 22px;
  font-weight: 500;
  text-shadow: 0px 0px 3px rgb(15, 14, 15, 70%);
`;
