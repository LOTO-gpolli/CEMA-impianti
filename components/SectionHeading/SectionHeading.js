import styles from './SectionHeading.module.css';

const SectionHeading = ({ title, subtitle = '' }) => {
  return (
    <div className={`${styles['section-heading']}`}>
      <h3 className={`${styles['section-heading__title']}`}>{title}</h3>
      {subtitle && <h4 className={`${styles['section-heading__subtitle']}`}>{subtitle}</h4>}
    </div>
  );
};

export default SectionHeading;
