import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import SectionHeading from '../SectionHeading/SectionHeading';
import Timeline from '../Timeline/Timeline';
/* Hooks */
import useMediaQuery from '/hooks/useMediaQuery';
/* Styles */
import styles from './Gallery.module.css';

const Gallery = ({ title, subtitle, gallery, timeline }) => {
  const { title: galleryTitle, images: galleryImages } = gallery;
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const [scrollProgress, setScrollProgress] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 576px)');

  const imagesShown = isDesktop ? 2 : 1;
  const progressStartingPercentage = galleryImages?.length ? imagesShown / galleryImages.length : 1;

  const onScroll = useCallback(() => {
    if (!embla) return;

    const progress = Math.max(progressStartingPercentage, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;

    onScroll();
    embla.on('scroll', onScroll);
  }, [embla, onScroll]);

  return (
    <section id="projects">
      <SectionHeading title={title} subtitle={subtitle} />
      <Timeline content={timeline} />
      {gallery && <SectionHeading title={galleryTitle} isSubsectionTitle />}
      {gallery && (
        <div className={`${styles['gallery__item-carousel']}`} ref={viewportRef}>
          <div className={`${styles['gallery__item-container']}`}>
            {galleryImages.map((image) => (
              <div className={`${styles['gallery__image-container']}`} key={image.id}>
                <img className={`${styles['gallery__image']}`} src={image.url} alt="" />
              </div>
            ))}
          </div>
          <div className={`${styles['gallery__progress']}`}>
            <div
              className={`${styles['gallery__progress-bar']}`}
              style={{ transform: `translateX(${scrollProgress}%)` }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  gallery: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
      })
    ).isRequired,
  }),
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string,
      }).isRequired,
    }).isRequired
  ),
};

export default Gallery;
