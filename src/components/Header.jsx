import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <>
      <header className="w-full absolute   z-10">
        <div className="logo m-4">
          <img className="w-24 lg:w-36" src={logo} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
