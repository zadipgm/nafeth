const ReportSvg = ({
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
      viewBox="0 0 31.412 31.412"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <g transform="translate(-418.052 -322.633)">
        <path d="M445.517,324.633a1.949,1.949,0,0,1,1.947,1.947V350.1a1.949,1.949,0,0,1-1.947,1.947H422a1.95,1.95,0,0,1-1.947-1.947V326.58A1.949,1.949,0,0,1,422,324.633h23.518m0-2H422a3.947,3.947,0,0,0-3.947,3.947V350.1A3.947,3.947,0,0,0,422,354.045h23.518a3.947,3.947,0,0,0,3.947-3.947V326.58a3.947,3.947,0,0,0-3.947-3.947Z" />

        <path d="M441.782,335.587H425.971a1,1,0,1,1,0-2h15.811a1,1,0,0,1,0,2Z" />

        <path d="M441.782,343.493H425.971a1,1,0,1,1,0-2h15.811a1,1,0,0,1,0,2Z" />
      </g>
    </svg>
  );
};
export default ReportSvg;
