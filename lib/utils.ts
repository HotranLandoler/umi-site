export function styleOnCondition(
  className: string,
  condition: boolean,
): string {
  return condition ? className : "";
}

export function mergeOnCondition(...classNames: string[]): string {
  return classNames.filter(Boolean).join(" ");
}
