import "./HomePage.css";

import { VideoItem } from "../../components/VideoItem/VideoItem";
import { ExploreGameCard } from "../../components/ExploreGameCard/ExploreGameCard";

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
      <div className="explore-games-container">
        <h1>Explore the world of E-sports!</h1>
        <div className="explore-games-background-overlay">
          <div className="explore-games-grid">
            <ExploreGameCard gameCover={"starcraft_cover.jpg"} gameName={"Starcraft 2"} />
            <ExploreGameCard gameCover={"csgo_cover.jpg"} gameName={"CS:GO"} />
            <ExploreGameCard gameCover={"valorant_cover.jpeg"} gameName={"Valorant"} />
            <ExploreGameCard gameCover={"World_of_Warcraft_cover.png"} gameName={"World of Warcraft"} />
            <ExploreGameCard gameCover={"starcraft_cover.jpg"} gameName={"Starcraft 2"} />
            <ExploreGameCard gameCover={"csgo_cover.jpg"} gameName={"CS:GO"} />
            <ExploreGameCard gameCover={"valorant_cover.jpeg"} gameName={"Valorant"} />
            <ExploreGameCard gameCover={"World_of_Warcraft_cover.png"} gameName={"World of Warcraft"} />
          </div>
        </div>
      </div>
    </div>
  );
};
