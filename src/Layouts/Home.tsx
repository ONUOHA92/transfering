import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
// @ts-ignore
import { handleOpenModal } from "../redux/index.ts";
// @ts-ignore
import Navigation from "../components/Navigation/index.tsx";
// @ts-ignore
import Button from "../components/Buttons/Button.tsx";
// @ts-ignore
import Footer from "../components/Footer/index.tsx";
import "./styles.scss";

const Home = ({ children }:any): JSX.Element => {
  useEffect((): void => { window.scrollTo(0, 0) }, []);
  const dispatch = useDispatch();
  return (
    <div>
      <Navigation />
      <div id="home-layout">
        <div id="home-layout-overlay" className="pt-7">
          <div>
            <div id="top-content-container">
              <div className="flex justify-center">
                <div>
                  <p id="welcome-text" className="text-white text-3xl font-bold plus-jakarta">Welcome to</p>
                  <p id="transferhubng" className="text-white text-9xl text-center spantaran">TransferhubNG</p>
                </div>
              </div>
              <p
                id="connecting"
                className="text-white text-center plus-jakarta"
              >Connecting players and coaches to clubs and Agencies</p>
              <div className="flex justify-center">
                <div>
                  <Button
                    label="Get discovered"
                    customedClasses="px-14 py-7 mt-10 text-xl"
                    onClick={() => dispatch(handleOpenModal())}
                  />
                  <div className="flex justify-center mt-20">
                    <button id="down-btn" className="py-10 px-5">
                      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 9L17 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <p className="text-center text-white mt-5 plus-jakarta">Click to Scroll down</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-16">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default Home;
