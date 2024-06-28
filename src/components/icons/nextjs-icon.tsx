import { IconProps } from '@/types/icon-props'

export default function NextjsIcon({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_700_1497)">
        <path
          d="M83.0586 87.5117L38.4141 30H30V69.9844H36.7305V38.5469L77.7773 91.582C79.6289 90.3398 81.3945 88.9805 83.0586 87.5117Z"
          fill="url(#paint0_linear_700_1497)"
        />
        <path
          d="M70.5586 30H63.8906V70H70.5586V30Z"
          fill="url(#paint1_linear_700_1497)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_700_1497"
          x1="51.8388"
          y1="70.9224"
          x2="69.5609"
          y2="92.8868"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_700_1497"
          x1="67.2199"
          y1="29.9887"
          x2="67.0999"
          y2="59.3643"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_700_1497">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
