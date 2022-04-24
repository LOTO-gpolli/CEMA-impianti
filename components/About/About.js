import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import StoryLine from '../StoryLine/StoryLine';
import TeamMembers from '../TeamMembers/TeamMembers';
// Styles
import styles from '../About/About.module.css';

const About = ({ title, subtitle, storyline, team }) => {
  return (
    <section className={`${styles['about']}`} id="about">
      <SectionHeading title={title} subtitle={subtitle} />
      { storyline && storyline.map((item, index) => {
        let reverse = false;

        if (index % 2 !== 0) {
          reverse = true;
        }

        return (
        <StoryLine
          description={item.description}
          imageSource={item.image.url}
          key={item.id}
          reverse={reverse}
          title={item.title}
        />
      )})}
      { team && <TeamMembers content={team} /> }
    </section>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  storyline: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired),
  team: PropTypes.shape({
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

export default About;
