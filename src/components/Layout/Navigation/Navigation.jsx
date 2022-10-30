import { Link, Nav, Header } from "./Navigation.styled";

export default function Navigation ()  {
  return (
    <Header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </Header>
  );
};

 ;
