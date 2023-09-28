const ReturnSvg = ({
  width = "24",
  height = "24",
  className = "inline vMiddle",
  fill = "",
  stroke = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill={"none"}
      stroke={stroke}
    >
      <path
        d="M12.9998 8L6 14L12.9998 21"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ReturnSvg;
