import { cn } from "@/lib/utils";

export default function RoundedCornerImage({
  className,
}: {
  className: string;
}) {
  return (
    <svg
      className={cn("absolute text-background", className)}
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="currentColor"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V35L35 35C15.6701 35 0 19.33 0 0Z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
