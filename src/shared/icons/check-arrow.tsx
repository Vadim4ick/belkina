const CheckArrow = (props: ReactTagProps<"svg">) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 6.78947L5.27655 10.8908C5.40711 11.0364 5.61878 11.0364 5.74933 10.8908L15 1"
        stroke="#1D233B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { CheckArrow };
