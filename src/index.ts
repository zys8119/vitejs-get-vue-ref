import { Plugin } from 'vite';
export const getVueRefPlugin = (): Plugin => {
    return {
        name: '$refs',
        transform: (code) => {
            function getVueRef(refName: any) {
                return __getVueRefvm__.refs[refName];
            }
            if (/getVueRef/.test(code)) {
                return `${code.replace(/(setup\(.*)/, '$1\n const __getVueRefvm__ = getCurrentInstance();\n' + getVueRef.toString())}`;
            }
        }
    };
};
export default getVueRefPlugin;
