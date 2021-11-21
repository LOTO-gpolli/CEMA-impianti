import styles from './SectionHeading.module.css'

const SectionHeading = ({ title, subtitle = "" }) => {
  return (
    <div className={`${styles['section-heading']}`}>
      <h3 className={`${styles['section-heading__title']}`}>{title}</h3>
      {subtitle && <p className={`${styles['section-heading__subtitle']}`}>{subtitle}</p>}
    </div>
  );
}

export default SectionHeading
