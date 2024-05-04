import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, includeRelative = false): string {
  let currentDate = new Date();

  let yearsAgo = currentDate.getFullYear() - date.getFullYear();
  let monthsAgo = currentDate.getMonth() - date.getMonth();
  let daysAgo = currentDate.getDate() - date.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}年前`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}个月前`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}天前`;
  } else {
    formattedDate = "今天";
  }

  let fullDate = date.toLocaleString("zh-cn", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

export function generateOTP(digits = 6): string {
  let code = "";
  for (let index = 0; index < digits; index++) {
    code += Math.round(Math.random() * 10).toString();
  }
  return code;
}
