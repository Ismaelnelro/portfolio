import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const [isScroled, setisScrolled] = useState(false);
  const [isQueryMobile, setisQueryMobile] = useState(false);
  const [isQueryDesktop, setisQueryDesktop] = useState(false);
  const [isMenuActive, setisMenuActive] = useState(false);
  const [showSearch, setshowSearch] = useState(true);

  const navigate = useNavigate();

  const isLogin = () => {
    navigate("/login");
  };

  const logout = () => {
    console.log("Te saliste");
  };

  const activeMenu = () => {
    setisMenuActive(!isMenuActive);
  };

  window.onscroll = () => {
    const value = window.pageYOffset !== 0 ? true : false;
    setisScrolled(value);
    return () => (window.onscroll = null);
  };

  const mediaQuery = () => {
    console.log(screen.width);
    if (screen.width > 768) {
      setisQueryDesktop(true);
      setshowSearch(false)
    } else {
      setisQueryMobile(true);
    }
  };

  const links = [
    { name: "Inicio", link: "/browse" },
    { name: "Tv Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "latest", link: "/latest" },
    { name: "My list", link: "/my-list" },
  ];


  return {
    //metodos
    isLogin,
    logout,
    mediaQuery,
    activeMenu,
    setshowSearch,

    //propiedades
    isScroled,
    links,
    isQueryDesktop,
    isQueryMobile,
    isMenuActive,
    showSearch,
  };
};
