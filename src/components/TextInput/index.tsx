import React from "react";
import { cn } from "../../utils/classnames";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const TextInput: React.FC<Props> = ({
  errorMessage,
  className,
  ...props
}) => {
  return (
    <div className={cn("max-w-82 w-82 relative", className)}>
      <input
        type="text"
        className={cn(
          "h-14 w-full rounded-lg px-4",
          "focus:ring-offset-2 focus:ring-2 outline-none",
          "text-3xl font-bold shadow-md",
          errorMessage
            ? "text-red-500 border-red-500 shadow-red-100 border focus:ring-red-500"
            : "text-sky-700 border-sky-700 shadow-sky-100 border focus:ring-sky-700"
        )}
        {...props}
      />
      {errorMessage && (
        <p
          className={cn(
            "text-red-500 h-10 font-mono tracking-tighter mt-1 font-bold",
            "absolute left-0 top-14"
          )}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
