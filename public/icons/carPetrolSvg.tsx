const CarPetrolSvg = ({
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
        d="M4 5C4 4.44772 4.44772 4 5 4H12C12.5523 4 13 4.44772 13 5V21H4V5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 11.5H18V19C18 20.1046 18.8954 21 20 21V21C21.1046 21 22 20.1046 22 19V9M17.5 2L20.5 4.66667M20.5 4.66667L22 6V9M20.5 4.66667V9H22"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 21L2 21"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8L7 8"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CarPetrolSvg;
