import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Edu Learn`;
  }, [title]);
};
export default useTitle;
