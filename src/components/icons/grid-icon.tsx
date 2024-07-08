import { IconProps } from '@/types/icon-props'

export default function Gridicon({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.5 0.5H3.5C2.70435 0.5 1.94129 0.81607 1.37868 1.37868C0.81607 1.94129 0.5 2.70435 0.5 3.5V30.5C0.5 31.2956 0.81607 32.0587 1.37868 32.6213C1.94129 33.1839 2.70435 33.5 3.5 33.5H30.5C31.2956 33.5 32.0587 33.1839 32.6213 32.6213C33.1839 32.0587 33.5 31.2956 33.5 30.5V3.5C33.5 2.70435 33.1839 1.94129 32.6213 1.37868C32.0587 0.81607 31.2956 0.5 30.5 0.5ZM30.5 15.5H18.5V3.5H30.5V15.5ZM15.5 3.5V15.5H3.5V3.5H15.5ZM3.5 18.5H15.5V30.5H3.5V18.5ZM30.5 30.5H18.5V18.5H30.5V30.5Z"
        fill="#C9C9C9"
      />
    </svg>
  )
}