import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  let currentDate = new Date();

  let yearsAgo = currentDate.getFullYear() - date.getFullYear();
  let monthsAgo = currentDate.getMonth() - date.getMonth();
  let daysAgo = currentDate.getDate() - date.getDate();

  let fullDate = date.toLocaleString("zh-cn", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  if (yearsAgo > 0 || monthsAgo > 0) {
    return fullDate;
  }

  if (daysAgo > 0) {
    return `${daysAgo}天前`;
  } else {
    return "今天";
  }
}

export function generateOTP(digits = 6): string {
  let code = "";
  for (let index = 0; index < digits; index++) {
    code += Math.round(Math.random() * 10).toString();
  }
  return code;
}
