const GridView = ({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d="M9,0H1A1,1,0,0,0,0,1V9a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V1A1,1,0,0,0,9,0ZM8,8H2V2H8Z" />
      <path d="M20,0H12a1,1,0,0,0-1,1V9a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V1A1,1,0,0,0,20,0ZM19,8H13V2h6Z" />
      <path d="M31,0H23a1,1,0,0,0-1,1V9a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V1A1,1,0,0,0,31,0ZM30,8H24V2h6Z" />
      <path d="M9,11H1a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V12A1,1,0,0,0,9,11ZM8,19H2V13H8Z" />
      <path d="M20,11H12a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12A1,1,0,0,0,20,11Zm-1,8H13V13h6Z" />
      <path d="M31,11H23a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V12A1,1,0,0,0,31,11Zm-1,8H24V13h6Z" />
      <path d="M9,22H1a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1V23A1,1,0,0,0,9,22ZM8,30H2V24H8Z" />
      <path d="M20,22H12a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,20,22Zm-1,8H13V24h6Z" />
      <path d="M31,22H23a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23A1,1,0,0,0,31,22Zm-1,8H24V24h6Z" />
    </svg>
  );
};
export default GridView;