import NewButton from "./NewButton";
import {
  faArrowDown,
  faArrowUp,
  faMailBulk,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

const none = null;
const ICONS = { faArrowDown, faArrowUp, faMailBulk, faPaperPlane, none };

export default {
  title: "NewButton",
  component: NewButton,
  argTypes: {
    iconName: {
      control: {
        type: "select",
        options: Object.keys(ICONS)
      }
    }
  }
};

const Template = ({ iconName, colorType, ...args }) => {
  const icon = ICONS[iconName];
  return <NewButton icon={icon} {...args} />;
};

export const Submit = Template.bind({});
Submit.args = {
  variant: "submit",
  type: "submit",
  children: "Submit",
  iconName: "faPaperPlane",
  colorType: "blue",
  handleClick: () => alert("ciao")
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  type: "button",
  children: "Primary",
  iconName: "faArrowDown"
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  type: "button",
  children: "Outlined",
  iconName: ""
};
