import PropTypes from 'prop-types';
/* Components */
import Image from 'next/image';
/* Styles */
import styles from './TeamMemberCard.module.css';

const TeamMemberCard = ({ image, name, role, parentClass = '' }) => {
  console.log('image: ', image, typeof image);

  return (
    <div className={`${parentClass} ${styles['team-member-card']}`}>
      <div className={`${styles['team-member-card__background']}`} />
      <div className={`${styles['team-member-card__img-thumbnail']}`}>
        <Image
          alt="Team member picture"
          layout="fill"
          objectFit="cover"
          placeholder="/images/placeholder_man.jpg"
          src={image}
        />
      </div>
      <div className={`${styles['team-member-card__body']}`}>
        <h5 className={`${styles['team-member-card__name']}`}>{name}</h5>
        <p className={`${styles['team-member-card__role']}`}>{role}</p>
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  parentClass: PropTypes.string,
  role: PropTypes.string.isRequired,
};

export default TeamMemberCard;
