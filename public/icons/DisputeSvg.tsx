const DisputeSvg = ({
  width = "24",
  height = "24",
  className = "inline vMiddle",
  fill = "#0d4a76",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={"none"}
    >
      <path
        d="M13 21H3C2.44772 21 2 20.5523 2 20L2 4C2 3.44772 2.44772 3 3 3H8.44792C8.79153 3 9.11108 3.17641 9.29415 3.46719L10.5947 5.53281C10.7778 5.82359 11.0974 6 11.441 6H21C21.5523 6 22 6.44772 22 7V12"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="19" cy="18" r="4" stroke={fill} strokeWidth="2" />
      <path d="M22 15L16 21" stroke={fill} strokeWidth="2" />
    </svg>
  );
};
export default DisputeSvg;
