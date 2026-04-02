/**
 * CE.SDK Multi-Image Generation - imgly Module
 *
 * This module provides the complete SDK integration for multi-image generation.
 * Customers can import everything they need from this single entry point.
 *
 * @example
 * ```typescript
 * import {
 *   // Engine
 *   initHeadlessEngine,
 *   renderSceneToImage,
 *
 *   // Editor Configuration Plugins
 *   DesignEditorConfig,        // Adopter mode (standard editing)
 *   AdvancedDesignEditorConfig, // Creator mode (full template design)
 *
 *   // Generation
 *   fillTemplate,
 *   generateAssets,
 *   applyRestaurantColors
 * } from './imgly';
 * ```
 *
 * @see https://img.ly/docs/cesdk/js/features/
 */

import type CreativeEditorSDK from '@cesdk/cesdk-js';
import CreativeEngine from '@cesdk/engine';

import {
  BlurAssetSource,
  ColorPaletteAssetSource,
  CropPresetsAssetSource,
  DemoAssetSources,
  EffectsAssetSource,
  FiltersAssetSource,
  PagePresetsAssetSource,
  StickerAssetSource,
  TextAssetSource,
  TextComponentAssetSource,
  TypefaceAssetSource,
  UploadAssetSources,
  VectorShapeAssetSource
} from '@cesdk/cesdk-js/plugins';

import { DesignEditorConfig } from './config/design-editor/plugin';
import { AdvancedDesignEditorConfig } from './config/advanced-design-editor/plugin';
import type { EditorInitOptions } from './types';

// =============================================================================
// Utils (re-export from utils.ts)
// =============================================================================

export { hexToRgba, replaceImageByName, exportSceneAsImage } from './utils';

// =============================================================================
// Engine Utilities
// =============================================================================

/**
 * Initialize a headless CE.SDK engine with standard asset sources.
 */
export async function initHeadlessEngine(): Promise<CreativeEngine> {
  const config = {
    ...(import.meta.env.CESDK_USE_LOCAL && {
      baseURL: import.meta.env.VITE_CESDK_ASSETS_BASE_URL
    })
  };

  const engine = await CreativeEngine.init(config);

  // Add standard asset source plugins
  await engine.addPlugin(new ColorPaletteAssetSource());
  await engine.addPlugin(new TypefaceAssetSource());
  await engine.addPlugin(new TextAssetSource());
  await engine.addPlugin(new TextComponentAssetSource());
  await engine.addPlugin(new VectorShapeAssetSource());
  await engine.addPlugin(new StickerAssetSource());
  await engine.addPlugin(new EffectsAssetSource());
  await engine.addPlugin(new FiltersAssetSource());
  await engine.addPlugin(new BlurAssetSource());
  await engine.addPlugin(
    new PagePresetsAssetSource({
      include: [
        'ly.img.page.presets.instagram.*',
        'ly.img.page.presets.facebook.*',
        'ly.img.page.presets.x.*',
        'ly.img.page.presets.linkedin.*',
        'ly.img.page.presets.pinterest.*',
        'ly.img.page.presets.tiktok.*',
        'ly.img.page.presets.youtube.*'
      ]
    })
  );
  await engine.addPlugin(new CropPresetsAssetSource());
  await engine.addPlugin(
    new UploadAssetSources({
      include: ['ly.img.image.upload']
    })
  );
  await engine.addPlugin(
    new DemoAssetSources({
      include: ['ly.img.image.*']
    })
  );

  return engine;
}

// =============================================================================
// Editor Initialization
// =============================================================================

/**
 * Initialize the Design Editor configuration (Adopter mode).
 *
 * Sets up the editor with light theme and standard editing features
 * for brand-consistent editing.
 */
export async function initDesignEditor(
  cesdk: CreativeEditorSDK,
  options: EditorInitOptions
): Promise<void> {
  const { title, onBack, onSave } = options;

  await cesdk.addPlugin(new DesignEditorConfig());

  // Add asset source plugins
  await cesdk.addPlugin(new BlurAssetSource());
  await cesdk.addPlugin(new ColorPaletteAssetSource());
  await cesdk.addPlugin(new CropPresetsAssetSource());
  await cesdk.addPlugin(
    new UploadAssetSources({
      include: ['ly.img.image.upload']
    })
  );
  await cesdk.addPlugin(
    new DemoAssetSources({
      include: ['ly.img.image.*']
    })
  );
  await cesdk.addPlugin(new EffectsAssetSource());
  await cesdk.addPlugin(new FiltersAssetSource());
  await cesdk.addPlugin(new PagePresetsAssetSource());
  await cesdk.addPlugin(new StickerAssetSource());
  await cesdk.addPlugin(new TextAssetSource());
  await cesdk.addPlugin(new TextComponentAssetSource());
  await cesdk.addPlugin(new TypefaceAssetSource());
  await cesdk.addPlugin(new VectorShapeAssetSource());

  // Set title
  cesdk.i18n.setTranslations({
    en: { 'common.title': title }
  });

  // Add back button
  cesdk.ui.insertOrderComponent(
    { in: 'ly.img.navigation.bar', position: 'start' },
    {
      id: 'ly.img.back.navigationBar',
      onClick: onBack
    }
  );

  // Register save action and add save button
  cesdk.actions.register('save', async () => {
    const savedScene = await cesdk.engine.scene.saveToString();
    onSave(savedScene);
  });

  cesdk.ui.insertOrderComponent(
    { in: 'ly.img.navigation.bar', position: 'end' },
    { id: 'ly.img.save.navigationBar' }
  );
}

/**
 * Initialize the Advanced Design Editor configuration (Creator mode).
 *
 * Sets up the editor with dark theme and advanced features
 * for template design.
 */
export async function initAdvancedDesignEditor(
  cesdk: CreativeEditorSDK,
  options: EditorInitOptions
): Promise<void> {
  const { title, onBack, onSave } = options;

  await cesdk.addPlugin(new AdvancedDesignEditorConfig());

  // Add asset source plugins
  await cesdk.addPlugin(new BlurAssetSource());
  await cesdk.addPlugin(new ColorPaletteAssetSource());
  await cesdk.addPlugin(new CropPresetsAssetSource());
  await cesdk.addPlugin(
    new UploadAssetSources({
      include: ['ly.img.image.upload']
    })
  );
  await cesdk.addPlugin(
    new DemoAssetSources({
      include: ['ly.img.image.*']
    })
  );
  await cesdk.addPlugin(new EffectsAssetSource());
  await cesdk.addPlugin(new FiltersAssetSource());
  await cesdk.addPlugin(new PagePresetsAssetSource());
  await cesdk.addPlugin(new StickerAssetSource());
  await cesdk.addPlugin(new TextAssetSource());
  await cesdk.addPlugin(new TextComponentAssetSource());
  await cesdk.addPlugin(new TypefaceAssetSource());
  await cesdk.addPlugin(new VectorShapeAssetSource());

  // Set title
  cesdk.i18n.setTranslations({
    en: { 'common.title': title }
  });

  // Add back button
  cesdk.ui.insertOrderComponent(
    { in: 'ly.img.navigation.bar', position: 'start' },
    {
      id: 'ly.img.back.navigationBar',
      onClick: onBack
    }
  );

  // Register save action and add save button
  cesdk.actions.register('save', async () => {
    const savedScene = await cesdk.engine.scene.saveToString();
    onSave(savedScene);
  });

  cesdk.ui.insertOrderComponent(
    { in: 'ly.img.navigation.bar', position: 'end' },
    { id: 'ly.img.save.navigationBar' }
  );
}

// =============================================================================
// Configuration Plugins (for direct use if needed)
// =============================================================================

export { DesignEditorConfig } from './config/design-editor/plugin';
export { AdvancedDesignEditorConfig } from './config/advanced-design-editor/plugin';

// =============================================================================
// Generation Utilities
// =============================================================================

export {
  fillTemplate,
  applyRestaurantColors,
  generateAssets,
  renderSceneToImage
} from './generation';
