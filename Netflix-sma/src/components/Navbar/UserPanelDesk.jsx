import React, { useState } from "react";
import styled from "styled-components";
import iconProfile from "../../assets/profileIcon.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";

export const UserPanelDesk = () => {
  const [ShowOptions, setShowOptions] = useState(false);

  return (
    <Container>
      <div
        className="image flex a-center"
        onClick={() => setShowOptions(!ShowOptions)}
      >
        <img src={iconProfile} alt="" />
        <MdOutlineArrowDropDown />
      </div>

      <div className={`col flex column ${ShowOptions ? "show" : ""}`}>
        <span className="flex a-center g-1">
          <HiOutlinePencil />
          <p>Administar perfil</p>
        </span>
        <span className="flex a-center g-1">
          <AiOutlineQuestionCircle />
          <p>Centro de ayuda</p>
        </span>
        <span className="flex a-center g-1">
          <AiOutlineUser />
          <p>Cuenta</p>
        </span>
        <hr />
        <h2>Cerrar sesion en Netflix</h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  user-select: none;
  .image {
    font-size: 2rem;
    img {
      height: 4rem;
      border-radius: 0.5rem;
    }
  }

  .col {
    position: absolute;
    display: none;
    top: 6.25rem;
    right: 2rem;
    padding: 2em 3rem;
    background-color: black;

    span {
      font-size: 2rem;
    }

    p {
      line-height: 2.5em;
      font-size: 1.5rem;
      &:hover {
        text-decoration: underline;
      }
    }
    h2 {
      margin-top: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .show {
    display: block;
  }
`;
