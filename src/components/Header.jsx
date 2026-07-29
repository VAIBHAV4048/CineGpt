import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
const Header = ({ isSign }) => {
  return (
    <>
      <header className={`w-full ${isSign ? "relative" : "absolute"} flex justify-between   z-10`}>
        <div className="logo m-4">
          <img className="w-24 lg:w-36" src={logo} alt="" />
        </div>
        {isSign && (
          <div className="profile w-8 h-8 m-4">
            <img src={profile} alt="profile" className="w-full h-full" />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
