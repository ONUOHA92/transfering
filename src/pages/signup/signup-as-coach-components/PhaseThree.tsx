import React from "react";
// @ts-ignore
import Text from "../../../components/Input/Text.tsx";
// @ts-ignore
import Email from "../../../components/Input/Email.tsx";
// @ts-ignore
import Button from "../../../components/Buttons/Button.tsx";

const PhaseTwo = ({ handleNextStep, coach, setCoach }: any): JSX.Element => {
  return (
    <div>
      <form onSubmit={handleNextStep}>
        <div className="w-full mt-5">
          <p className="reg-label mb-2">Current City</p>
          <Text
            placeholder="Current City"
            value={coach.currentCity}
            onChange={(e: any) => setCoach({ ...coach, currentCity: e.target.value })}
          />
        </div>
        <div className="w-full mt-8">
          <p className="reg-label mb-2">Phone Number</p>
          <Text
            placeholder="Phone Number"
            type="number"
            value={coach.phoneNumber}
            onChange={(e: any) => setCoach({ ...coach, phoneNumber: e.target.value })}
          />
        </div>
        <div className="w-full mt-8">
          <p className="reg-label mb-2">Email Address</p>
          <Email
            placeholder="Email Address"
            value={coach.email}
            onChange={(e: any) => setCoach({ ...coach, email: e.target.value })}
          />
        </div>
        <div className="w-full mt-8">
          <p className="reg-label mb-2">Password</p>
          <Text
            type="password"
            placeholder="Password"
            value={coach.password}
            onChange={(e: any) => setCoach({ ...coach, password: e.target.value })}
          />
        </div>
        <div className="w-full mt-8">
          <p className="reg-label mb-2">Confirm Password</p>
          <Text
            type="password"
            placeholder="Confirm Password"
            value={coach.confirmPassword}
            onChange={(e: any) => setCoach({ ...coach, confirmPassword: e.target.value })}
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
