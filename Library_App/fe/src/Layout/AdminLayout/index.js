import { Fragment } from "react";

function AdminLayout({children}) {
    return (
      <Fragment>
          <div className="content">{children}</div>
      </Fragment>
    );
  }
  
  export default AdminLayout;
  