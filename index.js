import {HarmonyPlatform} from './harmonyPlatform.js';
import HarmonyConst from './harmonyConst.js';

export default function (api) {
  api.registerPlatform(HarmonyConst.PLATFORM_NAME, HarmonyPlatform);
}
