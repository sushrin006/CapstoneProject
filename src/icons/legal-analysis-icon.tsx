import type React from "react";

const LegalIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="#F0F0FE" />
      <path
        d="M11 29.5V27.5H23V29.5H11ZM16.65 24.65L11 19L13.1 16.85L18.8 22.5L16.65 24.65ZM23 18.3L17.35 12.6L19.5 10.5L25.15 16.15L23 18.3ZM27.6 28.5L14.55 15.45L15.95 14.05L29 27.1L27.6 28.5Z"
        fill="#10B981"
      />
    </svg>
  );
};

export default LegalIcon;
