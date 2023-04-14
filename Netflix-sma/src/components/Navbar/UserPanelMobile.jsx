import React from "react";
import styled from "styled-components";
import iconProfile from "../../assets/profileIcon.jpg";

export const UserPanelMobile = () => {
  return (
    <Container className="flex column">
      <div className="row flex  a-center">
        <img src={iconProfile} alt="" />
        <div>
          <p>Ismael</p>
          <h6>cambiar perfil</h6>
        </div>
      </div>

      <div className="row">
        <p>Cuenta</p>
        <p>Centro de ayuda</p>
        <p>Cerrar sesion en Netflix</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  margin-bottom: 1rem;
  border-bottom: 1px solid #f1f1f1f1;
  .row {
    p {
      font-size: 1.5rem;
      &:hover {
        color: white;
      }
    }
    h6 {
      font-size: 2rem;
    }
    img {
      margin-right: 1rem;
      height: 6rem;
    }
  }
`;
