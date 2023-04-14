import React, { useState } from "react";
import { Header } from "../components/header/Header";
import styled from "styled-components";
import BackWallpaper from "../assets/BackWallpaper.jpg";
import logo from "../assets/logo.png";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const typeButton = {
  height: "4.5rem",
  width: "17rem",
  borderRadius: "",
  fontSize: "2.2rem",
  fontWeight: "bolder",
  color: "",
  backgroundColor: "",
};

const typeInput = {
  height: "4.5rem",
  width: "33rem",
  padding: "",
  borderRadius: "",
  fontSize: "2rem",
  fontWeight: "200",
  color: "white",
  backgroundColor: "rgba(9,9,9,0.8)",
};
export const Home = () => {
  const [isEmailValid, setisEmailValid] = useState(false);
  const [isPasswordValid, setisPasswordValid] = useState(false);

  const handleValidationEmail = (isValid) => {
    setisEmailValid(isValid);
  };
  const handleValidationPassword = (isValid) => {
    setisPasswordValid(isValid);
  };

  return (
    <StyledContainer>
      <img className="background" src={BackWallpaper} alt="" />
      <Header>
        <div className=" navbar flex a-center j-between">
          <img className="brand" src={logo} alt="" />
          <Button classname path={"login"}>
            Iniciar Session
          </Button>
        </div>
      </Header>
      <div className="main flex column j-center a-center">
        <h1 className="title">Películas y series ilimitadas y mucho más</h1>
        <p className="subtitle">
          Disfruta donde quieras. Cancela cuando quieras.
        </p>
        <p className="subtitle">
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </p>
        <div className=" register flex a-center j-center">
          <div className="groupInput flex a-center j-center">
            {!isEmailValid && (
              <Input
                typeInput={typeInput}
                type={"email"}
                placeholder={"Email"}
                handleValidation={handleValidationEmail}
              />
            )}
            {isEmailValid && (
              <Input
                typeInput={typeInput}
                placeholder={"Password"}
                type={"password"}
                handleValidation={handleValidationPassword}
              />
            )}
          </div>
            <Button
              classname={typeButton}
              disable={!isPasswordValid}
              path={"login"}
            >
              Comenzar &#62;
            </Button>
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -99;
  }

  .brand {
    position: relative;
    height: 5rem;
  }

  .navbar {
    padding: 1em 1rem;
    width: 100vw;
    height: 7rem;
  }

  .main {
    width: 100vw;
    height: calc(100vh - 7rem);
    line-height: 6rem;
    .title {
      font-size: 5rem;
    }
    .subtitle {
      font-size: 2rem;
    }

    .register {
      height: 12vh;
      gap: 1rem;
      background-color: blue;

      .groupInput {
        height: 12vh;
        gap: 0.8rem;
        background-color: green;
      }
    }
  }
`;
