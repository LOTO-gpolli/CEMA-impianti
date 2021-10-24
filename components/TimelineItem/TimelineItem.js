import styles from '../TimelineItem/TimelineItem.module.css';

const TimelineItem = ({ data }) => {
  return (
    <div className={`${styles['timeline__item']}`}>
      <div className={`${styles['timeline__item-content']}`}>
        <span
          className={`${styles['timeline__item-tag']}`}
          style={{ background: data.category.color }}
        >
          {data.category.tag}
        </span>
        {/* <time className={`${styles['timeline__item-time']}`}>{data.date}</time> */}
        <p>{data.text}</p>
        {data.link && <span onClick={() => alert('Open Details')}>Vedi dettagli</span>}
        <span className={`${styles['timeline__item-circle']}`}></span>
      </div>
    </div>
  );
};

export default TimelineItem;
