// allows us to specify --noEmitHelpers within our tsconfig.json
// this skips emitting helpers in every file, we just load them once here
import 'ts-helpers';

// Export all classes (named and default) that you want to be publicly available
// in the browser as named exports here.
// Interfaces should be ignored, as they don't export any code.
import { default as _export } from './lib/ScrollTracker';

export { default as ScrollTrackerEvent } from './lib/event/ScrollTrackerEvent';
export { default as ScrollTrackerPoint } from './lib/ScrollTrackerPoint';
export { default as Axis } from './lib/enum/Axis';
export { default as Side } from './lib/enum/Side';

export default _export;
