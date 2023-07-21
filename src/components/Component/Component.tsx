/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Frame } from "../Frame";
import { Pluss } from "../Pluss";
import { Remove } from "../Remove";
import { ShoppingCart } from "../ShoppingCart";
import "./style.css";

interface Props {
  state: "ingen-adresse" | "default";
  className: any;
  frame: JSX.Element;
  imageClassName: any;
  text: string;
  image: string;
}

export const Component = ({
  state,
  className,
  frame = (
    <ShoppingCart
      className="shopping-cart-fill"
      shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
    />
  ),
  imageClassName,
  text = "Næringsrik jord til hager og grøntareal.Vår anbefaling til plen og ferdigplen!",
  image = "https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-9@2x.png",
}: Props): JSX.Element => {
  return (
    <div className={`component ${className}`}>
      <Frame
        className={`${state === "default" ? "class" : "class-2"}`}
        override={frame}
        size="large"
        state="default"
        text="Kjøp"
        type="primary"
      />
      {state === "ingen-adresse" && (
        <>
          <img className="img" alt="Image" src={image} />
          <div className="torvfri-jord-wrapper">
            <div className="torvfri-jord">Torvfri jord</div>
          </div>
          <div className="park-mix">Park-Mix®</div>
          <div className="bigbag-liter">BIGBAG (300 LITER)</div>
          <p className={`n-ringsrik-jord-til ${imageClassName}`}>{text}</p>
        </>
      )}

      <div className={`mengde-velger state-0-${state}`}>
        <div className="overlap-group-2">
          <div className="rectangle" />
          <Pluss
            className="instance-node"
            pluss="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/pluss-11.svg"
          />
          <Remove />
          <div className="element">1</div>
        </div>
      </div>
      {state === "ingen-adresse" && <div className="element-stk">500,– /stk.</div>}

      {state === "default" && (
        <>
          <p className="p">{text}</p>
          <div className="torvfri-jord-wrapper">
            <div className="torvfri-jord">Torvfri jord</div>
          </div>
          <div className="element-stk-2">500,– /stk.</div>
          <img
            className={`img ${imageClassName}`}
            alt="Image"
            src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-9@2x.png"
          />
          <div className="park-mix-2">Park-Mix®</div>
          <div className="bigbag-liter-2">BIGBAG (300 LITER)</div>
        </>
      )}
    </div>
  );
};

Component.propTypes = {
  state: PropTypes.oneOf(["ingen-adresse", "default"]),
  text: PropTypes.string,
  image: PropTypes.string,
};
