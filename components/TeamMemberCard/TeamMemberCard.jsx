import PropTypes from 'prop-types';
/* Styles */
import styles from './TeamMemberCard.module.css'

const TeamMemberCard = ({ image, name, role, parentClass = '' }) => {
  // TODO optimize the image retrieve on the carousel scroll

  return (
    <div className={`${ parentClass } ${styles['team-member-card']}`}>
      <div className={`${styles['team-member-card__background']}`} />
      <div className={`${styles['team-member-card__img-thumbnail']}`}>
        <img className={`${styles['team-member-card__img']}`} src={image} alt="" />
      </div>
      <div className={`${styles['team-member-card__body']}`}>
        <h5 className={`${styles['team-member-card__name']}`}>{name}</h5>
        <p className={`${styles['team-member-card__role']}`}>{role}</p>
      </div>
    </div>
  );
}

TeamMemberCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  parentClass: PropTypes.string,
  role: PropTypes.string.isRequired,
}

export default TeamMemberCard;