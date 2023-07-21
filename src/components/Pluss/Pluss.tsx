/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  pluss: string;
}

export const Pluss = ({
  className,
  pluss = "https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/pluss-11.svg",
}: Props): JSX.Element => {
  return <img className={`pluss ${className}`} alt="Pluss" src={pluss} />;
};

Pluss.propTypes = {
  pluss: PropTypes.string,
};
