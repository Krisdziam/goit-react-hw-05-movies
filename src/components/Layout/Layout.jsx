
import { Outlet } from "react-router-dom";

import { MainContainer, Main } from "./Layout.styled";
import Navigation from "./Navigation/Navigation";

export default function Layout() {


  return (
    
   <MainContainer>
    <Navigation />
    <Main>
      <Outlet />
    </Main>
  </MainContainer>
    
  )
}
