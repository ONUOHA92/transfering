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

const selectOption3: Array<string> = [
  "5.5",
  "6",
  "7"
];

const selectOption4: Array<string> = [
  "Defender",
  "Mild Fielder",
  "Striker"
];

const selectOption5: Array<string> = [
  "20Kg",
  "30Kg",
  "50Kg",
  "80Kg",
  "100Kg"
];

const PhaseOne = ({ handleNextStep }:any): JSX.Element => {
  return (
    <div>
      <div className="mt-16">
        <form onSubmit={handleNextStep}>
          <div className="flex-layout">
            <div className="equal-sides">
              <div className="w-full">
                <p className="reg-label mb-2">First Name</p>
                <Text />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Date of Birth</p>
                <Text />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Nationality</p>
                <Select defaultList="Nationality" options={selectOption} />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Height (Inches)</p>
                <Select defaultList="Height" options={selectOption3} />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Best Position</p>
                <Select defaultList="Best Position" options={selectOption4} />
              </div>
            </div>
            <div className="px-3"></div>
            <div className="equal-sides">
              <div className="w-full">
                <p className="reg-label mb-2">Surname</p>
                <Text />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Add Video Link</p>
                <Text />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Language</p>
                <Select defaultList="Language" options={selectOption2} />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Weight (Kg)</p>
                <Select defaultList="Weight" options={selectOption5} />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Foot</p>
                <Text />
              </div>
            </div>
          </div>
          <div>
            <textarea className="input w-full mt-10 txt-area px-5 py-5"></textarea>
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
