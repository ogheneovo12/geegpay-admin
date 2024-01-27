import React from "react";
import MoonIcon from "@/assets/svg/moon.svg";
import SunIcon from "@/assets/svg/brightness.svg";
import { useMode } from "./context/ThemeModeProvider";
import cx from "classnames";

const baseClass = "rounded-full flex items-center justify-center";

function DarkModeToggle({ rotate }: { rotate?: boolean }) {
  const { setMode, mode } = useMode();
  const isDark = mode === "dark";

  return (
    <div
      className={cx(
        "dark:bg-black  bg-white w-full max-w-[46px] p-2 py-4 mx-auto rounded-[100px] flex flex-col items-center space-y-5",
        { "rotate-90": rotate }
      )}
    >
      <button
        className={cx("h-[30px] w-[30px]", baseClass, {
          "active-mode": isDark,
          "dark:text-white": !isDark,
        })}
        onClick={() => setMode("dark")}
      >
        <MoonIcon />
      </button>
      <button
        className={cx("h-[30px] w-[30px]", baseClass, {
          "active-mode": !isDark,
          "dark:text-white": isDark,
        })}
        onClick={() => setMode("light")}
      >
        <SunIcon />
      </button>
    </div>
  );
}

DarkModeToggle.propTypes = {};

export default DarkModeToggle;
