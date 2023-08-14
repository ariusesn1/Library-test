import { createContext } from "react";

export const TokenContext = createContext({
   checkToken:false,
   addCheck:()=>{},
   removeCheck:()=>{}
})