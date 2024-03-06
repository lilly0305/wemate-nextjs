"use client"
import {useEffect, useState} from "react";

export default function Home() {
  const [dark, setDark] = useState("다크모드");

    useEffect(() => {
        document.documentElement.classList.add('dark')
    }, []);

    return (
        <main className="bg-white dark:bg-slate-800 flex min-h-screen flex-col items-center justify-between p-24 text-gray-600 dark:text-gray-400">
          <button id="darkModeToggle" className="text-gray-600 dark:text-gray-400">Dark Mode 토글</button>

            test text
        </main>
    );
}
