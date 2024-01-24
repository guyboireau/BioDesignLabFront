import Link from "next/link";

const Menu = ({title, link}: {title: string, link: string}) => {

    return (
        <Link href={link} className="group">
        <svg width="94" height="58" viewBox="0 0 94 58" fill="none">
          <g clipPath="url(#clip0_249_365)">
            <path className="invisible group-hover:visible group-active:visible" d="M81.2365 47.4795L50.9402 56.3696C50.9402 56.3696 41.0612 60.27 28.1489 54.465C21.4589 51.4572 12.8484 47.6481 12.8484 47.6481C12.8484 47.6481 4.25915 44.6894 1.76458 34.0916C-0.729995 23.5008 -0.722908 18.8273 8.61756 13.7182C17.9651 8.61601 29.3608 2.2067 29.3608 2.2067C29.3608 2.2067 35.6893 -2.24889 47.9921 2.65648C60.2949 7.56185 80.2869 16.2833 80.2869 16.2833C80.2869 16.2833 86.0769 18.4759 91.392 29.5306C96.5158 40.1917 92.8164 44.2537 81.2365 47.4724V47.4795Z" stroke="#76E581" strokeMiterlimit="10"/>
              <text className="group-hover:fill-light-green" x="12" y="35" fill="white">{title}</text>
          </g>
          <defs>
            <clipPath id="clip0_249_365">
              <rect width="94" height="58" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </Link>
    );
  };
  export default Menu;