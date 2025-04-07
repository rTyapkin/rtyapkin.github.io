// vite.config.mts
import Components from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/lucky%20wheel%20git/rtyapkin.github.io/node_modules/unplugin-vue-components/dist/vite.js";
import Vue from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/lucky%20wheel%20git/rtyapkin.github.io/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Vuetify, { transformAssetUrls } from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/lucky%20wheel%20git/rtyapkin.github.io/node_modules/vite-plugin-vuetify/dist/index.mjs";
import ViteFonts from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/lucky%20wheel%20git/rtyapkin.github.io/node_modules/unplugin-fonts/dist/vite.mjs";
import VueRouter from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/lucky%20wheel%20git/rtyapkin.github.io/node_modules/unplugin-vue-router/dist/vite.js";
import svgLoader from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/lucky%20wheel%20git/rtyapkin.github.io/node_modules/vite-svg-loader/index.js";
import { defineConfig } from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/lucky%20wheel%20git/rtyapkin.github.io/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/lucky%20wheel%20git/rtyapkin.github.io/vite.config.mts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls }
    }),
    svgLoader(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/style.scss"
      }
    }),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: "Roboto",
          styles: "wght@100;300;400;500;700;900"
        }]
      }
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue"
    ]
  },
  server: {
    port: 3e3
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler"
      }
    }
  },
  base: "https://rtyapkin.github.io/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUm9tYW5cXFxcRGVza3RvcFxcXFxcdTA0MUFcdTA0MUVcdTA0MUNcdTA0MTBcdTA0MURcdTA0MTRcdTA0MTAgXHUwNDIxXHUwNDEwXHUwNDE5XHUwNDIyXHUwNDJCIFx1MDQxOFx1MDQxM1x1MDQyMFx1MDQyQlxcXFxnaXQtbGlua2VkIHByb2plY3RzXFxcXGx1Y2t5IHdoZWVsIGdpdFxcXFxydHlhcGtpbi5naXRodWIuaW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFJvbWFuXFxcXERlc2t0b3BcXFxcXHUwNDFBXHUwNDFFXHUwNDFDXHUwNDEwXHUwNDFEXHUwNDE0XHUwNDEwIFx1MDQyMVx1MDQxMFx1MDQxOVx1MDQyMlx1MDQyQiBcdTA0MThcdTA0MTNcdTA0MjBcdTA0MkJcXFxcZ2l0LWxpbmtlZCBwcm9qZWN0c1xcXFxsdWNreSB3aGVlbCBnaXRcXFxccnR5YXBraW4uZ2l0aHViLmlvXFxcXHZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUm9tYW4vRGVza3RvcC8lRDAlOUElRDAlOUUlRDAlOUMlRDAlOTAlRDAlOUQlRDAlOTQlRDAlOTAlMjAlRDAlQTElRDAlOTAlRDAlOTklRDAlQTIlRDAlQUIlMjAlRDAlOTglRDAlOTMlRDAlQTAlRDAlQUIvZ2l0LWxpbmtlZCUyMHByb2plY3RzL2x1Y2t5JTIwd2hlZWwlMjBnaXQvcnR5YXBraW4uZ2l0aHViLmlvL3ZpdGUuY29uZmlnLm10c1wiOy8vIFBsdWdpbnNcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBWdWV0aWZ5LCB7IHRyYW5zZm9ybUFzc2V0VXJscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZXRpZnknXHJcbmltcG9ydCBWaXRlRm9udHMgZnJvbSAndW5wbHVnaW4tZm9udHMvdml0ZSdcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXHJcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJ1xyXG5cclxuLy8gVXRpbGl0aWVzXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBWdWVSb3V0ZXIoKSxcclxuICAgIFZ1ZSh7XHJcbiAgICAgIHRlbXBsYXRlOiB7IHRyYW5zZm9ybUFzc2V0VXJscyB9LFxyXG4gICAgfSksXHJcbiAgICBzdmdMb2FkZXIoKSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeS1sb2FkZXIvdHJlZS9tYXN0ZXIvcGFja2FnZXMvdml0ZS1wbHVnaW4jcmVhZG1lXHJcbiAgICBWdWV0aWZ5KHtcclxuICAgICAgYXV0b0ltcG9ydDogdHJ1ZSxcclxuICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgY29uZmlnRmlsZTogJ3NyYy9zdHlsZXMvc3R5bGUuc2NzcycsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoKSxcclxuICAgIFZpdGVGb250cyh7XHJcbiAgICAgIGdvb2dsZToge1xyXG4gICAgICAgIGZhbWlsaWVzOiBbIHtcclxuICAgICAgICAgIG5hbWU6ICdSb2JvdG8nLFxyXG4gICAgICAgICAgc3R5bGVzOiAnd2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzkwMCcsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGRlZmluZTogeyAncHJvY2Vzcy5lbnYnOiB7fSB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgfSxcclxuICAgIGV4dGVuc2lvbnM6IFtcclxuICAgICAgJy5qcycsXHJcbiAgICAgICcuanNvbicsXHJcbiAgICAgICcuanN4JyxcclxuICAgICAgJy5tanMnLFxyXG4gICAgICAnLnRzJyxcclxuICAgICAgJy50c3gnLFxyXG4gICAgICAnLnZ1ZScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNhc3M6IHtcclxuICAgICAgICBhcGk6ICdtb2Rlcm4tY29tcGlsZXInLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhc2U6ICdodHRwczovL3J0eWFwa2luLmdpdGh1Yi5pby8nXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXLDBCQUEwQjtBQUM1QyxPQUFPLGVBQWU7QUFDdEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZUFBZTtBQUd0QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWUsV0FBVztBQVZxUixJQUFNLDJDQUEyQztBQWF6VyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixJQUFJO0FBQUEsTUFDRixVQUFVLEVBQUUsbUJBQW1CO0FBQUEsSUFDakMsQ0FBQztBQUFBLElBQ0QsVUFBVTtBQUFBO0FBQUEsSUFFVixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsUUFDTixZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ04sVUFBVSxDQUFFO0FBQUEsVUFDVixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVEsRUFBRSxlQUFlLENBQUMsRUFBRTtBQUFBLEVBQzVCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQ1IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
