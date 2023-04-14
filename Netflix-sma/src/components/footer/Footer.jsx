import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <div className="networks flex a-center g-1">
        <ImFacebook title="Facebook" />
        <BsInstagram title="Instagram" />
        <BsTwitter title="Twitter" />
        <BsYoutube title="Youtube" />
      </div>
      <div className="links ">
        <p className="desktop">Audio descriptivo</p>
        <p>Centro de ayuda</p>
        <p className="desktop">Tarjeta de regalo</p>
        <p className="desktop">Prensa</p>

        <p className="desktop">Relaciones con inversionistas</p>
        <p className="desktop">Empeo</p>
        <p>Terminos de uso</p>
        <p className="desktop">Privacidad</p>

        <p className="desktop">Aviso legales</p>
        <p>Peferencias de cookies</p>
        <p className="desktop">Informacion corporativa</p>
        <p className="desktop">Contactanos</p>
      </div>
      <div className="copy-right">
        <span>1989-2023 Netflix-ma, Inc.</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  padding: 5rem;
  cursor: pointer;
  gap: 2rem;
  .networks {
    width: 90%;
    gap: 2rem;
    font-size: 2rem;
    svg {
      background-color: transparent;
    }
  }

  .links {
    display: grid;
    gap: 2rem;
    width: 90%;
    grid-template-columns: repeat(4, 1fr);
    color: rgba(255, 255, 255, 0.5);
    p {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;

    .networks {
      width: 100%;
      text-align:center ;
    }
    .links {
      grid-template-columns: repeat(3, 1fr);
      .desktop {
        display: none;
      }
    }
    .copy-right {
      width: 100%;
    }
  }

  .copy-right {
    color: rgba(255, 255, 255, 0.5);
    width: 90%;
  }
`;
