function ketargs(obj) {
    let args = [];
    function transformObject(obj, prefix = '', prekey) {
        let result = [];
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                const value = obj[key];
                const currentKey = prefix ? `${prefix}.${key}` : key;
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    result.push(...transformObject(value, currentKey));
                }
                else {
                    result.push(`${currentKey}=${value}`);
                }
            }
        }
        return result;
    }
    const addArgs = (key, value) => {
        const _key = (key.length > 2) ? `--${key}` : `-${key}`;
        if (Array.isArray(value)) {
            args.push(_key);
            value.forEach(val => args.push(val.toString()));
        }
        else if (typeof value === 'object' && value !== null) {
            args.push(_key, ...transformObject(value));
        }
        else {
            if (typeof value === 'boolean') {
                if (value) {
                    args.push(_key);
                }
            }
            else {
                args.push(_key, value.toString());
            }
        }
    };
    Object.entries(obj).forEach(([key, value]) => {
        addArgs(key, value);
    });
    return args;
}
export default ketargs;
