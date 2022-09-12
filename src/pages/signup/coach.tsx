import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import AuthLayout from "../../Layouts/Auth.tsx";
// @ts-ignore
import LayoutCard from "../../components/Card/LayoutCard.tsx";
// @ts-ignore
import BackButton from "../../components/Buttons/BackButton.tsx";
// @ts-ignore
import PhaseOne from "./signup-as-coach-components/PhaseOne.tsx";
// @ts-ignore
import PhaseTwo from "./signup-as-coach-components/PhaseTwo.tsx";
// @ts-ignore
import PhaseThree from "./signup-as-coach-components/PhaseThree.tsx";
// @ts-ignore
import PhaseFour from "./signup-as-coach-components/PhaseFour.tsx";
// @ts-ignore
import Step from "../../components/step/index.tsx";
import "./styles.scss";




const Coach = () => {

  const [phase, setPhase] = useState<number>(1);
  const [isDone, setIsDone] = useState<boolean>(false);


  const [coach, setCoach] = useState({
    firstname: '',
    surname: '',
    dob: '',
    nationality: '',
    languages: '',
    formerTeams: '',
    currentTeam: '',
    currentCity: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: [],
  })

  const {
    email,
    surname,
    dob,
    nationality,
    confirmPassword,
    password,
    phoneNumber,
    languages,
    image,
    currentCity,
    currentTeam,
  } = coach;

  useEffect(() => {
    console.log(coach.image)
  }, [coach.image])

  const formData = new FormData();

  formData.append('email', email);
  formData.append('surname', surname);
  formData.append('dob', dob);
  formData.append('nationality', nationality)
  formData.append('confirmPassword', confirmPassword)
  formData.append('phoneNumber', phoneNumber)
  formData.append('password', password)
  formData.append('languages', languages)
  formData.append('currentCity', currentCity)
  formData.append('currentTeam', currentTeam)



  const navigate = useNavigate();
  const handleNextStep = (event: any): void => {
    event.preventDefault();

    if (phase === 4) {
      for (let i = 0; i < image.length; i++) {
        formData.append('image', image[i]);
      }
      const data = (Object.fromEntries(formData))
      console.log(data, 'data')

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
                <p className="signup">Sign Up as a Coach</p>
                <p className="text-center text-xl mt-4">
                  Sign Up as a Coach, connect with great Talents
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
                        label: "Job History",
                      },
                      {
                        active: phase === 3 ? true : false,
                        done: phase > 3 ? true : false,
                        value: 3,
                        label: "Contact Information",
                      },
                      {
                        active: phase === 4 ? true : false,
                        done: isDone,
                        value: 4,
                        label: "Personal Information",
                      },
                    ]}
                  />
                </div>
                <div className="mt-10">
                  {phase === 1 && <PhaseOne handleNextStep={handleNextStep} coach={coach} setCoach={setCoach} />}
                  {phase === 2 && <PhaseTwo handleNextStep={handleNextStep} coach={coach} setCoach={setCoach} />}
                  {phase === 3 && <PhaseThree handleNextStep={handleNextStep} coach={coach} setCoach={setCoach} />}
                  {phase === 4 && <PhaseFour handleNextStep={handleNextStep} coach={coach} setCoach={setCoach} />}
                </div>
              </div>
            </div>
          </LayoutCard>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Coach;
