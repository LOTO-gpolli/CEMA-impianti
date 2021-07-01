import ButtonLink from "./ButtonLink";
import { faArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "ButtonLink",
  component: ButtonLink
};

const Template = args => <ButtonLink {...args} />;

export const Main = Template.bind({});
Main.args = {
  variant: "main",
  children: "Scopri",
  href: "/",
  icon: faArrowDown
};

export const Call = Template.bind({});
Call.args = {
  variant: "call",
  customClassText: "mobile-text",
  children: "021122333",
  href: "tel:021122333",
  icon: faPhone
};
