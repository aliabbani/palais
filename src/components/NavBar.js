import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div>
      <nav className="flex flex-row w-full justify-between bg-[#272a31]">
        <div className="flex flex-row justify-between items-center text-white uppercase p-6 w-full md:w-max">
          <Link to="/">
            <div>Palais</div>
          </Link>
          <AiOutlineMenu
            className="flex md:hidden text-4xl text-white hover:text-yellow-600 cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </div>
        {showMenu ? (
          // mobile
          <div className="z-50  w-full h-full absolute top-0 left-0 overflow-scroll">
            <div className="text-black bg-silver p-6 bg-stone-200 flex flex-row justify-between items-center ">
              <div className="uppercase cursor-pointer">Palais</div>
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={() => setShowMenu(false)}
              />
            </div>
            <div className="items-center justify-center gap-5 bg-white text-white uppercase h-full flex flex-col text-black font-semibold text-lg">
              <Link to="/brand">
                <div>brand</div>
              </Link>
              <div>restaurants</div>
              <Link to="/loyality">
                <div>loyality card</div>
              </Link>
              <div>careers</div>
              <Link to="/contact">
                <div>contact</div>
              </Link>
              <a href="https://menu.omegasoftware.ca/lepalais1">menu</a>
            </div>
          </div>
        ) : (
          // desktop
          <div className="hidden md:flex flex-row justify-between items-center bg-[#272a31] py-7 px-4">
            <div className="flex md:gap-5 lg:gap-10 text-white uppercase">
              <Link to="/brand">
                <div>brand</div>
              </Link>
              <div>restaurants</div>
              <Link to="/loyality">
                <div>loyality card</div>
              </Link>
              <div>careers</div>
              <Link to="/contact">
                <div>contact</div>
              </Link>
              <a href="https://menu.omegasoftware.ca/lepalais1">Menu</a>
              <div className="text-yellow-700">+243 999</div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;

// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";

// function NavBar() {
//   return (
//     <>
//       {["md"].map((expand) => (
//         <Navbar key={expand} bg="dark" expand={"md"} className="py-4">
//           <Container fluid>
//             <Navbar.Brand href="#" className="text-light">
//               Le Palais Group
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1" className="text-light">
//                     Home
//                   </Nav.Link>
//                   <Nav.Link href="#action2" className="text-light">
//                     Link
//                   </Nav.Link>
//                   <NavDropdown
//                     title={<span className="text-light">Dropdown</span>}
//                     // className="text-light"
//                     // title="asdasd"
//                     // id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3" className="text-light">
//                       Action
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href="#action4" className="text-light">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                   <Nav.Link href="#action1" className="text-light">
//                     Home
//                   </Nav.Link>
//                   <Nav.Link href="#action1" className="text-light">
//                     Home
//                   </Nav.Link>
//                   <Nav.Link href="#action1" className="text-light">
//                     Home
//                   </Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default NavBar;
