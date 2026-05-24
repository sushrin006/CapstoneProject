import { Slot } from "@radix-ui/react-slot";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

interface TextFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "prefix"
> {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  rootClassName?: string;
  inputClassName?: string;
  error?: boolean;
  helperText?: string;
  labelClassName?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  asChild?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      placeholder,
      type,
      rootClassName,
      inputClassName,
      error,
      helperText,
      labelClassName,
      prefix,
      suffix,
      asChild,
      disabled,
      required = false,
      ...inputProps
    }: TextFieldProps,
    ref,
  ) => {
    const Component = asChild ? Slot : "input";
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div
        className={`flex flex-col w-full gap-1.5 ${
          error ? "border-red-500 text-red-500" : ""
        } ${rootClassName}`}
      >
        {label && (
          <label
            htmlFor={label}
            className={`text-sm font-medium ${
              error ? "text-red-500" : "text-gray-700"
            } ${labelClassName}`}
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className={`relative flex items-center w-full`}>
          {prefix && (
            <div className="flex items-center justify-center  text-gray-500 w-full">
              <div className="w-4 h-4 sm:w-5 sm:h-5">{prefix}</div>
            </div>
          )}
          <Component
            type={
              type === "password" ? (!showPassword ? "password" : "text") : type
            }
            placeholder={placeholder}
            className={`w-full  flex-1 p-2 text-xs h-8  disabled:bg-gray-100 disabled:cursor-not-allowed outline-none rounded-md
               ${
                 error
                   ? "border border-red-500 text-red-500 placeholder:text-red-500"
                   : "border border-gray-100 text-gray-900 placeholder-black ring ring-primary-800  focus:ring focus:ring-primary-900"
               } ${inputClassName}`}
            ref={ref}
            {...inputProps}
            disabled={disabled}
          />
          {suffix && !showPassword && (
            <div className="flex items-center justify-center pr-2 sm:pr-3 pl-1 sm:pl-2 text-gray-500 ">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                {suffix}
              </div>
            </div>
          )}
          {type === "password" && showPassword && (
            <Eye
              width={16}
              height={16}
              className="mr-2 stroke-gray-700 absolute right-0"
              onClick={() => setShowPassword(false)}
            />
          )}
          {type === "password" && !showPassword && (
            <EyeOff
              width={16}
              height={16}
              className="mr-2 stroke-gray-700 absolute right-0"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        {error && helperText && (
          <span className="text-xs text-red-500">{helperText}</span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";
