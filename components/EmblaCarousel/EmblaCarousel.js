import TeamMember from '../TeamMember/TeamMember';
import styles from '../EmblaCarousel/EmblaCarousel.module.css';
import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
// import { useRecursiveTimeout } from '../../hooks/useRecursiveTimeout';
import membersData from '../../data/members';

// const AUTOPLAY_INTERVAL = 4000;

const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    // dragFree: true,
    containScroll: 'trimSnaps',
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  // const autoplay = useCallback(() => {
  //   if (!embla) return;
  //   if (embla.canScrollNext()) {
  //     embla.scrollNext();
  //   } else {
  //     embla.scrollTo(0);
  //   }
  // }, [embla]);

  // const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    if (!progress) {
      setScrollProgress(1);
    } else {
      setScrollProgress(progress * 100);
    }
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onScroll();
    embla.on('scroll', onScroll);
  }, [embla, onScroll]);

  // useEffect(() => {
  //   play();
  // }, [play]);

  const members = membersData;

  return (
    <section id="team" className={`${styles['team__container']}`}>
      <div className={`${styles['embla']}`}>
        <div className={`${styles['embla__viewport']}`} ref={viewportRef}>
          <div className={`${styles['embla__container']}`}>
            {members &&
              members.map((members, index) => {
                return (
                  <div className={`${styles['embla__slide']}`}>
                    <TeamMember settings={members} key={index} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={`${styles['embla__progress']}`}>
        <div
          className={`${styles['embla__progress__bar']}`}
          style={{ transform: `translateX(${scrollProgress}%)` }}
        />
      </div>
    </section>
  );
};

export default EmblaCarousel;
