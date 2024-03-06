"use client"

import {useDarkMode} from "@/app/_libs/zustand/store";
import AlertFillIcon from "remixicon-react/AlertFillIcon";
import HeaderComponent from "@/app/_components/common/header/HeaderComponent";
import React from "react";

export default function Home() {
  // NOTE: 다크모드 토글
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-[calc(100svh-72px)] pt-[56px]`}>
      <HeaderComponent isBack/>

      <main
        className="font-bold underline bg-white dark:bg-black01 flex flex-col items-center justify-between p-24 text-gray-600 dark:text-gray-400 h-full"
      >

        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/*<AlertFillIcon className="some-class" size={16}/>*/}

        {/*<div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">*/}
        {/*  <div>*/}
        {/*<span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">*/}
        {/*  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
        {/*       stroke="currentColor" aria-hidden="true"></svg>*/}
        {/*</span>*/}
        {/*  </div>*/}
        {/*  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes*/}
        {/*    Upside-Down</h3>*/}
        {/*  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">*/}
        {/*    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer*/}
        {/*    space.*/}
        {/*  </p>*/}
        {/*</div>*/}
      </main>
    </div>
  );
}