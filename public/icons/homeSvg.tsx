const HomeSvg = ({
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
      <path d="M3.018,10.982,3,11H5v9a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11h2l-.018-.018a.986.986,0,0,0,.85-.427,1,1,0,0,0-.278-1.387l-9-6a1,1,0,0,0-1.11,0L8,5.465V4A1,1,0,0,0,6,4V6.8L2.446,9.168a1,1,0,0,0-.278,1.387A.983.983,0,0,0,3.018,10.982ZM14,19H10V16a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm-4-8h4a1,1,0,0,1,0,2H10a1,1,0,0,1,0-2Z" />
    </svg>
  );
};
export default HomeSvg;
