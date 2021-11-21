import styles from '../Timeline/Timeline.module.css';
import timelineData from '../../data/data';
import TimelineItem from '../TimelineItem/TimelineItem';

const Timeline = () => {
  return (
    timelineData?.length > 0 && (
      <>
        <div className={`${styles['timeline-section__container']}`}>
          <h2 className={`${styles['timeline__title']}`}>IL NOSTRO METODO</h2>
          <div className={`${styles['timeline__container']}`}>
            {timelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Timeline;
