declare global {
  const __getVueRefvm__: any;
  function getVueRef(refName: any): any;
}
export {};
import { Plugin } from "vite";
export declare const getVueRefPlugin: () => Plugin;
export default getVueRefPlugin;
