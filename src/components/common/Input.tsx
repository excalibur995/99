import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
export type InputElement = Omit<
  ComponentPropsWithoutRef<"input">,
  "suffix" | "prefix"
>;
interface InputProps extends InputElement {
  prefix?: React.ReactNode;
  label?: string;
  whitePrefix?: boolean;
  errors?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { prefix, label, whitePrefix, errors, ...rest } = props;
  return (
    <div className="flex flex-col">
      <label
        htmlFor={rest.id}
        className="block mb-1 text-sm font-semibold text-[#0D1A35]"
      >
        {label}
        {rest.required && (
          <mark className="bg-transparent text-red-500 text-sm">*</mark>
        )}
      </label>
      <div className="flex">
        {prefix && (
          <span
            className={clsx(
              "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md",
              {
                "!bg-white": !!whitePrefix,
              }
            )}
          >
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={clsx(
            "rounded-lg border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            {
              "rounded-none rounded-r-lg": !!prefix,
            }
          )}
          placeholder="elonmusk"
          {...rest}
        />
      </div>
      {errors && <p className="text-red-400">{errors}</p>}
    </div>
  );
});
Input.displayName = "Input";
export default Input;
