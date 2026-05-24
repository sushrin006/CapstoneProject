import type React from "react";

const DocIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="36" rx="8" fill="white" />
      <path
        d="M20 8H12C11.4696 8 10.9609 8.21072 10.5858 8.58579C10.2107 8.96086 10 9.46957 10 10V26C10 26.5304 10.2107 27.0391 10.5858 27.4142C10.9609 27.7893 11.4696 28 12 28H24C24.5304 28 25.0391 27.7893 25.4142 27.4142C25.7893 27.0391 26 26.5304 26 26V14M20 8C20.3166 7.99949 20.6301 8.06161 20.9225 8.18277C21.215 8.30394 21.4806 8.48176 21.704 8.706L25.292 12.294C25.5168 12.5175 25.6952 12.7833 25.8167 13.0762C25.9382 13.369 26.0005 13.683 26 14M20 8V13C20 13.2652 20.1054 13.5196 20.2929 13.7071C20.4804 13.8946 20.7348 14 21 14L26 14M16 15H14M22 19H14M22 23H14"
        stroke="#EF4444"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DocIcon;
