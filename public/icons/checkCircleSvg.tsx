const CheckCircleSvg = ({
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
      viewBox="0 0 512.001 512.001"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        style={{ fill: fill }}
        d="M256.001,0C114.615,0,0,114.615,0,256.001s114.615,256.001,256.001,256.001
	s256.001-114.615,256.001-256.001S397.385,0,256.001,0z"
      />
      <path
        style={{ fill: fill }}
        d="M256.001,24c-128.13,0-232,103.87-232,232s103.87,232,232,232S488,384.13,488,256.001
	S384.13,24,256.001,24z"
      />
      <polygon
        style={{ fill: "#ffff" }}
        points="345.032,137.848 216.896,295.888 163.04,242.728 127.528,281.848 221.056,374.153 
	384.472,172.608 "
      />
    </svg>
  );
};
export default CheckCircleSvg;
