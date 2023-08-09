const HondaSvg = ({
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
        xmlns="http://www.w3.org/2000/svg"
        d="M23.903 6.87c-.329-3.219-2.47-3.896-4.354-4.205-.946-.16-2.63-.299-3.716-.339-.946-.06-3.168-.09-3.835-.09-.658 0-2.89.03-3.836.09-1.076.04-2.77.18-3.716.339C2.563 2.984.42 3.66.092 6.869c-.08.877-.1 2.023-.09 3.248.03 2.032.2 3.407.3 4.364.069.657.338 2.62.687 3.636.478 1.395.916 1.803 1.424 2.222.937.757 2.471.996 2.79 1.056 1.733.309 5.24.368 6.785.368 1.544 0 5.05-.05 6.784-.368.329-.06 1.863-.29 2.79-1.056.508-.419.946-.827 1.424-2.222.35-1.016.628-2.979.698-3.636.1-.957.279-2.332.299-4.364.04-1.225.01-2.371-.08-3.248m-1.176 5.4c-.189 2.57-.418 4.105-.747 5.22-.289.977-.637 1.624-1.165 2.093-.867.787-2.063.956-2.76 1.056-1.514.229-4.055.299-6.057.299-2.003 0-4.544-.08-6.058-.3-.697-.099-1.893-.268-2.76-1.055-.518-.469-.876-1.126-1.155-2.093-.329-1.105-.558-2.65-.747-5.22-.11-1.544-.09-4.055.08-5.4.258-2.012 1.255-3.019 3.387-3.397.996-.18 2.34-.309 3.606-.369 1.016-.07 2.7-.1 3.637-.09.936-.01 2.62.03 3.636.09 1.275.06 2.61.19 3.606.369 2.142.378 3.139 1.395 3.388 3.397.199 1.345.229 3.856.11 5.4M17.526 3.88c-.548 2.461-.767 3.587-1.216 5.37-.428 1.714-.767 3.298-1.335 4.065-.587.777-1.365.947-1.893 1.006-.279.03-.478.04-1.066.05-.597 0-.797-.02-1.076-.05-.528-.06-1.315-.229-1.892-1.006-.578-.767-.907-2.351-1.335-4.065-.469-1.773-.678-2.909-1.236-5.37 0 0-.548.02-.797.04-.329.02-.588.05-.867.09 0 0 .32 5.061.459 7.203.15 2.252.418 6.057.667 8.927 0 0 .458.07 1.226.12.807.049 1.165.049 1.165.049.329-1.265.747-3.019 1.206-3.766.378-.608.966-.677 1.295-.717.518-.07.956-.08 1.166-.08.199-.01.637 0 1.165.08.329.05.917.11 1.295.717.469.747.877 2.5 1.206 3.766 0 0 .358-.01 1.165-.05a11.35 11.35 0 001.226-.12c.249-2.869.518-6.665.667-8.926.14-2.142.459-7.203.459-7.203-.28-.04-.538-.07-.867-.09-.23-.02-.787-.04-.787-.04Z"
      />
    </svg>
  );
};
export default HondaSvg;
