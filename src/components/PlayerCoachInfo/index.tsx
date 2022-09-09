import "./styles.scss";

interface biographyProps {
  imageURL: string,
  name: string,
  biographyData: string
}

const PlayerCoachInfo = ({imageURL, name, biographyData}: biographyProps): JSX.Element => {
  return (
    <div className="flex">
     
     <div className="w-2/5">
        <div className="px-8">
          <img className="player-coach-image" src={imageURL} alt="Player coach" />
        </div>
        <div>
          <p className="player-name text-center spantaran">#{name}</p>
        </div>
      </div>

      <div className="biography-container w-3/5 px-6 pt-8">
        <p className="biography-heading">Biography</p>
        <div>
          <p className="biography-description plus-jakarta text-lg text-white mt-2">
            {biographyData}
          </p>
        </div>
      </div>
    </div>
  )
};

export default PlayerCoachInfo;
