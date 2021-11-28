import styles from '../Timeline/Timeline.module.css';
import timelineData from '../../data/data';
import TimelineItem from '../TimelineItem/TimelineItem';
import SectionHeading from '../SectionHeading/SectionHeading';

const Timeline = () => {
  return (
    timelineData?.length > 0 && (
      <>
        <section className={`${styles['timeline-section__container']}`}>
          {/* <h2 className={`${styles['timeline__title']}`}>IL NOSTRO METODO</h2> */}
          <SectionHeading title="Il nostro metodo" />
          <div className={`${styles['timeline__container']}`}>
            {timelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </div>
        </section>
      </>
    )
  );
};

export default Timeline;
