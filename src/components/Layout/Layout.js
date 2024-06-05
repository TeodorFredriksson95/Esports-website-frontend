import "./Layout.css";
import { Outlet, Link } from "react-router-dom";

//Layout acts as a component that is rendered on every page.
export const Layout = () => {
  return (
    <>
      <div className="header-container">
        <div className="bubbles-section">
          <div className="bubbles bubble-one"></div>
          <div className="bubbles bubble-two"></div>
          <div className="bubbles bubble-three"></div>
        </div>
        <div className="content-section">
          <div className="title-section">
            <div className="title">Esports - Now Live</div>
            <div className="is-live-icon"></div>
          </div>
          <div className="esports-game-flex-container">
            <div className="now-live-logo"></div>
            <div className="esports-game-title"> - Starcraft 2</div>
          </div>
          <div className="name-of-esports-video">RERUN: Oliveira vs. Serral - ESL SC2 Masters Spring 2024 Finals - Semifinals</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
