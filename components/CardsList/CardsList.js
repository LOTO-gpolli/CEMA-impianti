import PropTypes from "prop-types";
import Card from '../Card/Card';
import styles from '../CardsList/CardsList.module.css';

const CardsList = ({ content }) => {
  return (
    <section className={`${styles['cards__container']}`}>
      {content && content.map((card, index) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon.url}
          key={index}
        />))}
    </section>
  );
};

CardsList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.shape({ url: PropTypes.string }).isRequired,
  }))
}

export default CardsList;
