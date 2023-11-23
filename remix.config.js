/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverDependenciesToBundle: ["@uiw/react-textarea-code-editor", "@monaco-editor/react"],
  browserNodeBuiltinsPolyfill: {
    modules: {
      assert: true
    }
  }
};
