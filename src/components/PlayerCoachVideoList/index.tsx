// @ts-ignore
import CR7 from "../../static/images/cr7-three.png";
import "./styles.scss";

const VideoList = ({ videoList }:any) => {
  return (
    <div>
      <p className="video-heading pl-4">Videos</p>
      <div className="flex flex-wrap">
        {
          videoList.map((i:any, index:any) => {
             return (
                <div className="video-container s-1st pb-10" key={index}>
                  <img src={CR7} alt="Player" />
                  <p className="title plus-jakarta">{i.title}</p>
                  <p className="description plus-jakarta">{i.description}</p>
                </div>
              )
           })
        }
      </div>
    </div>
  )
};

export default VideoList;
