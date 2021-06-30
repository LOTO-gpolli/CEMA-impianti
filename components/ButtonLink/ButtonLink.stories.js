import ButtonLink from "./ButtonLink";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ButtonLink",
  component: ButtonLink
};

const Template = args => <ButtonLink {...args} />;

export const Main = Template.bind({});
Main.args = {
  variant: "main",
  type: "button",
  children: "Scopri di più",
  href: "/",
  icon: faArrowDown
};
