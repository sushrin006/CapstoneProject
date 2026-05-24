import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  prefixIcon,
  suffixIcon,
  variant = "primary",
  size = "md",
  loading,
  fullWidth,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[12px] font-medium transition";

  const sizes = {
    sm: "px-12 py-2 text-sm w-fit",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2 text-md w-full",
  };

  const variants = {
    primary: "bg-[#1745CF] text-white hover:bg-gray-300 hover:text-black",
    secondary: "border border-[#1C1C1C] text-[#141414] hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        ${base}
        ${sizes[size]}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {prefixIcon && <span className="flex items-center">{prefixIcon}</span>}

      {loading ? "Loading..." : children}

      {suffixIcon && <span className="flex items-center">{suffixIcon}</span>}
    </button>
  );
};
