import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame8 from "./pages/Frame8";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
      case "/frame-56":
        title = "";
        metaDescription = "";
        break;
      case "/frame-67":
        title = "";
        metaDescription = "";
        break;
      case "/frame-63":
        title = "";
        metaDescription = "";
        break;
      case "/frame-57":
        title = "";
        metaDescription = "";
        break;
      case "/frame-21":
        title = "";
        metaDescription = "";
        break;
      case "/frame-47":
        title = "";
        metaDescription = "";
        break;
      case "/frame-38":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/frame-3" element={<Frame1 />} />
      <Route path="/frame-56" element={<Frame2 />} />
      <Route path="/frame-67" element={<Frame3 />} />
      <Route path="/frame-63" element={<Frame4 />} />
      <Route path="/frame-57" element={<Frame5 />} />
      <Route path="/frame-21" element={<Frame6 />} />
      <Route path="/frame-47" element={<Frame7 />} />
      <Route path="/frame-38" element={<Frame8 />} />
    </Routes>
  );
}
export default App;
