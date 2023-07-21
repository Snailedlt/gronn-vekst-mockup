/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AdresseMap } from "../AdresseMap";
import { Language } from "../Language";
import { Lastebil } from "../Lastebil";
import { ShoppingCart } from "../ShoppingCart";
import "./style.css";

interface Props {
  className: any;
  frameClassName: any;
  sandvikslandetClassName: any;
  text: string;
}

export const Header = ({
  className,
  frameClassName,
  sandvikslandetClassName,
  text = "Sandvikslandet 3, 3520 Jevnaker",
}: Props): JSX.Element => {
  return (
    <div className={`header ${className}`}>
      <div className="div">
        <div className="text-wrapper">Dyrke</div>
        <div className="text-wrapper">Plen</div>
        <div className="text-wrapper">Jord</div>
        <div className="text-wrapper-2">Om oss</div>
        <div className="text-wrapper-2">Utsalgssteder</div>
      </div>
      <img
        className="image"
        alt="Image"
        src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-1-1@2x.png"
      />
      <div className={`frame-2 ${frameClassName}`}>
        <div className="frame-3">
          <AdresseMap
            adresseMap="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/adresse---map-2.svg"
            className="design-component-instance-node"
          />
          <div className={`sandvikslandet ${sandvikslandetClassName}`}>{text}</div>
        </div>
        <div className="frame-3">
          <Language
            className="design-component-instance-node"
            language="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/language-2.svg"
          />
          <div className="text-wrapper-3">Språk</div>
        </div>
        <div className="frame-4">
          <Lastebil
            className="design-component-instance-node"
            lastebil="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/lastebil-2.svg"
          />
          <div className="text-wrapper-3">Sporing av mine ordre</div>
        </div>
        <div className="group">
          <div className="frame-5">
            <ShoppingCart
              className="design-component-instance-node"
              shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-10.svg"
            />
            <div className="handlekurv">Handlekurv&nbsp;&nbsp;0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};
