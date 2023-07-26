const ReturnDateSvg = ({
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
      fill={fill}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          id="primary"
          d="M20,21H4a1,1,0,0,1-1-1V9H21V20A1,1,0,0,1,20,21ZM21,5a1,1,0,0,0-1-1H4A1,1,0,0,0,3,5V9H21Z"
          style={{
            fill: "none",
            stroke: fill,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />

        <path
          id="secondary"
          d="M16,3V6M8,3V6m2,9h4"
          style={{
            fill: "none",
            stroke: fill,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />

        <polyline
          id="secondary-2"
          data-name="secondary"
          points="12 13 10 15 12 17"
          style={{
            fill: "none",
            stroke: fill,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
      </g>
    </svg>
  );
};
export default ReturnDateSvg;
