import "./ExploreGameCard.css";

export const ExploreGameCard = ({ gameName, gameCover }) => {
  return (
    <div className="explore-game-card-container">
      <div className="game-card-cover-image-container">
        <img className="game-card-cover-image" src={gameCover} />
        <div className="game-card-explore-button">
          <p>Explore</p>
        </div>
      </div>
      <div className="game-card-game-name-container">
        <p className="game-card-game-name">{gameName}</p>
      </div>
    </div>
  );
};
