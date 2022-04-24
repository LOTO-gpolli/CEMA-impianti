import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { v4 as uuid } from 'uuid';
/* Components */
import SectionHeading from '/components/SectionHeading/SectionHeading'
import TeamMemberCard from '/components/TeamMemberCard/TeamMemberCard'
/* Hooks */
import useMediaQuery from '/hooks/useMediaQuery'
/* Styles */
import styles from './TeamMembers.module.css'

const TeamMembers = ({ content }) => {
  const { title, members } = content
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  })
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 576px)');

  const cardShown = isDesktop ? 3 : 1;
  const progressStartingPercentage = members?.length ? cardShown / members.length : 1;

  const onScroll = useCallback(() => {
    if (!embla) return;

    const progress = Math.max(progressStartingPercentage, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;

    onScroll();
    embla.on("scroll", onScroll);
  }, [embla, onScroll]);
  
  return (
    <div className={`${styles['team-members']}`}>
      <SectionHeading
        title={title}
        isSubsectionTitle
      />
      <div className={`${styles['team-members__cards-carousel']}`} ref={viewportRef}>
        <div className={`${styles['team-members__cards-container']}`}>
          { members.map(member => (
            <TeamMemberCard
              image={member.image.url}
              key={member.id}
              name={member.name}
              parentClass={styles['team-members__card']}
              role={member.role}
            />
          )) }
        </div>
        <div className={`${styles['team-members__progress']}`}>
          <div
            className={`${styles['team-members__progress-bar']}`}
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
      </div>
    </div>
  );
}

TeamMembers.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
      name: PropTypes.string,
      role: PropTypes.string,
    }).isRequired)
  })
}

export default TeamMembers;
