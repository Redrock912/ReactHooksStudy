export const useClick = onClick => {
    if (typeof onClick !== "function") {
      return;
    }
    const element = useRef();
    useEffect(() => {
      // if the componnetMounts( exists) it will add eventListener
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
  
      // componentWillUnmount calls return function in useEffect
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };