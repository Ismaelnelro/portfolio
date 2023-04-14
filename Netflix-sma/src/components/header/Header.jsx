import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";

export const Header = ({ children }) => {
  return <Container className="flex j-center a-center">{children}</Container>;
};

const Container = styled.div`
  width: 100vw;
  height: auto;
`;
