import React from "react";

interface SelectProps {
  defaultList: any
  options: any,
  value: string,
  onChange(): any
}

const Select = ({ defaultList, options, value, onChange }: SelectProps): JSX.Element => {
  return (
    <select className="input py-4 px-5 w-full" value={value} onChange={onChange}>
      <option value=''>{defaultList}</option>
      {options.map((data: any, index: any) => {
        return (
          <option value={data} key={index}>
            {data}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
