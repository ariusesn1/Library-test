import Home from "../Pages/Home";
import Authors from "../Pages/Author/Author";
import CreateAuthor from "../Pages/Author/CreateAuthor"
import UpdateAuthor from "../Pages/Author/UpdateAuthor"
import Category from "../Pages/Category/Category";
import CreateCategory from "../Pages/Category/CreateCategory";
import UpdateCategory from "../Pages/Category/UpdateCategory";
import Books from "../Pages/Books/Books";
import CreateBooks from "../Pages/Books/CreateBooks";
import UpdateBooks from "../Pages/Books/UpdateBooks";
import Login from "../Pages/Login";
const publicPage = [
    {path:"/", component:Home},
    {path:"/login",component:Login},
    {path:"/authors", component:Authors},
    {path:"/author/create", component:CreateAuthor},
    {path:"/author/update/:id", component:UpdateAuthor},
    {path:"/category", component:Category},
    {path:"/category/create", component:CreateCategory},
    {path:"/category/update/:id", component:UpdateCategory},
    {path:"/books", component:Books},
    {path:"/books/create", component:CreateBooks},
    {path:"/books/update/:id", component:UpdateBooks},
]
export {publicPage}