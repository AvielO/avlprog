import React from "react";

interface CustomInputProps {
  type: string;
  name: string;
  placeHolder: string;
  minLength?: number;
  maxLength?: number;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  name = "name",
  placeHolder = "Last Name",
  minLength,
  maxLength,
  required = false,
  value,
  onChange,
}) => {
  return (
    <input
      className="h-10 rounded-lg border-2 border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 shadow-lg p-5 text-lg transition-all"
      type={type}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeHolder}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput;
