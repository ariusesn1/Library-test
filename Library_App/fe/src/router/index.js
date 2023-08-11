import Home from "../Pages/Home";
import Authors from "../Pages/Author/Author";
import CreateAuthor from "../Pages/Author/CreateAuthor"
import UpdateAuthor from "../Pages/Author/UpdateAuthor"
import Login from "../Pages/Login";
import { Fragment } from "react";
const publicPage = [
    {path:"/", component:Home},
    {path:"/login",component:Login,layout:true},
    {path:"/authors", component:Authors},
    {path:"/author/create", component:CreateAuthor},
    {path:"/author/update/:id", component:UpdateAuthor}
]
export {publicPage}