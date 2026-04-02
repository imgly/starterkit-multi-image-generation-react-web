/**
 * Feature Configuration - Enable/Disable Editor Capabilities
 *
 * This file configures which features are available in the advanced design editor.
 * Features control the visibility and availability of UI elements and functionality.
 *
 * ## Feature System Overview
 *
 * - `cesdk.feature.enable(features)` - Enable features with default predicates
 * - `cesdk.feature.disable(features)` - Disable features completely
 * - `cesdk.feature.set(feature, predicate)` - Set custom predicate for conditional availability
 *
 * ## Glob Pattern Support
 *
 * Use glob patterns to enable/disable entire feature groups:
 * - `'ly.img.text.*'` - All text features
 * - `'ly.img.crop.*'` - All crop features
 * - `'ly.img.video.*'` - All video features
 *
 * @see https://img.ly/docs/cesdk/js/user-interface/customization/disable-or-enable-f058e2/
 */

import type CreativeEditorSDK from '@cesdk/cesdk-js';

/**
 * Configure which features are enabled in the advanced design editor.
 *
 * Features are organized by category for easy customization.
 * Uncomment or add features as needed for your use case.
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 */
export function setupFeatures(cesdk: CreativeEditorSDK): void {
  cesdk.feature.enable([
    // ============================================================================
    // NAVIGATION FEATURES
    // Configure the top navigation bar visibility and controls
    // ============================================================================

    // #region Navigation Features
    'ly.img.navigation' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // PLACEHOLDER AUDIO FEATURES
    // Configure audio placeholder functionality
    // ============================================================================

    // #region Placeholder Audio Features
    // 'ly.img.placeholder.audio' /* Audio placeholder */,
    // 'ly.img.placeholder.audio.change' /* Change audio placeholder */,
    // #endregion

    // ============================================================================
    // TEXT FEATURES
    // Configure text editing capabilities
    // ============================================================================

    // #region Text Features
    'ly.img.text' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // CROP FEATURES
    // Configure image and block cropping capabilities
    // ============================================================================

    // #region Crop Features
    'ly.img.crop' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // TRANSFORM FEATURES
    // Configure block position, size, and rotation controls
    // ============================================================================

    // #region Transform Features
    'ly.img.transform' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // EFFECTS FEATURES
    // Configure visual effects and adjustments
    // ============================================================================

    // #region Effects Features
    'ly.img.filter' /* Filter button */,
    'ly.img.adjustment' /* Adjustments button */,
    'ly.img.effect' /* Effect button */,
    'ly.img.blur' /* Blur button */,
    'ly.img.shadow' /* Shadow button */,
    // 'ly.img.shadow.color' /* Shadow color picker */,
    // 'ly.img.shadow.offset' /* Shadow X/Y offset controls */,
    // 'ly.img.shadow.blur' /* Shadow blur radius control */,
    'ly.img.cutout' /* Cutout controls */,
    // #endregion

    // ============================================================================
    // CANVAS FEATURES
    // Configure the canvas area and context menu
    // ============================================================================

    // #region Canvas Features
    'ly.img.canvas' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // INSPECTOR FEATURES
    // Configure the inspector panel and toolbar
    // ============================================================================

    // #region Inspector Features
    'ly.img.inspector' /* Inspector visibility */,
    'ly.img.inspector.bar' /* Inspector Bar visibility */,
    'ly.img.inspector.toggle' /* Inspector Toggle button */,
    // #endregion

    // ============================================================================
    // GENERAL EDITING FEATURES
    // Configure common editing operations
    // ============================================================================

    // #region General Editing Features
    'ly.img.delete' /* Delete button and keyboard shortcut */,
    'ly.img.duplicate' /* Duplicate button and copy/paste */,
    'ly.img.group' /* Group and Ungroup buttons */,
    // 'ly.img.group.create' /* Create group from selection */,
    // 'ly.img.group.ungroup' /* Ungroup selected group */,
    // 'ly.img.group.enter' /* Enter group for editing */,
    // 'ly.img.group.select' /* Select parent group */,
    'ly.img.replace' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // PAGE FEATURES
    // Configure multi-page functionality
    // ============================================================================

    // #region Page Features
    // 'ly.img.page' /* Page parent feature */,
    'ly.img.page.move' /* Move Up/Down/Left/Right buttons */,
    'ly.img.page.add' /* Add Page button in Canvas Bar */,
    'ly.img.page.resize' /* Resize button and page formats */,
    'ly.img.page.clipContent' /* Clip content on/off toggle */,
    // #endregion

    // ============================================================================
    // SCENE FEATURES
    // Configure scene layout options
    // ============================================================================

    // #region Scene Features
    'ly.img.scene.layout' /* Enables all children below */,
    // 'ly.img.scene.layout.horizontal' /* Horizontal layout mode */,
    // 'ly.img.scene.layout.vertical' /* Vertical layout mode */,
    // 'ly.img.scene.layout.free' /* Free layout mode */,
    // #endregion

    // ============================================================================
    // STYLING FEATURES
    // Configure block appearance options
    // ============================================================================

    // #region Styling Features
    // 'ly.img.fill' /* Fill button and Fill Panel */,  // Use specific children instead
    'ly.img.fill.color' /* Solid and gradient fill controls */,
    'ly.img.fill.image' /* Image fill controls and crop */,
    // 'ly.img.fill.video' /* Video fill - DISABLED for design editors */,
    'ly.img.stroke' /* Stroke controls (Color, Width) */,
    // 'ly.img.stroke.color' /* Stroke color picker */,
    // 'ly.img.stroke.width' /* Stroke width control */,
    // 'ly.img.stroke.style' /* Stroke style (solid, dashed) */,
    // 'ly.img.stroke.position' /* Stroke position (inside, center, outside) */,
    // 'ly.img.stroke.cornerGeometry' /* Stroke corner style (round, miter, bevel) */,
    'ly.img.opacity' /* Opacity controls */,
    'ly.img.blendMode' /* Blend mode controls */,
    'ly.img.shape.options' /* Shape Options dropdown */,
    // 'ly.img.shape.options.cornerRadius' /* Corner radius control */,
    // 'ly.img.shape.options.points' /* Star points control */,
    // 'ly.img.shape.options.innerDiameter' /* Star inner diameter control */,
    // 'ly.img.shape.options.sides' /* Polygon sides control */,
    // 'ly.img.shape.options.lineWidth' /* Line width control */,
    'ly.img.combine' /* Combine dropdown (shapes/cutouts) */,
    // 'ly.img.combine.union' /* Union boolean operation */,
    // 'ly.img.combine.subtract' /* Subtract boolean operation */,
    // 'ly.img.combine.intersect' /* Intersect boolean operation */,
    // 'ly.img.combine.exclude' /* Exclude boolean operation */,
    'ly.img.position' /* Position dropdown */,
    // 'ly.img.position.arrange' /* Arrange controls (bring to front, etc.) */,
    // 'ly.img.position.align' /* Alignment controls */,
    // 'ly.img.position.distribute' /* Distribution controls */,
    'ly.img.trim' /* Trim button (video mode) */,
    // #endregion

    // ============================================================================
    // VIDEO FEATURES
    // Configure video editing capabilities
    // ============================================================================

    // #region Video Features
    // 'ly.img.video' /* Video parent feature */,
    // #endregion

    // ============================================================================
    // NOTIFICATION FEATURES
    // Configure user feedback notifications
    // ============================================================================

    // #region Notification Features
    'ly.img.notifications' /* Enables all children below */,
    // #endregion

    // ============================================================================
    // DOCK AND LIBRARY FEATURES
    // Configure the asset dock and library panels
    // ============================================================================

    // #region Dock and Library Features
    'ly.img.dock' /* Dock visibility */,
    'ly.img.library.panel' /* Asset Library panel */
    // #endregion
  ]);
}
