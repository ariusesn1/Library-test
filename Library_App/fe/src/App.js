import { publicPage } from "./router";
import DefaultLayout from "./Layout/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Fragment, createContext,} from "react";
import AdminLayout from "./Layout/AdminLayout";

function App() {
  const CheckLogin = createContext({});

  return (
    <CheckLogin.Provider value={""} >
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
    </CheckLogin.Provider>
  );
}

export default App;
