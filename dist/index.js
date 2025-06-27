"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVueRefPlugin = void 0;
const getVueRefPlugin = () => {
    return {
        name: '$refs',
        transform: (code) => {
            function getVueRef(refName) {
                return __getVueRefvm__.refs[refName];
            }
            if (/getVueRef/.test(code)) {
                return `${code.replace(/(setup\(.*)/, '$1\n const __getVueRefvm__ = getCurrentInstance();\n' + getVueRef.toString())}`;
            }
        }
    };
};
exports.getVueRefPlugin = getVueRefPlugin;
exports.default = exports.getVueRefPlugin;
