/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Pluss } from "../Pluss";
import "./style.css";

interface Props {
  type: "primary" | "secondary";
  size: "large" | "small";
  state: "hover" | "innaktiv" | "default";
  className: any;
  override: JSX.Element;
  text: string;
}

export const Frame = ({
  type,
  size,
  state,
  className,
  override = (
    <Pluss
      className="pluss-instance"
      pluss="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/pluss-18.svg"
    />
  ),
  text = "Button",
}: Props): JSX.Element => {
  return (
    <div className={`frame ${state} ${type} ${size} ${className}`}>
      {["default", "innaktiv"].includes(state) && (
        <>
          {override}
          <div className="button">{text}</div>
        </>
      )}

      {state === "hover" && (
        <div className="div-2">
          {type === "primary" && (
            <>
              <Pluss
                className="pluss-instance"
                pluss="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/pluss-18.svg"
              />
              <div className="button-i">{text}</div>
            </>
          )}

          {type === "secondary" && (
            <div className="tekst-ikon-wrapper">
              <div className="tekst-ikon">
                <Pluss
                  className="pluss-instance"
                  pluss="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/pluss-17.svg"
                />
                <div className="button-2">{text}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Frame.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["large", "small"]),
  state: PropTypes.oneOf(["hover", "innaktiv", "default"]),
  text: PropTypes.string,
};
