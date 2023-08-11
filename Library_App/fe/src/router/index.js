import Home from "../Pages/Home";
import Authors from "../Pages/Author/Author";
import CreateAuthor from "../Pages/Author/CreateAuthor"
import UpdateAuthor from "../Pages/Author/UpdateAuthor"
<<<<<<< Updated upstream
import Login from "../Pages/Login";
import { Fragment } from "react";
const publicPage = [
    {path:"/", component:Home},
    {path:"/login",component:Login,layout:true},
=======
import Category from "../Pages/Category/Category";
import CreateCategory from "../Pages/Category/CreateCategory";
import UpdateCategory from "../Pages/Category/UpdateCategory";
import Books from "../Pages/Books/Books";
import CreateBooks from "../Pages/Books/CreateBooks";
import UpdateBooks from "../Pages/Books/UpdateBooks";
const publicPage = [
    {path:"/", component:Home},
>>>>>>> Stashed changes
    {path:"/authors", component:Authors},
    {path:"/author/create", component:CreateAuthor},
    {path:"/author/update/:id", component:UpdateAuthor}
]
export {publicPage}