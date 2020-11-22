/**
 * Basic usage (Browser):
 *
 * ```js
[[include:docs/codeExamples/basicUsage.js]]
 * ```

 */ /** */

export {
  createObjectBuffer,
  disposeWrapperObject,
  getUnderlyingArrayBuffer,
  loadObjectBuffer,
  memoryStats,
  replaceUnderlyingArrayBuffer,
  unstable_resizeObjectBuffer,
  updateObjectBufferSettings,
} from "./internal/api";
export type { ObjectBufferSettings } from "./internal/interfaces";
export { acquireLock, acquireLockWait, releaseLock } from "./internal/locks";
