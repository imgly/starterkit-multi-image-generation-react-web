/**
 * CE.SDK Multi-Image Generation - Shared Types
 *
 * Common type definitions used across the imgly module.
 */

/**
 * RGBA color type used by CE.SDK engine.
 */
export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

/**
 * Options for editor initialization functions.
 */
export interface EditorInitOptions {
  /** Title displayed in the navigation bar */
  title: string;
  /** Callback when back button is clicked */
  onBack: () => void;
  /** Callback when save action is triggered */
  onSave: (sceneString: string) => void;
}
