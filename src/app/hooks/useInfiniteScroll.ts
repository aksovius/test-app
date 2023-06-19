import { useEffect, RefObject } from 'react';

type FetchMoreCallback = () => void;
/**
 * A custom React Hook for infinite scrolling.
 * 
 * The hook sets up an Intersection Observer on a target element (specified by `ref`), and
 * calls a `fetchMore` function when the target intersects the viewport.
 * 
 * This is useful for scenarios such as a page that fetches and displays more content
 * when the user scrolls to the bottom.
 * 
 * @param ref - A React ref to the HTML element that triggers `fetchMore` when it intersects the viewport.
 * 
 * @param fetchMore - A function that is called when the `ref` element intersects the viewport.
 * This is typically a function that fetches more data and updates the state of the component.
 * 
 * @example
 * 
 * const MyComponent = () => {
 *   const [items, setItems] = useState([]);
 *   const loaderRef = useRef(null);
 *   
 *   const fetchMoreItems = useCallback(() => {
 *     
 *   }, []);
 *   
 *   useInfiniteScroll(loaderRef, fetchMoreItems);
 *   
 *   return (
 *     <>
 *       {items.map(item => <Item {...item} />)}
 *       <div ref={loaderRef}>Loading...</div>
 *     </>
 *   );
 * };
 * 
 */
const useInfiniteScroll = (ref: RefObject<HTMLDivElement>, fetchMore: FetchMoreCallback) => {
    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };

        let loaderElement: HTMLDivElement | null = ref.current;

        const observer: IntersectionObserver = new IntersectionObserver(handleObserver, options);
        if (loaderElement) {
            observer.observe(loaderElement);
        }

        function handleObserver(entities: IntersectionObserverEntry[]): void {
            const target: IntersectionObserverEntry = entities[0];
            if (target.isIntersecting) {
                fetchMore();
            }
        }

        return (): void => {
            if(loaderElement) observer.unobserve(loaderElement);
        }
    }, [fetchMore, ref]);
}

export default useInfiniteScroll;