import Image from 'next/image';
import SectionHeading from '../SectionHeading/SectionHeading';
import StoryLine from '../StoryLine/StoryLine';
import TeamMembers from '../TeamMembers/TeamMembers';
// Styles
import styles from '../About/About.module.css';

const About = () => {
  return (
    <section className={`${styles['about']}`} id="about">
      <SectionHeading title="chi siamo" />
      <StoryLine
        title="Titolo di esempio"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, nisl at dictum tempor, enim mauris posuere tortor, nec vulputate eros arcu et ante. Suspendisse ullamcorper semper metus. Aenean ut metus tristique, imperdiet odio vitae, fermentum dolor. Proin varius lorem id dui porttitor, nec euismod mi convallis. Duis in mollis ipsum, ac volutpat orci."
        imageSource="/images/placeholder_image_black_and_white.jpg"
      />
      <StoryLine
        title="Titolo di esempio"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, nisl at dictum tempor, enim mauris posuere tortor, nec vulputate eros arcu et ante. Suspendisse ullamcorper semper metus. Aenean ut metus tristique, imperdiet odio vitae, fermentum dolor. Proin varius lorem id dui porttitor, nec euismod mi convallis. Duis in mollis ipsum, ac volutpat orci."
        imageSource="/images/placeholder_image_black_and_white.jpg"
        reverse
      />
      <TeamMembers />
    </section>
  );
};

export default About;
