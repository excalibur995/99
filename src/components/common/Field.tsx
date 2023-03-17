import { cva } from "class-variance-authority";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface FieldProps extends PropsWithChildren {
  label?: ReactNode;
  subLabel?: ReactNode;
  isError?: boolean;
  errorMessage?: string;
  message?: string;
  inline?: boolean;
  messageClass?: string;
}

const messagecva = cva("text-sm");

const Field = (props: FieldProps) => {
  const { label, subLabel } = props;
  return (
    <div className="flex w-full flex-col">
      <div className="mb-2 px-4">
        <label
          className={clsx(
            "md:text-[32px] mb-2 leading-[56px] font-sans-700 text-[#0D1A35]",
            "text-2xl"
          )}
        >
          {label}
        </label>
        {subLabel && (
          <p className="text-sm font-medium text-[#0D1A35]">{subLabel}</p>
        )}
      </div>
      <div>{props.children}</div>
      {props.message && (
        <div className="mt-2">
          <span className={messagecva({ className: props.messageClass })}>
            {props.message}
          </span>
        </div>
      )}
    </div>
  );
};

export default Field;
