export default function get(
  obj: any,
  path: string | string[],
  defValue?: any,
): any {
  if (!path) return undefined;
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
  const result = pathArray?.reduce(
    (prevObj, key) => prevObj && prevObj[key],
    obj,
  );
  return result === undefined ? defValue : result;
}
