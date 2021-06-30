import ButtonCall from "./ButtonCall";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ButtonCall",
  component: ButtonCall
};

const Template = args => <ButtonCall {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: "0211122333"
};
