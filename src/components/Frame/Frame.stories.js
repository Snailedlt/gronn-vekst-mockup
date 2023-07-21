import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
    state: {
      options: ["hover", "innaktiv", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    size: "large",
    state: "hover",
    className: {},
    text: "Button",
  },
};
