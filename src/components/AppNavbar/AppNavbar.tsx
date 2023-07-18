import React, { FC } from 'react';
import css from './AppNavbar.module.scss'
import AppButton from '../AppButton/AppButton';

const AppNavbar: FC = () => {
    return (
        <div className={css.AppNavbar}>
            <AppButton />
        </div>
    );
}

export default AppNavbar;