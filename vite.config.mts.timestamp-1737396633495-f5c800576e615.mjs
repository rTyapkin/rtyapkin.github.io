// vite.config.mts
import Components from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/music-wheel/node_modules/unplugin-vue-components/dist/vite.js";
import Vue from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/music-wheel/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Vuetify, { transformAssetUrls } from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/music-wheel/node_modules/vite-plugin-vuetify/dist/index.mjs";
import ViteFonts from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/music-wheel/node_modules/unplugin-fonts/dist/vite.mjs";
import VueRouter from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/music-wheel/node_modules/unplugin-vue-router/dist/vite.js";
import svgLoader from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/music-wheel/node_modules/vite-svg-loader/index.js";
import { defineConfig } from "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/music-wheel/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Roman/Desktop/%D0%9A%D0%9E%D0%9C%D0%90%D0%9D%D0%94%D0%90%20%D0%A1%D0%90%D0%99%D0%A2%D0%AB%20%D0%98%D0%93%D0%A0%D0%AB/git-linked%20projects/music-wheel/vite.config.mts";
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
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUm9tYW5cXFxcRGVza3RvcFxcXFxcdTA0MUFcdTA0MUVcdTA0MUNcdTA0MTBcdTA0MURcdTA0MTRcdTA0MTAgXHUwNDIxXHUwNDEwXHUwNDE5XHUwNDIyXHUwNDJCIFx1MDQxOFx1MDQxM1x1MDQyMFx1MDQyQlxcXFxnaXQtbGlua2VkIHByb2plY3RzXFxcXG11c2ljLXdoZWVsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSb21hblxcXFxEZXNrdG9wXFxcXFx1MDQxQVx1MDQxRVx1MDQxQ1x1MDQxMFx1MDQxRFx1MDQxNFx1MDQxMCBcdTA0MjFcdTA0MTBcdTA0MTlcdTA0MjJcdTA0MkIgXHUwNDE4XHUwNDEzXHUwNDIwXHUwNDJCXFxcXGdpdC1saW5rZWQgcHJvamVjdHNcXFxcbXVzaWMtd2hlZWxcXFxcdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Sb21hbi9EZXNrdG9wLyVEMCU5QSVEMCU5RSVEMCU5QyVEMCU5MCVEMCU5RCVEMCU5NCVEMCU5MCUyMCVEMCVBMSVEMCU5MCVEMCU5OSVEMCVBMiVEMCVBQiUyMCVEMCU5OCVEMCU5MyVEMCVBMCVEMCVBQi9naXQtbGlua2VkJTIwcHJvamVjdHMvbXVzaWMtd2hlZWwvdml0ZS5jb25maWcubXRzXCI7Ly8gUGx1Z2luc1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IFZ1ZXRpZnksIHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSAndml0ZS1wbHVnaW4tdnVldGlmeSdcclxuaW1wb3J0IFZpdGVGb250cyBmcm9tICd1bnBsdWdpbi1mb250cy92aXRlJ1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcclxuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXHJcblxyXG4vLyBVdGlsaXRpZXNcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIFZ1ZVJvdXRlcigpLFxyXG4gICAgVnVlKHtcclxuICAgICAgdGVtcGxhdGU6IHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0sXHJcbiAgICB9KSxcclxuICAgIHN2Z0xvYWRlcigpLFxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5LWxvYWRlci90cmVlL21hc3Rlci9wYWNrYWdlcy92aXRlLXBsdWdpbiNyZWFkbWVcclxuICAgIFZ1ZXRpZnkoe1xyXG4gICAgICBhdXRvSW1wb3J0OiB0cnVlLFxyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICBjb25maWdGaWxlOiAnc3JjL3N0eWxlcy9zZXR0aW5ncy5zY3NzJyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cygpLFxyXG4gICAgVml0ZUZvbnRzKHtcclxuICAgICAgZ29vZ2xlOiB7XHJcbiAgICAgICAgZmFtaWxpZXM6IFsge1xyXG4gICAgICAgICAgbmFtZTogJ1JvYm90bycsXHJcbiAgICAgICAgICBzdHlsZXM6ICd3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJyxcclxuICAgICAgICB9XSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgZGVmaW5lOiB7ICdwcm9jZXNzLmVudic6IHt9IH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uczogW1xyXG4gICAgICAnLmpzJyxcclxuICAgICAgJy5qc29uJyxcclxuICAgICAgJy5qc3gnLFxyXG4gICAgICAnLm1qcycsXHJcbiAgICAgICcudHMnLFxyXG4gICAgICAnLnRzeCcsXHJcbiAgICAgICcudnVlJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Fzczoge1xyXG4gICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXLDBCQUEwQjtBQUM1QyxPQUFPLGVBQWU7QUFDdEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZUFBZTtBQUd0QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWUsV0FBVztBQVZxTyxJQUFNLDJDQUEyQztBQWF6VCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixJQUFJO0FBQUEsTUFDRixVQUFVLEVBQUUsbUJBQW1CO0FBQUEsSUFDakMsQ0FBQztBQUFBLElBQ0QsVUFBVTtBQUFBO0FBQUEsSUFFVixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsUUFDTixZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ04sVUFBVSxDQUFFO0FBQUEsVUFDVixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVEsRUFBRSxlQUFlLENBQUMsRUFBRTtBQUFBLEVBQzVCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
