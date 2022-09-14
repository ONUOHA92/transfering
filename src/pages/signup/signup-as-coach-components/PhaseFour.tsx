import React from "react"; // @ts-ignore
import Uploader from "../../../components/Input/Uploader.tsx";
// @ts-ignore
import Button from "../../../components/Buttons/Button.tsx";

import "../styles.scss";

const PhaseFour = ({ handleNextStep, handleGetFileOne, handleGetFileTwo, handleGetFileThree }: any): JSX.Element => {
  // const handleGetChangeValue = (e: any) => {
  //   console.log("Res log ===>", e.target.files[0]);
  // };


  // const onFileChange = (e: any) => {
  //   console.log(e.target.files[0]);





  return (
    <div>
      <p className="reg-label mb-2">Licenses/Certificates (Image)</p>
      <div className="mt-1">
        <Uploader type="file" onChange={handleGetFileOne} />
      </div>
      <p className="reg-label mb-2 mt-8">Diploma Certificate (Image)</p>
      <div className="mt-1">
        <Uploader type="file" onChange={handleGetFileTwo} />
      </div>
      <p className="reg-label mb-2 mt-8">
        Other Trainings & Certifications (Image)
      </p>
      <div className="mt-1">
        <Uploader type="file" onChange={handleGetFileThree} />
      </div>

      <p className="reg-label mb-2 mt-8">
        Other Trainings & Certifications (Image)
      </p>
      <textarea className="input w-full txt-area px-5 py-5" />
      <div className="flex justify-center py-10">
        <Button
          onClick={handleNextStep}
          label="Complete Registration"
          customedClasses="py-5 px-20"
        />
      </div>
    </div>
  );
};

export default PhaseFour;
