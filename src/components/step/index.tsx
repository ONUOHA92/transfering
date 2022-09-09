// @ts-ignore
import Done from "./icons/Done.tsx";

import "./styles.scss";

const Step = ({ info }: any): JSX.Element => {
  return (
    <div className="flex">
      {
        info.map((data: any, index: any) => {
          return (
            <div className="flex" key={index}>
              <div>
                <div className="flex justify-center">
                  {data.done ? (<Done />) : (
                    <div className={data.active ? 'step-circle rounded-full text-center text-xl pt-2 step-circle-active' : 'step-circle rounded-full text-center text-xl pt-2'}>{data.value}</div>
                  )}
                </div>
                <br />
                <div className="label-text">
                  {data.label}
                </div>
              </div>
              <div className="px-5">
                {info.length !== index + 1 && (<div className="step-line mt-5"></div>)}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Step;
