export function styleOnCondition(
  className: string,
  condition: boolean,
): string {
  return condition ? className : "";
}

type NullableString = string | undefined;

export function mergeOnCondition(...classNames: NullableString[]): string {
  return classNames.filter(Boolean).join(" ");
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
