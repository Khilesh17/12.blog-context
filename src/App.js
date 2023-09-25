import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { Blogs } from "./components/Blogs";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {

  const { fetchBlogPost } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  }, []);

  return (
    <div className="App">
      <Header />
      <Blogs />
      <Pagination/>
    </div>
  );
}

export default App;
