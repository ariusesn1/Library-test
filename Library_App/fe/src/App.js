import { publicPage } from "./router";
import DefaultLayout from "./Layout/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Fragment, useEffect ,useState} from "react";
import AdminLayout from "./Layout/AdminLayout";

function App() {


  return (
    <Fragment >
      <div className="App">
      <Router>
        <Routes>
          {publicPage.map((router, index) => {
            const Page = router.component;
            const Layout = router.layout ===true? AdminLayout : DefaultLayout;
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      </div>
    </Fragment>
  );
}

export default App;
