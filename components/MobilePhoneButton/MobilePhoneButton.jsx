import Button from '/components/Button/Button'
import {
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import styles from '/components/MobilePhoneButton/MobilePhoneButton.module.css'

const MobilePhoneButton = () => {
  return (
    <Button
      text=""
      link="true"
      settings={{
        href: 'tel:3391122333',
        icon: {
          name: faPhone,
        },
        customClass: `${styles['mobile-phone-button']}`,
        customClassText:`${styles['mobile-phone-button__text']}`,
      }}
    />
  )
}

export default MobilePhoneButton
