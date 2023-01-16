import styled from 'styled-components';

export const Statistic = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  border: 1px solid rgb(205, 204, 204, 50%);
  border-radius: 4px;
  padding: 0;
  margin: 0;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  height: 40px;
  margin: 0 auto;
  padding: 20px;
  font-size: 30px;
  font-weight: 500;
  color: rgb(109 116 130);
  text-shadow: 2px 3px 5px rgb(177 164 164);
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgb(205, 204, 204, 50%);
  padding: 20px;
  gap: 5px;
  color: #ffffff;
`;

export const StatLabel = styled.span`
  font-size: 18px;
  align-items: center;
  text-shadow: 0px 0px 2px rgb(0, 0, 0, 53%);
`;

export const StatPercentage = styled.span`
  font-size: 22px;
  font-weight: 500;
  align-items: center;
  text-shadow: 0px 0px 3px rgb(15, 14, 15, 70%);
`;
