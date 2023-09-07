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
      <path
        d="M22 22L2 22"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 22V9.5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 9.5V13.5M20 22V17.5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  );
};
export default HomeSvg;
