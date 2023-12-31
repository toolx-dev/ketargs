type KetargsValue = string | number | boolean | Array<string | number | boolean> | KetargsNestedObject;
interface KetargsNestedObject {
  [key: string]: KetargsValue;
}

function ketargs(obj: KetargsNestedObject): string[] {
  let args: string[] = [];

  function transformObject(obj: { [x: string]: any }, prefix = '', prekey?: string): string[] {
    let result = [];

    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        const currentKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            

          result.push(...transformObject(value, currentKey));
        } else {
          result.push(`${currentKey}=${value}`);
        }
      }
    }

    return result;
  }

  const addArgs = (key: string, value: KetargsValue) => {
    const _key = (key.length > 2) ? `--${key}` : `-${key}`;
    if (Array.isArray(value)) {
      args.push(_key);
      value.forEach(val => args.push(val.toString()));
    } else if (typeof value === 'object' && value !== null) {
       args.push(_key, ...transformObject(value));
    } else {
      args.push(_key, value.toString());
    }
  };

  Object.entries(obj).forEach(([key, value]) => {
    addArgs(key, value);
  });

  return args;
}

export default ketargs;
