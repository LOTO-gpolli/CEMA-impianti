import NewButton from "./NewButton";
import { faArrowDown, faMailBulk, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "NewButton",
  component: NewButton
};

const Template = args => <NewButton {...args} />;

export const Submit = Template.bind({});
Submit.args = {
  variant: "submit",
  type: "submit",
  children: "Submit",
  icon: faPaperPlane
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  type: "button",
  children: "Secondary",
  icon: faArrowDown
};
