import "./VideoItem.css";

export const VideoItem = ({ esportsLogo, viewers, gameTitle, matchTitle }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${esportsLogo})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="video-container">
      <div className="game-image-container">
        <div className="game-image">
          <img src={esportsLogo} />
        </div>
      </div>
      <div className="video-info-container">
        <div>
          <div className="flex-container">
            <div className="match-title">{matchTitle} - Live</div>
            <div className="is-live-icon-home"></div>
          </div>
          <p className="game-title">{gameTitle}</p>
        </div>
        <div className="flex-container views-container">
          <span class="ph--eye"></span>
          <p className="viewers">{viewers}</p>
        </div>
      </div>
    </div>
  );
};
