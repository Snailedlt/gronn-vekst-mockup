import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    state: {
      options: ["ingen-adresse", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "ingen-adresse",
    className: {},
    imageClassName: {},
    text: "Næringsrik jord til hager og grøntareal.Vår anbefaling til plen og ferdigplen!",
    image: "https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-9@2x.png",
  },
};
