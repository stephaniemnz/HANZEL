import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for implementing infinite scrolling functionality.
 * @param {function} loadMore -
 * @param {boolean} hasMore 
 */
function useInfiniteScroll(loadMore, hasMore) {
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = useCallback(() => {
   
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
        setIsFetching(true);
    }, [hasMore]);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
           
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (!isFetching) return;
        loadMore().then(() => {
            setIsFetching(false); 
        });
    }, [isFetching, loadMore]);

    return [isFetching, setIsFetching];
}

export default useInfiniteScroll;
