import { useEffect, useRef } from "react";

type VoidFunction = () => void;

function useInterval(callback: VoidFunction, delay: number | null): void {
   const savedCallback = useRef<VoidFunction>();

   // Remember the latest function.
   useEffect(() => {
      savedCallback.current = callback;
   }, [callback]);

   // Set up the interval.
   useEffect(() => {
      function tick() {
         savedCallback.current?.();
      }

      if (delay !== null) {
         const id = setInterval(tick, delay);
         return () => clearInterval(id);
      }
   }, [delay]);
}

export default useInterval;
