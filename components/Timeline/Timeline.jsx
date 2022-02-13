import TimelineItem from '../TimelineItem/TimelineItem';
import styles from './Timeline.module.css';

const Timeline = () => {
  const itemList = [{}, {}, {}]

  return (
    <div className={`${styles['timeline']}`}>
      {itemList.map((item, index) => {
        let reverse = false;

        if (index % 2 !== 0) {
          reverse = true;
        }

        return (<TimelineItem position={ reverse ? 'right' : 'left' } />);
      })}
    </div>
  );
}

export default Timeline;