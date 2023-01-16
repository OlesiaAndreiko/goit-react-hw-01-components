import PropTypes from 'prop-types';
import {
  Statistic,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.staled';

export const Statistics = ({ title, stats }) => {
  return (
    title && (
      <Statistic>
        <Title>{title}</Title>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage + '%'}</StatPercentage>
            </StatItem>
          ))}
        </StatList>
      </Statistic>
    )
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
