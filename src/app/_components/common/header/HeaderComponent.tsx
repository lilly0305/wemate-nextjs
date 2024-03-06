"use client"
import React from 'react';

import Image from 'next/image'

// remixicons
import Notification3LineIcon from "remixicon-react/Notification3LineIcon";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import Link from "next/link";
import {useRouter} from "next/navigation";

interface IHeaderBasic {
  alarmOn?: boolean
  isBack?: boolean
  children?: React.ReactNode
}
const HeaderComponent = ({ alarmOn = false, isBack = false, children } : IHeaderBasic) => {
  const router = useRouter();

  return (
    <header className="dark:bg-black01 fixed flexCenterBetween w-full h-[56px] px-inline border-b border-white03 top-0">
      {
        isBack && <ArrowLeftLineIcon size={24} className="text-grey02 dark:text-white01" onClick={() => router.back()}/>
      }

      <Link href="/">
        <div className="w-[108px]">
          <Image src={`/images/logo-basic.svg`} alt="WEMATE 로고" width={0} height={0} sizes="100vw" style={{ width: '108px', height: 'auto' }}/>
        </div>
      </Link>

      <div className="flex">
        <div className="relative">
          {alarmOn && <div className="rounded-full size-1.5 bg-red01 absolute right-1 top-[0.5]"/>}

          <Notification3LineIcon size={24} className={alarmOn ? "text-black01" : "text-grey03"}/>
        </div>

        {children}
      </div>
      
    </header>
  );
};

export default HeaderComponent;
