import React from "react";
import { cn } from "../../lib/cn";

interface CustomInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  wrapperProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  label?: string
}

export const TextInput = React.forwardRef<React.ElementRef<"input">, CustomInputProps>((
  { wrapperProps = {},
    label,
    ...props }:
    CustomInputProps, ref) => {
  const { className, ...wrapper } = wrapperProps
  return <div className="w-auto">
    <div className={cn("relative w-full min-w-[100px] h-[46px]", className)} {...wrapper}>
      <input
        ref={ref}
        className="peer w-full h-full bg-transparent text-primary-400  outline outline-0 focus:outline-0 disabled:bg-neutral-400 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-neutral-500 placeholder-shown:border-t-neutral-400 border focus:border-2 border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-md border-neutral-400 focus:border-primary-400"
        {...props} />
      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-neutral-400  peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-neutral-400 transition-all -top-1.5 peer-placeholder-shown:text-[16px] text-[16px] peer-focus:text-[12px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-primary-400 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-primary-500">
        {label ?? props.placeholder}
      </label>
    </div>
  </div>
})
