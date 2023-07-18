import React from 'react';
import { FC } from "react";
import css from './MainLayout.module.scss';
import { Outlet } from "react-router-dom";
import { AppNavbar } from '@/components';
interface MainLayoutProps {
    // children: any
}
const MainLayout: FC<MainLayoutProps> = ( ) => {
    return(<>
        <div className={css.wrapper}>
            <AppNavbar />
            <main className={css.main}>
                <Outlet />
            </main>
        </div>
    </>);
}

export default MainLayout;