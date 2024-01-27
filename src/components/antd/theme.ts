import { ThemeConfig } from "antd";

export const appTheme: ThemeConfig = {

  token: {
    colorPrimary: "#34CAA5",
    colorText: "#26282C",
    colorTextBase: "#26282C",
    fontFamily: "var(--plus-jarkata-sans)",
    colorWhite: "#fff",
  },
  components: {
    Layout: {
      siderBg: "#141414",
      headerBg: "#FAFAFA",
      bodyBg: "#FAFAFA",
      triggerBg: "#FAFAFA",
      lightSiderBg:"#F7F8FA",
    },
    Menu: {
      itemBg: "transparent",
      itemHeight: 60,
      itemPaddingInline: 0,
      itemMarginInline: 0,
      itemSelectedBg: "transparent",
    },
  },
};
