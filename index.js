/** A minimal DeepSeek Harness startup plugin. */

/** The plugin's diagnostic name. */
export const name = 'hello-plugin'

/** Prints a greeting to stderr whenever this plugin is activated. */
export function apply() {
  console.error('[hello-plugin] Hello, DSH! 插件加载成功。')
}
