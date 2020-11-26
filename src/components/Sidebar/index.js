import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to="about">
              about
            </SidebarLink>
            <SidebarLink onClick={toggle} to="discover">
              Discover
            </SidebarLink>
            <SidebarLink onClick={toggle} to="services">
              Services
            </SidebarLink>
            <SidebarLink onClick={toggle} to="signup">
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to="./signin">Sign In</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
