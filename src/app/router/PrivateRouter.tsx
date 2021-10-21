import { Redirect, Route } from "react-router-dom";

interface Props {
   loggedIn:boolean | undefined,
   component:any,
}

export function PrivateRouter({ loggedIn, component }:Props){
 return (
    <>
      {
         loggedIn ? (
              <Route  component={component} />
         ): (
            <Redirect to="/auth" />
         )
      }
    </>
 );
}