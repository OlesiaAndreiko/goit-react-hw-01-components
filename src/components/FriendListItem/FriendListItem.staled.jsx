import styled from 'styled-components';

export const OnlineStatus = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'red' : 'green';
  }};
`;

export const Avatar = styled.img`
  display: block;
`;

export const Name = styled.p`
  font-size: 35px;
  font-weight: 400;
  align-items: center;
  text-shadow: 0px 0px 1px rgb(15, 14, 15, 70%);
`;
