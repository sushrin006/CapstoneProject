import type React from "react";

const FileIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="36" rx="8" fill="#F8FAFC" />
      <path
        d="M10 26C9.45 26 8.97917 25.8042 8.5875 25.4125C8.19583 25.0208 8 24.55 8 24V12C8 11.45 8.19583 10.9792 8.5875 10.5875C8.97917 10.1958 9.45 10 10 10H16L18 12H26C26.55 12 27.0208 12.1958 27.4125 12.5875C27.8042 12.9792 28 13.45 28 14V24C28 24.55 27.8042 25.0208 27.4125 25.4125C27.0208 25.8042 26.55 26 26 26H10ZM10 24H26V14H17.175L15.175 12H10V24ZM10 24V12V14V24Z"
        fill="#F59E0B"
      />
    </svg>
  );
};

export default FileIcon;
