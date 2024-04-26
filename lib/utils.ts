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
