import React from "react";
// @ts-ignore
import Text from "../../../components/Input/Text.tsx";
// @ts-ignore
import Button from "../../../components/Buttons/Button.tsx";

const PhaseTwo = ({ handleNextStep, coach, setCoach }: any): JSX.Element => {
  return (
    <div>
      <form onSubmit={handleNextStep}>
        <div className="w-full mt-5">
          <p className="reg-label mb-2">Former Teams</p>
          <Text
            placeholder="former Teams"
            value={coach.formerTeams}
            onChange={(e: any) => setCoach({ ...coach, formerTeams: e.target.value })}
          />
        </div>
        <div className="w-full mt-8">
          <p className="reg-label mb-2">Current Teams</p>
          <Text
            placeholder="Current Teams"
            value={coach.currentTeam}
            onChange={(e: any) => setCoach({ ...coach, currentTeam: e.target.value })}
          />
        </div>
        <div className="flex justify-center py-14">
          <Button label="Continue" customedClasses="py-5 px-20" />
        </div>
      </form>
    </div>
  );
};

export default PhaseTwo;
