/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@electron-toolkit",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "vue/v-on-event-hyphenation": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    "vue/attribute-hyphenation": "off",
  },
  ignorePatterns: [
    "node_modules/",
    "build/",
    "dist/",
    "out/",
    "components.d.ts",
    "auto-imports.d.ts",
  ],
  globals: {
    defineProps: true,
    defineEmits: true,
    withDefaults: true,
    h: true,
    vue: true,
    ref: true,
    reactive: true,
    computed: true,
    watch: true,
    provide: true,
    inject: true,
    defineComponent: true,
    onBeforeMount: true,
    onBeforeUnmount: true,
    onUnmounted: true,
    onMounted: true,
    nextTick: true,
    watchEffect: true,
    electron: true,
    $message: true,
    $dialog: true,
    $loadingBar: true,
    $changeLogin: true,
    $notification: true,
    $changeThemeColor: true,
    $canNotConnect: true,
    $refreshCloudCatch: true,
    $cleanAll: true,
    $player: true,
  },
};
