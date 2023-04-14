/* 
IMPORTANTE!
Esta navbar requier del CustomHooks useNavbar */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import styled from "styled-components";
// import logo from "../../assets/logo.png";
import logo from "../../assets/logo.png";
import { useNavbar } from "../../hooks/useNavbar";
import { UserPanelMobile } from "./UserPanelMobile";
import { UserPanelDesk } from "./UserPanelDesk";

export const Navbar = () => {
  const {
    isLogin,
    mediaQuery,
    logout,
    activeMenu,
    setshowSearch,
    isScroled,
    links,
    isQueryDesktop,
    isQueryMobile,
    isMenuActive,
    showSearch
  } = useNavbar();
  
  useEffect(() => {
    isLogin();
    mediaQuery();
  }, []);

  return (
    <Container>
      <nav
        className={`flex j-between a-center ${isScroled ? " " : "scrolled"}`}
      >
        <div className="left flex j-center a-center">
          {isQueryMobile && (
            <div className="hamburgMenu flex a-center j-center">
              <GiHamburgerMenu onClick={activeMenu} />
            </div>
          )}
          <div className="flex  a-center j-center">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className={`navbar ${isMenuActive ? "active" : ""}`}>
          {isQueryMobile && <UserPanelMobile />}
          <ul className="links flex column ">
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link className="active" to={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="right flex a-center g-1">

          <div className={`search ${showSearch ? "" : "show-search"}`}>
            {isQueryDesktop && (
              <button onClick={() => setshowSearch(true)}>
                <FaSearch />
              </button>
            )}
            <input
              type="text"
              placeholder="Search"
              onBlur={() => {
                setshowSearch(false);
              }}
              />
          </div>
              {isQueryDesktop && <UserPanelDesk />}
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  .scrolled {
    background-color: transparent;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5.5rem;
    z-index: 2;
    padding: 2em 1rem;
    transition: 0.3s ease-in-out;
    border-left: 1px solid #f1f1f1f1;
    background-color:#090909 ;

    .left {
      gap: 0.9rem;
      img {
        height: 3rem;
      }
      .hamburgMenu {
        height: 100%;
        font-size: 3rem;
      }
    }

    .navbar {
      position: absolute;
      display: block;
      top: 5.5rem;
      left: -60%;
      padding: 1rem;
      background-color: black;
      list-style: none;
      width: 60%;
      height: 100vh;
      border-left: 1px solid #f1f1f1f1;
      transition: all 0.2s ease-in-out;
      color: rgb(255, 255, 255, 0.6);

      .links {
        gap: 1rem;
        font-size: 1.5rem;
        li {
          padding: 1rem;
          a {
            color: rgb(255, 255, 255, 0.6);
            text-decoration: none;
            &:hover {
              color: white;
            }
          }
        }
        .active {
          /* border-left: 3px solid #f34242; */
        }
      }
    }

    @media screen and (min-width: 769px) {
      .navbar {
        height: 5.4rem;
        position: absolute;
        top:0 ;
        left:13rem ;
        border: none;
        background-color:transparent ;
        ul {
          flex-direction: row;
          align-items: center;
        }
      }
    }

    .active {
      left: 0;
    }

    .right {
      height: 5.25rem;
      
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          &:focus {
            outline: none;
          }
          svg {
            color: #fff;
            font-size: 1.5rem;
          }
        }
        
        input {
          width: 70%;
          padding:1rem ;
          font-size:1.5rem ;
          opacity: 1;
          visibility: visible;
          background-color:#303134 ;
          border:none ;
          color: white;
          @media screen and (min-width:768px){
            background-color:#090909 ;
          }
          &:focus {
            outline: none;
          }
        }
      }

      .show-search {
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          padding: 0.3rem;
        }
      }
    }
  }
  `;
