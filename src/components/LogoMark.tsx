type Props = { size?: number; color?: string };

export default function LogoMark({ size = 28, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="2" />
      <circle cx="13" cy="24" r="3.6" fill={color} />
      <circle cx="22" cy="20" r="2.4" fill={color} />
      <circle cx="29" cy="16" r="1.6" fill={color} />
    </svg>
  );
}
