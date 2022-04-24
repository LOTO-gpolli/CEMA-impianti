import PropTypes from "prop-types";
import TimelineItem from '../TimelineItem/TimelineItem';
import styles from './Timeline.module.css';

const Timeline = ({ content }) => {
  return (
    <div className={`${styles['timeline']}`}>
      {content.map((item, index) => {
        let reverse = false;

        if (index % 2 !== 0) {
          reverse = true;
        }

        return (
          <TimelineItem
            title={item.title}
            description={item.description}
            key={item.id}
            image={item.image.url}
            reverse={reverse}
          />
        );
      })}
    </div>
  );
}

Timeline.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string
    }).isRequired
  }).isRequired)
}

export default Timeline;