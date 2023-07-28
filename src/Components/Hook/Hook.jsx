import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Weero Edu`;
  }, [title]);
};
export default useTitle;
