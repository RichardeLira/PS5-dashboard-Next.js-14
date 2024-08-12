import { IconProps } from '@/types/icon-props'
import { Button } from '../ui/button'

export default function PrismaIcon({ size }: IconProps) {
  return (
    <Button className="w-[100px] h-[100px] rounded-2xl bg-gradient-to-r from-[#5A67D8] to-[#303672] flex justify-center items-center transform transition-transform duration-300 hover:-translate-y-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_700_1506)">
          <path
            d="M90.7456 75.9738L56.4515 3.14512C55.5834 1.31915 53.784 0.116095 51.7649 0.0116079C49.7411 -0.123989 47.8099 0.877183 46.7543 2.60916L9.55843 62.8539C8.4037 64.711 8.428 67.0686 9.62075 68.9016L27.8061 97.0633C29.2191 99.2344 31.8919 100.217 34.3748 99.4789L87.1485 83.8687C88.7562 83.3986 90.0811 82.2546 90.7805 80.7326C91.4705 79.218 91.4586 77.4764 90.7481 75.9713L90.7456 75.9738ZM83.0677 79.0973L38.2861 92.3394C36.92 92.7457 35.6087 91.5616 35.8929 90.183L51.892 13.5752C52.1912 12.1418 54.1705 11.915 54.7962 13.2412L84.4138 76.1358C84.6788 76.703 84.682 77.3579 84.4225 77.9276C84.1631 78.4974 83.667 78.9249 83.0652 79.0973H83.0677Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_700_1506">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Button>
  )
}
