import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import AuthLayout from "../../Layouts/Auth.tsx";
// @ts-ignore
import LayoutCard from "../../components/Card/LayoutCard.tsx";
// @ts-ignore
import BackButton from "../../components/Buttons/BackButton.tsx";
// @ts-ignore
import PhaseOne from "./signup-as-player-components/PhaseOne.tsx";
// @ts-ignore
import PhaseTwo from "./signup-as-player-components/PhaseTwo.tsx";
// @ts-ignore
import PhaseThree from "./signup-as-player-components/PhaseThree.tsx";
// @ts-ignore
import Step from "../../components/step/index.tsx";
import "./styles.scss";

const Player = (): JSX.Element => {
  const [phase, setPhase] = useState<number>(1);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [data, setData] = useState({
    firstName: '',
    surName: '',
    dateOfBirth: '',
    nationality: '',
    weight: '',
    height: '',
    position: '',
    language: '',
    videoLink: '',
    foot: '',
    info: '',
    city: '',
    instagram: '',
    email: '',
    phoneNumber: '',
    linkedin: '',
    twitter: ''


  })



  const navigate = useNavigate();

  const handleNextStep = (event: any): void => {
    event.preventDefault();
    if (phase === 4) {
      handleCompleteRegistration();
      return
    }
    setPhase(phase + 1);
  };

  const handlePrevStep = (): void => {
    if (phase === 1) return navigate(-1);
    setPhase(phase - 1);
    setIsDone(false);
  };

  const handleCompleteRegistration = (): void => setIsDone(true);
  return (
    <div>
      <AuthLayout>
        <div>
          <LayoutCard>
            <BackButton onClick={handlePrevStep} />
            <div className="mt-1">
              <div className="px-10">
                <p className="signup">Sign Up as a player</p>
                <p className="text-center text-xl mt-4">
                  Sign Up as a player, connect with great Talents
                </p>
                <div className="mt-10 flex justify-center">
                  <Step
                    info={[
                      {
                        active: phase === 1 ? true : false,
                        done: phase > 1 ? true : false,
                        value: 1,
                        label: "Personal Data",
                      },
                      {
                        active: phase === 2 ? true : false,
                        done: phase > 2 ? true : false,
                        value: 2,
                        label: "Contact Information",
                      },
                      {
                        active: phase === 3 ? true : false,
                        done: isDone,
                        value: 3,
                        label: "Personal Information",
                      },
                    ]}
                  />
                </div>
                <div className="mt-10">
                  {phase === 1 && <PhaseOne handleNextStep={handleNextStep} data={data} setData={setData} />}
                  {phase === 2 && <PhaseTwo handleNextStep={handleNextStep} data={data} setData={setData} />}
                  {phase === 3 && <PhaseThree handleNextStep={handleNextStep} data={data} setData={setData} />}
                </div>
              </div>
            </div>
          </LayoutCard>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Player;
