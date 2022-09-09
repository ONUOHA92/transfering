import React from "react";
// @ts-ignore
import Text from "../../../components/Input/Text.tsx";
// @ts-ignore
import Email from "../../../components/Input/Email.tsx";
// @ts-ignore
import Button from "../../../components/Buttons/Button.tsx";

const PhaseTwo = ({ handleNextStep }:any): JSX.Element => {
  return (
    <div>
      <form onSubmit={handleNextStep}>
        <div className="w-full mt-5">
          <p className="reg-label mb-2">Current City</p>
          <Text />
        </div>
        <div className="w-full mt-8">
          <p className="reg-label mb-2">Phone Number</p>
          <Text />
        </div>
        <div className="w-full mt-8">
          <p className="reg-label mb-2">Email Address</p>
          <Email />
        </div>
        <div className="flex justify-center py-14">
          <Button label="Continue" customedClasses="py-5 px-20" />
        </div>
      </form>
    </div>
  );
};

export default PhaseTwo;
