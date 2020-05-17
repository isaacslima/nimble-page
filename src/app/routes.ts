import { RouteBase } from '@nimble-ts/core';

export const ROUTES: RouteBase[] = [
    {
        path: '',
        page: () => import('./pages/root/root.page').then(x => x.RootPage),
        children: [
            {
                path: '',
                page: () => import('./pages/home/home.page').then(x => x.HomePage)
            },
            {
                path: 'doc',
                page: () => import('./pages/document/document.page').then(x => x.DocumentPage),
                children: [
                    { path: '', redirect: '/doc/1x/essentials/get-started' },
                    { path: '1x', redirect: '/doc/1x/essentials/get-started' },
                    {
                        path: '1x/essentials/get-started',
                        page: () => import('./pages/document/doc-1x/doc-1x-get-started/doc-1x-get-started.page').then(x => x.Doc1xGetStartedPage)
                    },
                    {
                        path: '1x/essentials/introduction',
                        page: () => import('./pages/document/doc-1x/doc-1x-introduction/doc-1x-introduction.page').then(x => x.Doc1xIntroductionPage)
                    }
                ]
            },
            {
                path: 'second',
                page: () => import('./pages/second/second.page').then(x => x.SecondPage)
            }   
        ]
    },
    {
        path: '**',
        page: () => import('./pages/404/404.page').then(x => x.NotFoundPage)
    }
];