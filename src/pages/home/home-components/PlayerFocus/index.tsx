// @ts-ignore
import Space from "../../../../components/Space/index.tsx";
import "./styles.scss";

const PlayerFocus = (): JSX.Element => {
  return (
    <div>
      <div id="player-focus">
        <Space>
          <div className="flex-layout py-20">
            <div id="first-pane-layer-1">
              <p id="player-focus-text" className="yeseva-one">Player Focus</p>
              <div id="player-focus-card" className="mt-28 px-8">
                <div>
                  <p id="player-name" className="plus-jakarta mt-7">Christiano Ronaldo</p>
                  <div className="mt-3 pb-8">
                    <p className="player-text-description plus-jakarta">Age</p>
                    <p className="player-text-description plus-jakarta">Country</p>
                    <p className="player-text-description plus-jakarta">Club: Manchester United</p>
                    <p className="player-text-description plus-jakarta">Position: AM/LW</p>
                    <p className="player-text-description plus-jakarta">Player Role: Advanced Playmaker</p>
                    <p className="player-text-description plus-jakarta">Strength: Pace, Passing vision, Ball Control</p>
                    <p className="player-text-description plus-jakarta">Creativity, Dribbling, Agility</p>
                    <p className="player-text-description plus-jakarta">Foot: Right</p>
                    <p className="player-text-description plus-jakarta">Similar type of player: Mbappe</p>
                    <p className="player-text-description plus-jakarta">Plotential: 7.5/10</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="second-pane-layer-2" className="px-10">
              <img
                id="cr7"
                className="float-right"
                src={require("../../../../static/images/cr7.png")}
                alt="cr7"
                style={{ float: "right" }}
              />
            </div>
          </div>
        </Space>
      </div>
    </div>
  )
};

export default PlayerFocus;
