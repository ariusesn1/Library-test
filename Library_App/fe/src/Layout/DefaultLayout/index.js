import { Children, Fragment } from "react";
import Header from "./Header";

function DefaultLayout({children}) {
  return (
    <Fragment>
      <Header />
        <div className="content">{children}</div>
    </Fragment>
  );
}

export default DefaultLayout;
