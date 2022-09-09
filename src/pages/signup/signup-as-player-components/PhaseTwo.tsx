// @ts-ignore
import Text from "../../../components/Input/Text.tsx";
// @ts-ignore
import Email from "../../../components/Input/Email.tsx";
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

const PhaseTwo = ({ handleNextStep }:any): JSX.Element => {
  return (
    <div>
      <div className="mt-16">
        <form onSubmit={handleNextStep}>
          <div className="flex-layout">
            <div className="equal-sides">
              <div className="w-full">
                <p className="reg-label mb-2">Current City</p>
                <Text />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Email Address</p>
                <Email />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Instagram profile link</p>
                <Text />
              </div>
            </div>
            <div className="px-3"></div>
            <div className="equal-sides">
              <div className="w-full">
                <p className="reg-label mb-2">Phone Number</p>
                <Text />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Linkedin profile link</p>
                <Text />
              </div>
              <div className="w-full mt-8">
                <p className="reg-label mb-2">Twitter profile link</p>
                <Text />
              </div>
            </div>
          </div>
          <div className="flex justify-center py-14">
            <Button label="Continue" customedClasses="py-5 px-20" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhaseTwo;
