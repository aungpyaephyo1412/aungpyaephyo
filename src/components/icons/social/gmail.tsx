import type { SVGProps } from 'react';
const Gmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='256'
    height='256'
    viewBox='0 0 256 256'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='256' height='256' rx='60' />
    <path
      d='M41.6364 203.028H73.4545V125.755L28 91.6646V189.392C28 196.937 34.1136 203.028 41.6364 203.028Z'
      fill='#4285F4'
    />
    <path
      d='M182.545 203.028H214.364C221.909 203.028 228 196.915 228 189.392V91.6646L182.545 125.755'
      fill='#34A853'
    />
    <path
      d='M182.545 66.6643V125.755L228 91.6643V73.4825C228 56.6189 208.75 47.0052 195.273 57.1189'
      fill='#FBBC04'
    />
    <path
      d='M73.4545 125.755V66.6646L128 107.574L182.545 66.6646V125.755L128 166.665'
      fill='#EA4335'
    />
    <path
      d='M28 73.4825V91.6643L73.4545 125.755V66.6643L60.7273 57.1189C47.2273 47.0052 28 56.6189 28 73.4825Z'
      fill='#C5221F'
    />
  </svg>
);
export default Gmail;
