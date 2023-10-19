const CarRentSvg = ({
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
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        d="M18 0C13.570313 0 10 3.570313 10 8C10 12.429688 13.570313 16 18 16C20.964844 16 23.523438 14.386719 24.90625 12L37 12C37.265625 12.007813 37.527344 11.90625 37.71875 11.71875L39.71875 9.71875C39.90625 9.527344 40.007813 9.265625 40 9L40 7C40.007813 6.734375 39.90625 6.472656 39.71875 6.28125L37.71875 4.28125C37.527344 4.09375 37.265625 3.992188 37 4L35 4C34.734375 3.992188 34.472656 4.09375 34.28125 4.28125L33.5 5.0625L32.71875 4.28125C32.527344 4.09375 32.265625 3.992188 32 4L30 4C29.800781 3.996094 29.605469 4.050781 29.4375 4.15625L28.5 4.78125L27.5625 4.15625C27.394531 4.050781 27.199219 3.996094 27 4L24.90625 4C23.523438 1.613281 20.964844 0 18 0 Z M 18 2C21.371094 2 24 4.628906 24 8C24 11.371094 21.371094 14 18 14C14.628906 14 12 11.371094 12 8C12 4.628906 14.628906 2 18 2 Z M 16 6C14.894531 6 14 6.894531 14 8C14 9.105469 14.894531 10 16 10C17.105469 10 18 9.105469 18 8C18 6.894531 17.105469 6 16 6 Z M 25.75 6L26.6875 6L27.9375 6.84375C28.277344 7.074219 28.722656 7.074219 29.0625 6.84375L30.3125 6L31.5625 6L32.78125 7.21875C32.96875 7.414063 33.230469 7.523438 33.5 7.523438C33.769531 7.523438 34.03125 7.414063 34.21875 7.21875L35.4375 6L36.5625 6L38 7.4375L38 8.5625L36.5625 10L25.75 10C25.914063 9.359375 26 8.691406 26 8C26 7.308594 25.914063 6.640625 25.75 6 Z M 15.6875 18C13.6875 18 11.859375 19.226563 11.09375 21.09375C11.089844 21.109375 11.066406 21.109375 11.0625 21.125L8.125 28L7 28C5.355469 28 4 29.355469 4 31C4 32.644531 5.355469 34 7 34L7 47C7 48.644531 8.355469 50 10 50L13 50C14.644531 50 16 48.644531 16 47L16 46L34 46L34 47C34 48.644531 35.355469 50 37 50L40 50C41.644531 50 43 48.644531 43 47L43 34C44.644531 34 46 32.644531 46 31C46 29.355469 44.644531 28 43 28L41.875 28L38.9375 21.125C38.933594 21.109375 38.910156 21.109375 38.90625 21.09375C38.140625 19.226563 36.3125 18 34.3125 18 Z M 15.6875 20L34.3125 20C35.496094 20 36.617188 20.765625 37.0625 21.875L37.09375 21.90625L39.90625 28.5L38.9375 29.15625L38.9375 29.1875C38.109375 29.765625 37.222656 30 36.1875 30L13.8125 30C12.777344 30 11.890625 29.765625 11.0625 29.1875L11.0625 29.15625L10.09375 28.5L12.90625 21.90625L12.9375 21.875C13.382813 20.765625 14.503906 20 15.6875 20 Z M 7 30L8.6875 30L9.9375 30.84375L9.9375 30.8125L9.96875 30.8125C11.136719 31.621094 12.457031 32 13.8125 32L36.1875 32C37.542969 32 38.863281 31.621094 40.03125 30.8125C40.039063 30.808594 40.054688 30.816406 40.0625 30.8125L40.0625 30.84375L41.3125 30L43 30C43.554688 30 44 30.445313 44 31C44 31.554688 43.554688 32 43 32L41 32L41 44L9 44L9 32L7 32C6.445313 32 6 31.554688 6 31C6 30.445313 6.445313 30 7 30 Z M 14.5 35C12.578125 35 11 36.578125 11 38.5C11 40.421875 12.578125 42 14.5 42C16.421875 42 18 40.421875 18 38.5C18 36.578125 16.421875 35 14.5 35 Z M 35.5 35C33.578125 35 32 36.578125 32 38.5C32 40.421875 33.578125 42 35.5 42C37.421875 42 39 40.421875 39 38.5C39 36.578125 37.421875 35 35.5 35 Z M 14.5 37C15.375 37 16 37.625 16 38.5C16 39.375 15.375 40 14.5 40C13.625 40 13 39.375 13 38.5C13 37.625 13.625 37 14.5 37 Z M 35.5 37C36.375 37 37 37.625 37 38.5C37 39.375 36.375 40 35.5 40C34.625 40 34 39.375 34 38.5C34 37.625 34.625 37 35.5 37 Z M 9 46L14 46L14 47C14 47.554688 13.554688 48 13 48L10 48C9.445313 48 9 47.554688 9 47 Z M 36 46L41 46L41 47C41 47.554688 40.554688 48 40 48L37 48C36.445313 48 36 47.554688 36 47Z"
        stroke={fill}
      />
    </svg>
  );
};
export default CarRentSvg;
