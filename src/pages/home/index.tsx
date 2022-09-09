import React from "react";
// @ts-ignore
import HomeLayout from "../../Layouts/Home.tsx";
// @ts-ignore
import Space from "../../components/Space/index.tsx";
// @ts-ignore
import HowToPromotePlayer from "./home-components/HowToPromotePlayer/HowToPromotePlayer.tsx";
// @ts-ignore
import NewsLetter from "./home-components/news-letter/index.tsx";
// @ts-ignore
import Video from "./home-components/video/index.tsx";
// @ts-ignore
import PlayerFocus from "./home-components/PlayerFocus/index.tsx";
// @ts-ignore
import TFHub from "./home-components/TFHub/index.tsx";
// @ts-ignore
import Glider from "./home-components/Glider/index.tsx";
// @ts-ignore
import Accordion from "../../components/Accordion/index.tsx";
// @ts-ignore
import Steps from "../../constants/steps.ts";

import "./styles.scss";

const HomePage = (): JSX.Element => {
  return (
    <div id="home">
      <HomeLayout>
        <div id="about-box">
          <Space>
            <p id="about-us-heading" className="pt-5 spantaran">About Us</p>
          </Space>
          <div id="about-content-container">
            <Space>
              <div id="fire-ball">
                <div id="fire-ball-overlay">
                  <p className="plus-jakarta about-text">TransferhubNG is an online platform designed to connect football players and coaches with various scouts,
                    <br />
                    agents and football teams across the globe.
                  </p>
                  <p className="plus-jakarta about-text mt-5">
                    It comes with features such as player profiling and statistics, user authentication and validation. With other
                    features to spice its audience with trending sports news, transfer and live scores updates.
                  </p>
                  <p className="plus-jakarta about-text mt-5 pb-10">
                    TransferhubNG was created to provide for footballers and coaches worldwide to upload their data,The aim is to provide
                    a platform that will serve as a go-to for clubs and agents to access players and coaches they are
                    interested in all around the globe with specific player evaluation and detailed profiling.
                  </p>
                </div>
              </div>
            </Space>
          </div>
        </div>
        <HowToPromotePlayer />
        <NewsLetter />
        <Video />
        <PlayerFocus />
        <TFHub />
        <Glider />
        <div id="inner-spacing" className="mt-20">
          {
            Steps.map((data: any, index: any) => {
              return (
                <div className="mt-3" key={index}>
                  <Accordion
                    title={data.title}
                    content={data.content}
                  />
                </div>
              )
            })
          }
        </div>
      </HomeLayout>
    </div>
  )
};

export default HomePage;
