export const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    // componentDidMount, componentWillUpdate
    useEffect(updateTitle, [title]);
    return setTitle;
  };