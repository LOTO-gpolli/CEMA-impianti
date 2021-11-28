import styles from './SectionHeading.module.css'

const SectionHeading = ({ title, subtitle = "", isSubsectionTitle = false }) => {
  return (
    <div className={`${styles['section-heading']}`}>
      {!isSubsectionTitle && <h3 className={`${styles['section-heading__title']}`}>{title}</h3>}
      {isSubsectionTitle && <h4 className={`${styles['section-heading__title']} ${styles['section-heading__title--subsection']}`}>{title}</h4>}
      {subtitle && <p className={`${styles['section-heading__subtitle']}`}>{subtitle}</p>}
    </div>
  );
}

export default SectionHeading
