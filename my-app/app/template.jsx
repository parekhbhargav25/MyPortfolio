'use client';
import { useEffect } from 'react';
import useScrollProgesss from '@/hooks/useScrollProgress';

const Template = ({children}) => {
    const completion = useScrollProgesss();

    useEffect(() => {
        const handlePageShow = (event) => {
            if (event.persisted) {
                window.location.reload();
            }
        };
        window.addEventListener('pageshow', handlePageShow);
        return () => window.removeEventListener('pageshow', handlePageShow);
    }, []);

    return (
        <>
            <main>{children}</main>
            <span
             style ={{transform: `translateY(${completion - 100}%)`}}
             className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'
            >
            </span>
        </>
    )
}
export default Template;