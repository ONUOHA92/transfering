import React, { useState } from "react";
// @ts-ignore
import ArrowDown from "./icons/ArrowDown.tsx";
// @ts-ignore
import ArrowRight from "./icons/ArrowRight.tsx";
import "./styles.scss";

const Accordion = ({ title, content }: any): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSetOpenClose = (): void => {
    setOpen(!open)
  }
  return (
    <div>
      <div className="accordion-component w-full">
        <div className="accordion-component-header w-full flex justify-between py-5 bg-white px-5">
          <div className="font-bold">{title}</div>
          <div>
            <button onClick={handleSetOpenClose}>
              {open ? (<ArrowDown />) : (<ArrowRight />)}
            </button>
          </div>
        </div>
        {open && (
          <div className="accordion-component-body w-full pb-10 bg-white px-5">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  )
};

export default Accordion;
