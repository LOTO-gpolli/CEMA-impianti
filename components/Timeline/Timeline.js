import styles from '../Timeline/Timeline.module.css';
import timelineData from '../../data/data';
import TimelineItem from '../TimelineItem/TimelineItem';

const Timeline = () => {
  return (
    timelineData.length > 0 && (
      <>
        <h2 className={`${styles['timeline__title']}`}>TIMELINE SECTION</h2>
        <div className={`${styles['timeline__container']}`}>
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      </>
    )
  );
};

export default Timeline;
