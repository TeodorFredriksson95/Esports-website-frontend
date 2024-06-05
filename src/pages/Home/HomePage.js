import "./HomePage.css";

import { VideoItem } from "../../components/VideoItem/VideoItem";

export const HomePage = () => {
  return (
    <div className="home-body">
      <div className="home-intro-section"></div>
      <div className="home-intro-title">Great games - anywhere, anytime</div>
      <div className="most-viewed-container">
        <h1>Most viewed</h1>
        <div className="video-items">
          <VideoItem esportsLogo={"lol_logo.png"} gameTitle={"League of Legends"} matchTitle={"GEN vs BLG | DAY 14 | MSI 2024"} viewers={251313} />
          <VideoItem esportsLogo={"cslogo.png"} gameTitle={"Counterstrike"} matchTitle={"GEN vs BLG | DAY 14 | MSI 2024"} viewers={11504} />
          <VideoItem esportsLogo={"Logo_Mobile_Legends-_Bang_Bang.jpg"} gameTitle={"League of Legends"} matchTitle={"GEN vs BLG | DAY 14 | MSI 2024"} viewers={251313} />
        </div>
      </div>
    </div>
  );
};
