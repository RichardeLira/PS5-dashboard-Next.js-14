import { IconProps } from '@/types/icon-props'

export default function TailwindIcon({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 20C36.6667 20 28.3333 26.6667 25 40C30 33.3333 35.8333 30.8333 42.5 32.5C46.3037 33.4509 49.0224 36.2104 52.0317 39.265C56.9339 44.2409 62.6076 50 75 50C88.3333 50 96.6667 43.3333 100 30C95 36.6667 89.1667 39.1667 82.5 37.5C78.6963 36.5491 75.9776 33.7896 72.9683 30.735C68.0661 25.7591 62.3924 20 50 20ZM25 50C11.6667 50 3.33333 56.6667 0 70C5 63.3333 10.8333 60.8333 17.5 62.5C21.3037 63.4509 24.0224 66.2104 27.0317 69.265C31.9339 74.2409 37.6076 80 50 80C63.3333 80 71.6667 73.3333 75 60C70 66.6667 64.1667 69.1667 57.5 67.5C53.6963 66.5491 50.9776 63.7896 47.9683 60.735C43.0661 55.7591 37.3924 50 25 50Z"
        fill="url(#paint0_linear_700_1503)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_700_1503"
          x1="-277.778"
          y1="1940"
          x2="8358.86"
          y2="6919.68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2298BD" />
          <stop offset="1" stop-color="#0ED7B5" />
        </linearGradient>
      </defs>
    </svg>
  )
}
