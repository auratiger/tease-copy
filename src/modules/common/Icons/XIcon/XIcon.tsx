import React from 'react';

const XIcon = React.forwardRef<SVGSVGElement, JSX.IntrinsicElements['svg']>(
   (props, ref) => (
      <button>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
            ref={ref}
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M6 18L18 6M6 6l12 12"
            />
         </svg>
      </button>
   )
);

XIcon.displayName = 'XIcon';

export default XIcon;
