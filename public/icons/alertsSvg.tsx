const AlertSvg = ({
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
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d="M765 100H233q-36 0-66.5 18T118 166.5 100 233v532q0 36 18 67t48.5 48.5T233 898h532q36 0 67-17.5t48.5-48.5 17.5-67V233q0-36-18-66.5T831.5 118 765 100zM585 768q0 22-16 37.5T530 821h-62q-23 0-39-15.5T413 768v-54q0-21 16.5-36.5T468 662h62q23 0 39 15.5t16 36.5v54zm-14-220q-1 22-15 37.5T520 601h-42q-22 0-36-15.5T427 548l-18-302q-1-21 17-37t41-16h64q23 0 41 16t18 37z" />
    </svg>
  );
};
export default AlertSvg;
