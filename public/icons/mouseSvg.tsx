const MouseSvg = ({
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
      viewBox="0 0 465 465"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        d="M346.736,44.623C321.494,15.014,283.06,0,232.5,0s-88.994,15.014-114.236,44.623c-25.38,29.771-29.169,64.65-29.169,82.792
	v210.171c0,18.142,3.789,53.021,29.169,82.792C143.506,449.987,181.94,465,232.5,465s88.994-15.013,114.236-44.622
	c25.38-29.771,29.169-64.65,29.169-82.792V127.415C375.905,109.273,372.116,74.394,346.736,44.623z M232.5,162
	c-10.477,0-19-8.523-19-19v-40.716c0-10.477,8.523-19,19-19s19,8.523,19,19V143C251.5,153.477,242.977,162,232.5,162z
	 M360.905,337.586c0,18.771-6.19,112.414-128.405,112.414s-128.405-93.643-128.405-112.414V127.415
	c0-18.379,5.953-108.516,120.905-112.279v53.992c-15.15,3.426-26.5,16.985-26.5,33.156V143c0,16.171,11.35,29.73,26.5,33.156v61.628
	c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-61.628c15.15-3.426,26.5-16.985,26.5-33.156v-40.716
	c0-16.171-11.35-29.73-26.5-33.156V15.136c114.953,3.764,120.905,93.9,120.905,112.279V337.586z"
      />
    </svg>
  );
};
export default MouseSvg;