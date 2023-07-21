import React from "react";
import { Check } from "../../components/Check";
import { Compass } from "../../components/Compass";
import { Component } from "../../components/Component";
import { Frame } from "../../components/Frame";
import { Header } from "../../components/Header";
import { Helikopter } from "../../components/Helikopter";
import { Henger } from "../../components/Henger";
import { Inputtfelt } from "../../components/Inputtfelt";
import { Lastebil } from "../../components/Lastebil";
import { ShoppingCart } from "../../components/ShoppingCart";
import "./style.css";

export const Hjem = (): JSX.Element => {
  return (
    <div className="hjem">
      <div className="div-3">
        <div className="overlap">
          <div className="group-wrapper">
            <div className="group-2">
              <div className="group-3">
                <Inputtfelt className="inputtfelt-instance" text="Mitt postnummer" />
                <div className="text-wrapper-4">Bruk min posisjon</div>
              </div>
              <p className="legge-inn-ditt">
                Legge inn ditt postnummer, og vi beregner frakt og pris <br />
                fra din nærmeste leverandør
              </p>
            </div>
          </div>
        </div>
        <Header
          className="header-instance"
          frameClassName="header-2"
          sandvikslandetClassName="design-component-instance-node-2"
          text="Legg inn postnummer"
        />
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="group-4">
              <div className="group-5">
                <div className="text-wrapper-5">Artikler</div>
                <div className="tips-r-d-til">Dyrk grønnsaker</div>
                <div className="slik-f-r-du-dr">Få en flott plen</div>
                <p className="ulike-typer-jord">Jord - slik velger du riktig type</p>
              </div>
              <div className="overlap-3">
                <img
                  className="image-2"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-2-1@2x.png"
                />
                <img
                  className="image-3"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-3-1@2x.png"
                />
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3" />
                </div>
                <div className="div-wrapper">
                  <div className="overlap-4" />
                </div>
              </div>
              <img
                className="image-4"
                alt="Image"
                src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-4-3@2x.png"
              />
            </div>
            <div className="text-wrapper-6">Om Grønn vekst</div>
            <p className="text-wrapper-7">Reddalsveien 211N, 4886 Grimstad, Norge</p>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/line-2-1.svg"
            />
            <img
              className="line-2"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/line-2-1.svg"
            />
            <div className="text-wrapper-8">+47 915 05 673</div>
            <div className="text-wrapper-9">post@gronnvekst.no</div>
            <div className="text-wrapper-10">faktura@gronnvekst.no</div>
            <p className="text-wrapper-11">Orgnr: 981 711 033 MVA</p>
            <div className="text-wrapper-12">Om grønn vekst</div>
            <div className="text-wrapper-13">Vår sortiment</div>
            <div className="text-wrapper-14">Bærekraft</div>
            <div className="text-wrapper-15">Garantier</div>
            <div className="text-wrapper-16">Kjøpsvilkår</div>
          </div>
        </div>
        <div className="frame-6">
          <div className="group-6">
            <h1 className="h-1">Jord til hage og plen</h1>
            <div className="frame-7">
              <div className="text-wrapper-17">BigBag</div>
              <div className="text-wrapper-18">Sekk</div>
              <div className="text-wrapper-18">Lastebillass</div>
            </div>
            <div className="frame-8">
              <Component
                className="component-25"
                frame={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
                  />
                }
                imageClassName="design-component-instance-node-2"
                state="ingen-adresse"
                text={
                  <>
                    Næringsrik jord til hager og grøntareal.
                    <br />
                    Vår anbefaling til plen og ferdigplen!
                  </>
                }
              />
              <Component
                className="component-instance"
                frame={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
                  />
                }
                state="ingen-adresse"
                text={
                  <>
                    Næringsrik jord til hager og grøntareal.
                    <br />
                    Vår anbefaling til plen og ferdigplen!
                  </>
                }
              />
              <Component
                className="component-instance"
                frame={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
                  />
                }
                image="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-5@2x.png"
                imageClassName="design-component-instance-node-2"
                state="ingen-adresse"
                text={
                  <>
                    Næringsrik jord til hager og grøntareal.
                    <br />
                    Vår anbefaling til plen og ferdigplen!
                  </>
                }
              />
              <Component
                className="component-25"
                frame={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
                  />
                }
                image="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-5@2x.png"
                imageClassName="design-component-instance-node-2"
                state="ingen-adresse"
                text={
                  <>
                    Næringsrik jord til hager og grøntareal.
                    <br />
                    Vår anbefaling til plen og ferdigplen!
                  </>
                }
              />
              <Component
                className="component-instance"
                frame={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
                  />
                }
                image="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-3@2x.png"
                imageClassName="design-component-instance-node-2"
                state="ingen-adresse"
                text={
                  <>
                    Næringsrik jord til hager og grøntareal.
                    <br />
                    Vår anbefaling til plen og ferdigplen!
                  </>
                }
              />
              <Component
                className="component-instance"
                frame={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
                  />
                }
                image="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-3@2x.png"
                imageClassName="design-component-instance-node-2"
                state="ingen-adresse"
                text={
                  <>
                    Næringsrik jord til hager og grøntareal.
                    <br />
                    Vår anbefaling til plen og ferdigplen!
                  </>
                }
              />
              <Component
                className="component-25"
                frame={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
                  />
                }
                image="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-3@2x.png"
                imageClassName="design-component-instance-node-2"
                state="ingen-adresse"
                text={
                  <>
                    Næringsrik jord til hager og grøntareal.
                    <br />
                    Vår anbefaling til plen og ferdigplen!
                  </>
                }
              />
              <Component
                className="component-instance"
                frame={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24-12.svg"
                  />
                }
                image="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/image-6-3@2x.png"
                imageClassName="design-component-instance-node-2"
                state="ingen-adresse"
                text={
                  <>
                    Næringsrik jord til hager og grøntareal.
                    <br />
                    Vår anbefaling til plen og ferdigplen!
                  </>
                }
              />
            </div>
          </div>
          <div className="frame-9">
            <div className="group-7">
              <div className="overlap-group-4">
                <div className="tekst-wrapper">
                  <div className="tekst">
                    <div className="frame-10">
                      <Check
                        check="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/check-3.svg"
                        className="design-component-instance-node-3"
                      />
                      <div className="text-wrapper-19">Klikk/hent</div>
                    </div>
                    <div className="frame-10">
                      <Check
                        check="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/check-2.svg"
                        className="design-component-instance-node-3"
                      />
                      <div className="text-wrapper-19">Hjemlevering</div>
                    </div>
                    <div className="frame-10">
                      <Check
                        check="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/check-2.svg"
                        className="design-component-instance-node-3"
                      />
                      <div className="text-wrapper-19">Kran - Heise</div>
                    </div>
                    <div className="frame-10">
                      <Check
                        check="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/check-2.svg"
                        className="design-component-instance-node-3"
                      />
                      <div className="text-wrapper-19">Avfallshåndtering</div>
                    </div>
                  </div>
                </div>
                <p className="text-wrapper-20">Spør oss (chat) om du lurer på noe med levering</p>
                <p className="text-wrapper-21">Vi tilpasser leveransen etter dine behov!</p>
                <div className="group-8">
                  <div className="helikopter-2">
                    <p className="text-wrapper-22">Vi kan heise jorden dit du ønsker</p>
                    <Helikopter
                      className="helikopter-instance"
                      helikopter="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/helikopter.svg"
                    />
                  </div>
                  <div className="hent-med-henger">
                    <p className="text-wrapper-23">Du kan hente med henger selv</p>
                    <Henger
                      className="design-component-instance-node-4"
                      henger="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/henger.svg"
                    />
                  </div>
                  <div className="lastebil-2">
                    <p className="text-wrapper-23">Vi kan kjøre varene hjem til deg</p>
                    <Lastebil
                      className="design-component-instance-node-4"
                      lastebil="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/lastebil.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-9">
            <div className="group-10">
              <div className="overlap-group-5">
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/rectangle-17-3@2x.png"
                />
                <p className="text-wrapper-24">Tre fine fakta om jord</p>
                <div className="text-wrapper-25">Artikkel</div>
              </div>
            </div>
            <div className="group-11">
              <div className="overlap-group-5">
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/rectangle-17-2@2x.png"
                />
                <p className="text-wrapper-24">Ulik jord til ulike formål</p>
                <div className="text-wrapper-25">Artikkel</div>
              </div>
            </div>
            <div className="group-12">
              <div className="overlap-group-5">
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/rectangle-17-3@2x.png"
                />
                <p className="text-wrapper-24">Tre fine fakta om jord</p>
                <div className="text-wrapper-25">Artikkel</div>
              </div>
            </div>
            <div className="group-13">
              <div className="overlap-group-5">
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/rectangle-17-2@2x.png"
                />
                <p className="text-wrapper-24">Ulik jord til ulike formål</p>
                <div className="text-wrapper-25">Artikkel</div>
              </div>
            </div>
            <p className="text-wrapper-26">Alt du trenger å vite om Jord og Grønn Vekst</p>
          </div>
        </div>
        <div className="frame-11">
          <div className="group-14">
            <div className="overlap-group-6">
              <div className="text-wrapper-27">Hjelp meg med bestillingen</div>
              <Frame
                className="frame-instance"
                override={
                  <Compass
                    className="design-component-instance-node-3"
                    compass="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/compass.svg"
                  />
                }
                size="large"
                state="default"
                text="Bestillingshjelperen"
                type="primary"
              />
            </div>
          </div>
          <div className="group-15">
            <div className="overlap-group-6">
              <p className="text-wrapper-28">Jeg vet hva jeg skal ha</p>
              <Frame
                className="frame-3-instance"
                override={
                  <ShoppingCart
                    className="design-component-instance-node-3"
                    shoppingCart="https://generation-sessions.s3.amazonaws.com/7620d9da65e2743191a723ddfa4e20ee/img/shopping-cart-fill0-wght400-grad0-opsz24.svg"
                  />
                }
                size="large"
                state="default"
                text="Kjøp jord"
                type="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
