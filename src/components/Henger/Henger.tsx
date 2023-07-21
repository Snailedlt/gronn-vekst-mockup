/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  henger: string;
}

export const Henger = ({
  className,
  henger = "https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/henger-1.svg",
}: Props): JSX.Element => {
  return <img className={`henger ${className}`} alt="Henger" src={henger} />;
};

Henger.propTypes = {
  henger: PropTypes.string,
};
