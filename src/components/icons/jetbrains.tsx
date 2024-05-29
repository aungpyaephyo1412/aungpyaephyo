import type { SVGProps } from 'react';
const JetBrains = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    width='1em'
    height='1em'
    {...props}
  >
    <path d='M0 0h256v256H0z' />
    <path
      d='M28 208h96v16H28v-16ZM24 66l7-7c1 2 4 4 6 4 3 0 5-2 5-6V32h11v25c0 5-1 9-4 12-3 2-6 4-10 4h-1c-5 0-10-2-14-6v-1Zm34-34h32v9H69v7h19v8H69v6h21v10H58V32Zm48 10H94V32h35v10h-12v30h-11V42ZM28 88h19c4-1 8 1 11 3 2 2 3 4 3 7 0 4-3 7-7 9 5 1 8 5 8 10 0 7-5 11-15 11H28V88Zm22 12c0-2-2-3-5-3h-6v7h5c4 0 6-1 6-4Zm-4 11h-7v8h7c3 0 5-1 5-4 0-2-1-3-4-3l-1-1Zm43 17-8-12h-4v12H66V88h18c4-1 9 1 13 4 2 2 3 5 3 9 0 6-3 11-8 13l8 11 16-37h10l17 40h-12l-2-7h-16l-3 7H89Zm32-27-5 11h9l-4-11Zm-38-4h-6v10h6c4 0 6-2 6-5s-2-5-6-5Zm62-9h11v40h-11V88Zm15 0h11l14 21V88h11v40h-10l-15-22v22h-11V88Zm38 34 6-8c4 3 8 5 13 5 3 0 4-1 4-3 0-1 0-2-3-3h-3l-1-1h-2l-2-1c-6-1-10-4-10-11s5-13 15-13c6 0 12 2 16 6l-5 7c-3-2-7-4-11-4-3 0-4 1-4 3l3 3h2l2 1c9 2 15 5 15 12 0 8-6 13-15 13h-1c-7 0-13-2-18-5l-1-1Z'
      fill='#FFF'
    />
  </svg>
);
export default JetBrains;
