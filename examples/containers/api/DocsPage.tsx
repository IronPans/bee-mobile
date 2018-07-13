import * as React from 'react';
import {NavLink, Switch} from 'react-router-dom';
import * as Loadable from 'react-loadable';
import PageLoading from '../../components/PageLoading';

export const DocsPage = Loadable({
    loader: () => import('../../cases/Docs'),
    loading: PageLoading,
});
