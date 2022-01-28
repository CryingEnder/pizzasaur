import React from "react";

function AngleDown({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12,17.169a4.985,4.985,0,0,1-3.536-1.462L.293,7.535A1,1,0,0,1,1.707,6.121l8.171,8.172a3.005,3.005,0,0,0,4.244,0l8.171-8.172a1,1,0,1,1,1.414,1.414l-8.171,8.172A4.985,4.985,0,0,1,12,17.169Z" />
    </svg>
  );
}

function ArrowLeft({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z" />
    </svg>
  );
}

function ArrowRight({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M13.121,6.293a1,1,0,0,0,0,1.414L16.413,11,6,11.007a1,1,0,1,0,0,2L16.414,13l-3.293,3.293a1,1,0,1,0,1.414,1.414l3.586-3.585a3,3,0,0,0,0-4.243L14.535,6.293A1,1,0,0,0,13.121,6.293Z" />
    </svg>
  );
}

function AngleSmallLeft({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10.6,12.707a1,1,0,0,1,0-1.414l4.585-4.586a1,1,0,0,0-1.414-1.414L9.189,9.879a3,3,0,0,0,0,4.242l4.586,4.586a1,1,0,0,0,1.414-1.414Z" />
    </svg>
  );
}

function AngleSmallRight({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.4,9.879,10.811,5.293A1,1,0,0,0,9.4,6.707l4.586,4.586a1,1,0,0,1,0,1.414L9.4,17.293a1,1,0,0,0,1.415,1.414L15.4,14.121A3,3,0,0,0,15.4,9.879Z" />
    </svg>
  );
}

function CartIcon({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
      <circle cx="7" cy="22" r="2" />
      <circle cx="17" cy="22" r="2" />
    </svg>
  );
}

function CartAdd({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="7" cy="22" r="2" />
      <circle cx="17" cy="22" r="2" />
      <path d="M23,3H21V1a1,1,0,0,0-2,0V3H17a1,1,0,0,0,0,2h2V7a1,1,0,0,0,2,0V5h2a1,1,0,0,0,0-2Z" />
      <path d="M21.771,9.726a.994.994,0,0,0-1.162.806A3,3,0,0,1,17.657,13H5.418l-.94-8H13a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.112A1,1,0,0,0,21.771,9.726Z" />
    </svg>
  );
}

function Cross({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
    </svg>
  );
}

function MenuButton({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="2" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="22" r="2" />
    </svg>
  );
}

function Facebook({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M255.2,7.8c46.2,0.5,87.8,11.9,125.1,34c36.8,21.7,67.4,52.5,88.9,89.4c22,37.5,33.3,79.4,33.8,125.8
  c-1.3,63.5-21.3,117.8-60.1,162.8c-38.8,45-88.4,72.8-139.8,83.5V325.2h48.6l11-70H289v-45.8c-0.4-9.5,2.6-18.8,8.5-26.3
  c5.9-7.5,16.2-11.4,31.1-11.8H373v-61.3c-0.6-0.2-6.7-1-18.1-2.4c-13-1.5-26.1-2.3-39.2-2.4c-29.6,0.1-53,8.5-70.3,25.1
  c-17.2,16.6-26,40.5-26.4,71.9v53.2h-56v70h56v178.1c-63.1-10.7-112.8-38.5-151.5-83.5S8.7,320.6,7.4,257.1
  c0.5-46.4,11.8-88.4,33.8-125.8c21.5-36.9,52.1-67.7,88.9-89.4C167.3,19.6,209,8.3,255.2,7.8L255.2,7.8z"
      />
    </svg>
  );
}

function Instagram({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256,200c34.6,0,62.7,27.6,62.7,61.7c0,34.1-28.1,61.7-62.7,61.7s-62.7-27.6-62.7-61.7
	C193.3,227.6,221.4,200,256,200z M256,175.3c-48.5,0-87.8,38.7-87.8,86.4c0,47.7,39.3,86.4,87.8,86.4s87.8-38.7,87.8-86.4
	C343.8,214,304.5,175.3,256,175.3L256,175.3z M346.5,154.6c-13.6,0.2-24.5,11.4-24.3,25.1c0.2,13.6,11.4,24.5,25.1,24.3
	c13.5-0.2,24.3-11.2,24.3-24.7C371.4,165.5,360.2,154.5,346.5,154.6z M194.7,127.7h122.5c39.9,0,72.2,31.8,72.2,71v126
	c0,39.2-32.3,71-72.2,71H194.7c-39.9,0-72.2-31.8-72.2-71v-126C122.6,159.5,154.9,127.7,194.7,127.7z M183.2,103.1
	c-47.4,0-85.8,37.8-85.8,84.4v148.3c0,46.6,38.4,84.4,85.8,84.4h145.6c47.4,0,85.8-37.8,85.8-84.4V187.6c0-46.6-38.4-84.4-85.8-84.4
	L183.2,103.1z M256,13.9c136.9,0,247.8,110.9,247.8,247.8c0,136.9-110.9,247.8-247.8,247.8S8.2,398.6,8.2,261.7
	C8.2,124.9,119.1,13.9,256,13.9L256,13.9z"
      />
    </svg>
  );
}

function Twitter({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256,13.9C118.3,13.9,8.2,124.1,8.2,261.7c0,137.7,110.1,247.8,247.8,247.8s247.8-110.1,247.8-247.8
	C503.8,124.1,393.7,13.9,256,13.9L256,13.9z M444.1,250.3c-9.2,13.8-25.2,18.4-45.9,18.4c-2.3,16.1-9.2,32.1-22.9,50.5
	c-27.5,32.1-59.7,55.1-98.7,66.5h-2.3c-39,9.2-80.3,9.2-121.6-4.6c-34.4-11.5-62-34.4-84.9-64.2c22.9,18.4,41.3,25.2,59.7,27.5V342
	c32.1,2.3,57.4-6.9,78-27.5v-2.3c-11.5,2.3-20.6-2.3-25.2-9.2c-2.3-6.9,0-11.5,4.6-13.8c1.8-4.1,5.1-7.4,9.2-9.2
	c-20.6,2.3-36.7-6.9-45.9-22.9c6.9-6.9,16.1-9.2,25.2-9.2c-25.2-6.9-39-20.7-41.3-39c6.9,0,13.8-2.3,20.6-2.3
	c-18.4-11.5-29.8-27.5-29.8-45.9c19.1,4.9,37.5,11.8,55.1,20.7c16.1,6.9,32.1,13.8,43.6,22.9c11.5,4.6,18.4,11.5,27.5,20.7v-2.3
	c6.9-18.4,13.8-36.7,27.5-55.1c4.6-6.9,9.2-16.1,18.4-22.9c2.3-4.6,6.9-6.9,11.5-11.5c2.3,2.3,0,4.6-4.6,11.5
	c11.5-9.2,20.6-13.8,29.8-13.8c2.3,2.3-2.3,6.9-11.5,11.5c6.9-2.3,16.1-4.6,25.2-4.6c2.3,0,4.6,2.3,2.3,4.6
	c-2.3,4.6-11.5,9.2-29.8,11.5v2.3c18.4,0,36.7,4.6,50.5,18.4c14.6,14.5,24.9,32.8,29.8,52.8c13.8,4.6,27.5,4.6,43.6,0
	c-4.6,11.5-16.1,16.1-39,18.4v2.3C423.5,252.6,437.3,252.6,444.1,250.3L444.1,250.3z"
      />
    </svg>
  );
}

function Phone({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
      <path d="m53.8110352 43.7785034c-.2999878-1.4299927-1.2399902-2.7099609-2.5900269-3.5099487-2.5-1.4700317-5.0899658-2.8900146-7.5899658-4.2600098l-1.710022-.9400024c-2.1799927-1.1900024-3.6699829-.9700317-4.539978-.5700073-.8300171.3800049-1.9199829 1.289978-2.3900146 3.4799805-.0100098.0300293-.0200195.0700073-.0200195.1099854-.1499634.5700073-.5700073.8000488-.8099976.8900146-.5499878.1900024-1.1999512.0599976-1.7399902-.3599854-4.1699829-3.2800293-7.7799683-6.8800049-11.039978-10.9899902-.4199829-.5200195-.5499878-1.1600342-.3500366-1.710022.0900269-.25.3400269-.7000122 1.0400391-.8499756.0299683-.0100098.0700073-.0100098.0999756-.0200195 2.2200317-.4899902 3.1000366-1.6300049 3.460022-2.5.3900146-.9799805.5199585-2.6599731-1.0900269-5.0800171-1.2099609-1.8099976-2.2199707-3.789978-3.2000122-5.7099609-.4499512-.8699951-.8899536-1.7399902-1.3499756-2.6000366-.9199831-1.7000123-2.1500246-2.7600099-3.549988-3.0700074-1.2700195-.2699585-2.6099854.0900269-3.8800049 1.0500488-1.2600097.9599609-2.5900268 2.0199585-3.8499755 3.2399902-2.710022 2.6400146-3.3300171 5.9799805-1.7900391 9.6499634 6.5300293 15.6300049 17.7800293 26.8000488 33.4500122 33.210022 1.2199707.5100098 2.4199829.7600098 3.5599976.7600098 2.0599976 0 3.9500122-.8200073 5.5900269-2.4400024 1.3299561-1.3099976 2.5-2.8200073 3.5-4.1500244.7699584-1.0499879 1.0499877-2.3399659.789978-3.630005z" />
    </svg>
  );
}

function Pizza({ ...props }) {
  return (
    <svg {...props} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m59.858 40.2a48.022 48.022 0 0 0 -12.792-23.265 48.019 48.019 0 0 0 -23.266-12.792 5.661 5.661 0 0 0 -6.85 4.757 5.472 5.472 0 0 0 4.2 6.142 35.988 35.988 0 0 1 27.805 27.808 5.485 5.485 0 0 0 6.143 4.2 5.663 5.663 0 0 0 4.76-6.852z" />
        <circle cx="28" cy="25" r="1" />
        <path d="m36 42a4.972 4.972 0 0 0 -3.825 8.182l8.79-3.534a4.993 4.993 0 0 0 -4.965-4.648z" />
        <circle cx="19" cy="44" r="2" />
        <path d="m19.536 33.536a5.006 5.006 0 0 0 0-7.071 4.954 4.954 0 0 0 -3-1.411l-3.575 8.892a4.992 4.992 0 0 0 6.575-.41z" />
        <circle cx="34" cy="35" r="1" />
        <path d="m20.712 17a7.547 7.547 0 0 1 -.833-.243l-2.563 6.375a7 7 0 1 1 -5.124 12.744l-7.919 19.7a3.223 3.223 0 0 0 .615 3.546 3.233 3.233 0 0 0 3.545.615l21.8-8.766a6.995 6.995 0 1 1 12.667-5.102l4.365-1.755a7.763 7.763 0 0 1 -.265-.825 34.031 34.031 0 0 0 -26.288-26.289zm-1.712 31a4 4 0 1 1 4-4 4 4 0 0 1 -4 4zm9-20a3 3 0 1 1 3-3 3 3 0 0 1 -3 3zm6 10a3 3 0 1 1 3-3 3 3 0 0 1 -3 3z" />
      </g>
    </svg>
  );
}

function Dessert({ ...props }) {
  return (
    <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          id="XMLID_192_"
          d="m229.01 449.511h-25.7c-6.233 0-11.304 5.071-11.304 11.305s5.071 11.305 11.304 11.305h104.051c6.233 0 11.304-5.071 11.304-11.305s-5.071-11.305-11.304-11.305h-25.699z"
        />
        <path
          id="XMLID_193_"
          d="m269.796 132.568c14.041-7.989 29.872-12.183 46.194-12.183 22.11 0 42.449 7.712 58.481 20.581.056-1.337.096-2.673.096-4.003 0-53.532-43.552-97.083-97.084-97.083-36.622 0-70.111 20.908-86.522 53.027 31.772 1.32 60.018 16.509 78.835 39.661z"
        />
        <path
          id="XMLID_194_"
          d="m270.272 238.995c5.675-12.19 8.549-25.228 8.549-38.818 0-50.934-41.438-92.372-92.372-92.372-2.007 0-3.996.072-5.972.198-.352.051-.71.068-1.07.068-47.658 3.609-85.331 43.541-85.331 92.106 0 13.591 2.874 26.628 8.55 38.818z"
        />
        <path
          id="XMLID_195_"
          d="m315.99 135.385c-13.22 0-26.047 3.285-37.515 9.532 9.737 16.154 15.346 35.064 15.346 55.261 0 13.267-2.501 26.484-7.278 38.818h103.923c2.714-8.056 4.106-16.45 4.106-25.029.001-43.331-35.251-78.582-78.582-78.582z"
        />
        <path
          id="XMLID_220_"
          d="m395.691 253.997c-.014 0-.027-.002-.041-.002h-120.724-176.954-26.677c9.533 16.51 21.371 31.458 35.006 44.548h300.755c14.876-13.991 26.407-29.289 33.648-44.548h-44.988c-.008 0-.016.002-.025.002z"
        />
        <path
          id="XMLID_222_"
          d="m255.336 358.092c8.539 0 16.953-.514 25.211-1.477.169-.025.338-.048.51-.061 41.539-4.941 79.048-21.412 108.059-43.01h-265.355c36.741 28.214 83.044 44.548 131.575 44.548z"
        />
        <path
          id="XMLID_249_"
          d="m255.336 373.092c-6.312 0-12.591-.259-18.826-.756v62.176h37.652v-62.217c-6.282.522-12.565.797-18.826.797z"
        />
      </g>
    </svg>
  );
}

function Drink({ ...props }) {
  return (
    <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="m42.083 26.667-2.083-16.667h-26.668v6.666h20.782l1.25 10h-12.03c4.288 10.313 6.666 21.626 6.666 33.477v4.856c0 4.603 3.73 8.334 8.33 8.334h5l-.002 5.007c0 3.679-2.988 6.667-6.667 6.667l-3.33-.007v5h26.669v-5h-3.333c-3.686 0-6.667-2.981-6.667-6.667v-5h5c4.603 0 8.333-3.731 8.333-8.334v-4.856c0-11.851 2.377-23.164 6.667-33.476z" />
      <path d="m70 10c-7.451 0-13.685 4.922-15.82 11.667h23.318l-2.881 6.921c-1.992 4.788-3.5 9.714-4.549 14.74 9.174-.039 16.6-7.477 16.6-16.661 0-9.206-7.461-16.667-16.668-16.667z" />
    </svg>
  );
}

function QuestionMark({ ...props }) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m12 1a11 11 0 1 0 11 11 11 11 0 0 0 -11-11zm0 18a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1 -1.5 1.5zm1.73-7.52a1.05 1.05 0 0 0 -.73 1v.52a1 1 0 0 1 -2 0v-.51a3.07 3.07 0 0 1 2.09-2.91 1.32 1.32 0 0 0 -.41-2.58h-1.36a1.32 1.32 0 0 0 -1.32 1.32v.68a1 1 0 0 1 -2 0v-.68a3.32 3.32 0 0 1 3.32-3.32h1.36a3.33 3.33 0 0 1 1.05 6.48z" />
      </g>
    </svg>
  );
}

function Decrement({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10
      C22,17.5,17.5,22,12,22z M13,11h3c0.6,0,1,0.4,1,1s-0.4,1-1,1h-3l0,0c0-3,0.6,0,0,0s-0.6,0-2,0l0,0H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h3"
      />
    </svg>
  );
}

function Add({ ...props }) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Zm5-10a1,1,0,0,1-1,1H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3A1,1,0,0,1,17,12Z" />
    </svg>
  );
}

export {
  AngleDown,
  ArrowLeft,
  ArrowRight,
  AngleSmallLeft,
  AngleSmallRight,
  CartIcon,
  CartAdd,
  Cross,
  MenuButton,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Pizza,
  Dessert,
  Drink,
  QuestionMark,
  Add,
  Decrement,
};
