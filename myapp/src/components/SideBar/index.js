import { TiHome } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";
import "./index.css";

const SideBar = (props) => {
  const renderTopSection = () => (
    <section className="section-container">
      <div className="icon-container">
        <TiHome className="icon" />
        <h2 className="icon-name">Home</h2>
      </div>
      <div className="icon-container">
        <CgMenuGridR className="icon" />
        <h2 className="icon-name">Dashboard</h2>
      </div>
    </section>
  );

  const renderNavigationSection = () => (
    <section className="nav-container">
      <div className="heading">
        <p className="item">Services</p>
      </div>
      <div className="nav active">
        <p className="nav-items">Airports</p>
      </div>
      <div className="nav">
        <p className="nav-items">Videos</p>
      </div>
    </section>
  );

  const renderOthers = () => (
    <section className="others-container">
      <div className="heading">
        <p className="item">Others</p>
      </div>
      <ul className="list-container">
        <li className="list-item">List 1</li>
        <li className="list-item">List 2</li>
        <li className="list-item">List 3</li>
      </ul>
    </section>
  );

  return (
    <div
      className={
        props.isSideBarActive
          ? "sidebar-container sidebar-active"
          : "sidebar-container sidebar-inactive"
      }
    >
      {renderTopSection()}
      {renderNavigationSection()}
      {renderOthers()}
    </div>
  );
};

export default SideBar;
