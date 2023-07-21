/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  lastebil: string;
}

export const Lastebil = ({
  className,
  lastebil = "https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/lastebil-3.svg",
}: Props): JSX.Element => {
  return <img className={`lastebil ${className}`} alt="Lastebil" src={lastebil} />;
};

Lastebil.propTypes = {
  lastebil: PropTypes.string,
};
