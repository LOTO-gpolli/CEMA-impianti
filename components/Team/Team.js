import TeamMember from '../TeamMember/TeamMember';
import styles from '../Team/Team.module.css';

const Team = () => {
  const members = [
    {
      src: '/Images/team-member.jpg',
      title: 'Tizio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Caio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Sempronio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Tiberio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Tiberio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Tizio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Caio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Sempronio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Tiberio',
      text: 'Lorem ipsum dolor sim amet.',
    },
    {
      src: '/Images/team-member.jpg',
      title: 'Tiberio',
      text: 'Lorem ipsum dolor sim amet.',
    },
  ];

  return (
    <section id="team" className={`${styles['team__container']}`}>
      <div className={`${styles['team-members__container']}`}>
        {members && members.map((members, index) => <TeamMember settings={members} key={index} />)}
      </div>
    </section>
  );
};

export default Team;
