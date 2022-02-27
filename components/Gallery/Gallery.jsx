import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import { v4 as uuid } from 'uuid';

import SectionHeading from '../SectionHeading/SectionHeading';
import Timeline from '../Timeline/Timeline';
/* Hooks */
import useMediaQuery from '/hooks/useMediaQuery'
/* Styles */
import styles from './Gallery.module.css'

const Gallery = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  })

  const [scrollProgress, setScrollProgress] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 576px)');

  const galleryList = [
    {
      image: '/images/Hero-image-sm.jpg',
      alt: 'Placeholder',
    },
    {
      image: '/images/Hero-image-sm.jpg',
      alt: 'Placeholder',
    },
    {
      image: '/images/Hero-image-sm.jpg',
      alt: 'Placeholder',
    },
    {
      image: '/images/Hero-image-sm.jpg',
      alt: 'Placeholder',
    },
  ];

  const imagesShown = isDesktop ? 2 : 1;
  const progressStartingPercentage = galleryList?.length ? imagesShown / galleryList.length : 1;

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
    <section id="projects">
      <SectionHeading
        title="I nostri progetti"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tempor lorem sed congue."
      />
      <Timeline />
      <SectionHeading
        title='Galleria'
        isSubsectionTitle
      />
      <div className={`${styles['gallery__item-carousel']}`} ref={viewportRef}>
        <div className={`${styles['gallery__item-container']}`}>
          { galleryList.map(item => (
            <div className={`${styles['gallery__image-container']}`} key={uuid()}>
              <Image
                alt={item.alt}
                className={`${styles['gallery__image']}`}
                layout="fill"
                src={item.image}
                objectFit="cover"
              />
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
    </section>
  );
}

export default Gallery