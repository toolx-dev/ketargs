type KetargsValue = string | number | boolean | Array<string | number | boolean> | KetargsNestedObject;
interface KetargsNestedObject {
    [key: string]: KetargsValue;
}
declare function ketargs(obj: KetargsNestedObject): string[];
export default ketargs;
