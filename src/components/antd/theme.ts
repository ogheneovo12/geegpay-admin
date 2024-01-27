import { ThemeConfig, theme } from "antd";

export const appTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#34CAA5",
    colorText: "#26282C",
    colorTextBase: "#26282C",
    fontFamily:"var(--plus-jarkata-sans)"
  },
  components: {
    Layout: {
      siderBg: "#F7F8FA",
      headerBg: "#FAFAFA",
      bodyBg: "#FAFAFA",
      triggerBg: "#FAFAFA",
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
