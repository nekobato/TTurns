require("dotenv").config();
const pkg = require("./package.json");
const productName = "KeMoSika";

const config = {
  appId: `net.nekobato.${productName}`,
  asar: true,
  productName,
  directories: {
    output: `release/${pkg.version}`
  },
  files: ["out", "resources"],
  mac: {
    target: ["default"],
    icon: "out/renderer/icons/mac/icon.icns",
    category: "public.app-category.productivity",
    entitlements: "build/entitlements.mac.plist",
    entitlementsInherit: "build/entitlements.mac.plist",
    notarize: {
      teamId: process.env.APPLE_TEAM_ID
    },
    publish: ["github"]
  },
  // win: {
  //   target: [
  //     {
  //       target: "nsis",
  //       arch: ["x64"]
  //     }
  //   ]
  // },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false
  },
  linux: {
    target: ["AppImage"]
  }
};

module.exports = config;
