import type React from "react";

const ResetPwIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <div>
      <svg
        {...props}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="32" fill="#EFF6FF" />
        <path
          d="M31.9999 36V38.6667M23.9999 44H39.9999C41.4717 44 42.6666 42.8051 42.6666 41.3333V33.3333C42.6666 31.8616 41.4717 30.6667 39.9999 30.6667H23.9999C22.5281 30.6667 21.3333 31.8616 21.3333 33.3333V41.3333C21.3333 42.8051 22.5281 44 23.9999 44L31.9999 36M45.3333 22.6667V25.3333C45.3333 22.3898 42.9435 20 39.9999 20C37.0564 20 34.6666 22.3898 34.6666 25.3333V30.6667H45.3333V22.6667"
          stroke="#2563EB"
          stroke-width="2.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ResetPwIcon;
