'use client';

import {ThemeProvider as NexxtThemesProvider} from 'next-themes'
import { NextDataPathnameNormalizer } from 'next/dist/server/future/normalizers/request/next-data';

export function ThemeProvider({children, ...props}) {
    return <NexxtThemesProvider {...props} > {children} </NexxtThemesProvider>
}