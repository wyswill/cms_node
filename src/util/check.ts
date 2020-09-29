/*
 * @LastEditors: wyswill
 * @Description: 对比对象中的属性是否存在
 * @Date: 2020-09-29 11:43:27
 * @LastEditTime: 2020-09-29 11:51:28
 */
export function check(obj: object, arrts: string[]): boolean {
  if (!arrts.length || Object.keys(arrts).length != arrts.length) return false;
  return arrts.every((ele: string) => Reflect.has(obj, ele));
}