import * as React from 'react';
import {NavLink, Switch} from 'react-router-dom';
import * as Loadable from 'react-loadable';
import PageLoading from '../../components/PageLoading';

export const MainPage = Loadable({
    loader: () => import('../../cases/Main'),
    loading: PageLoading,
});
