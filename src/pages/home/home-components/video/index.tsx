// @ts-ignore
import Space from "../../../../components/Space/index.tsx";
import "./styles.scss";

const Video = (): JSX.Element => {
    return (
        <div id="video-container">
            <Space>
                <div id="main-video-container" className="pt-28 pb-28">
                    <img src={require("../../../../static/images/pic.png")} alt="" />
                    <div id="blue-box" className="pt-3 pb-1 flex">
                        <div className="w-11/12"></div>
                        <button className="pb-2">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.0355 1.81909V5.63741C7.0355 7.04328 6.06612 8.18296 4.87033 8.18296H1.62256M13.531 22.1835V18.3652C13.531 16.9593 14.5004 15.8196 15.6962 15.8196L18.944 15.8196M18.944 8.18296H15.6962C14.5004 8.18296 13.531 7.04328 13.531 5.63741L13.531 1.81909M1.62256 15.8196H4.87033C6.06612 15.8196 7.0355 16.9593 7.0355 18.3652L7.0355 22.1835" stroke="white" strokeWidth="1.96622" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Space>
        </div>
    )
};

export default Video;
