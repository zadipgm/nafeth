const PhoneSvg = ({
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
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d="M5.5 0c-.542 0-.984.064-1.36.23a1.72 1.72 0 0 0-.837.797C2.963 1.707 3 2.5 3 3.5v9c0 1-.037 1.796.303 2.475.17.34.462.628.838.795.375.166.817.23 1.359.23h5c.542 0 .984-.064 1.36-.23.375-.167.668-.456.837-.795.34-.68.303-1.475.303-2.475v-9c0-1 .037-1.794-.303-2.473a1.72 1.72 0 0 0-.838-.796C11.484.064 11.042 0 10.5 0zM4.07 2h7.86c.05.373.07.87.07 1.5v9c0 .63-.02 1.126-.07 1.5H4.07c-.05-.374-.07-.87-.07-1.5v-9c0-.63.02-1.127.07-1.5z"></path>
    </svg>
  );
};
export default PhoneSvg;