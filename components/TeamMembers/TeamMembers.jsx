import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
/* Components */
import SectionHeading from '/components/SectionHeading/SectionHeading'
import TeamMemberCard from '/components/TeamMemberCard/TeamMemberCard.jsx'
/* Hooks */
import useMediaQuery from '/hooks/useMediaQuery'
/* Styles */
import styles from './TeamMembers.module.css'

const TeamMembers = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  })
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 576px)')

  const teamMembers = [
    {
      image: '/images/placeholder_man.jpg',
      name: 'Tizio',
      role: 'Elettricista',
    },
    {
      image: '/images/placeholder_man.jpg',
      name: 'Caio',
      role: 'Elettricista',
    },
    {
      image: '/images/placeholder_man.jpg',
      name: 'Sempronio',
      role: 'Elettricista',
    },
    {
      image: '/images/placeholder_man.jpg',
      name: 'Tiberio',
      role: 'Elettricista',
    },
  ];

  const cardShown = isDesktop ? 3 : 1;
  const progressStartingPercentage = teamMembers?.length ? cardShown / teamMembers.length : 1;

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
        title='Il nostro team'
        isSubsectionTitle
      />
      <div className={`${styles['team-members__cards-carousel']}`} ref={viewportRef}>
        <div className={`${styles['team-members__cards-container']}`}>
          { teamMembers.map(member => (
            <TeamMemberCard
              image={member.image}
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

export default TeamMembers;
