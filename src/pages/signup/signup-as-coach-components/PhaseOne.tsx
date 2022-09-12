import React from "react";
// @ts-ignore
import Text from "../../../components/Input/Text.tsx";
// @ts-ignore
import Select from "../../../components/Input/Select.tsx";
// @ts-ignore
import Button from "../../../components/Buttons/Button.tsx";
import "../styles.scss";

const selectOption: Array<string> = [
  "Nigeria",
  "Ghana",
  "Tunisia",
  "Mali",
  "Ivory Coast",
  "South Africa",
  "Algeria",
  "Togo",
  "Benue",
  "Kenya",
  "Sudan",
];

const selectOption2: Array<string> = [
  "English",
  "Spanish",
  "German",
  "Italian",
];

const PhaseOne = ({ handleNextStep, coach, setCoach }: any): JSX.Element => {
  return (
    <div>
      <div className="mt-16">
        <form onSubmit={handleNextStep}>
          <div className="flex-layout">
            <div className="equal-sides">
              <div className="w-full">
                <p className="reg-label mb-2">First Name</p>
                <Text
                  type='text'
                  placeholder="First Name"
                  value={coach.firstname}
                  onChange={(e: any) => setCoach({ ...coach, firstname: e.target.value })}
                />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Date of Birth</p>
                <Text
                  type="date"
                  placeholder="Date of birth"
                  value={coach.dob}
                  onChange={(e: any) => setCoach({ ...coach, dob: e.target.value })}
                />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Nationality</p>
                <Select
                  defaultList="Nationality"
                  value={coach.nationality}
                  onChange={(e: any) => setCoach({ ...coach, nationality: e.target.value })}
                  options={selectOption} />
              </div>
            </div>
            <div className="px-3"></div>
            <div className="equal-sides">
              <div className="w-full">
                <p className="reg-label mb-2">Surname</p>
                <Text
                  type="text"
                  placeholder="Surname"
                  value={coach.surname}
                  onChange={(e: any) => setCoach({ ...coach, surname: e.target.value })}
                />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Add Video Link</p>
                <Text
                  placeholder="Add Video Link"

                />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Language</p>
                <Select
                  defaultList="Language"
                  value={coach.languages}
                  onChange={(e: any) => setCoach({ ...coach, languages: e.target.value })}
                  options={selectOption2} />
              </div>
            </div>
          </div>
          <div>
            <textarea
              placeholder="Enter your information"
              //  onChange
              //  value
              className="input w-full mt-10 txt-area px-5 py-5" />
          </div>
          <div className="flex justify-center py-14">
            <Button label="Continue" customedClasses="py-5 px-20" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhaseOne;
