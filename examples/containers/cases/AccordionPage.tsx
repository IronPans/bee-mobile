import * as React from 'react';
import {NavLink, Switch} from 'react-router-dom';
import * as Loadable from 'react-loadable';
import PageLoading from '../../components/PageLoading';

export const AccordionPage = Loadable({
    loader: () => import('../../cases/AccordionCase'),
    loading: PageLoading,
});
