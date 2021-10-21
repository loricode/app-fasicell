import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './home/Home';

export function DashboardRouter(){
   return (
      <>
        <main>
           <div className="content-body">
             <div className="container-fluid">
                <Switch>
                   <Route exact path="/dashboard/home">
                        <Home/>
                   </Route>

                   <Route path="*">
                      <Redirect to="/dashboard/home" />
                   </Route>
                </Switch>
             </div>
           </div>
        </main>
      </>
   );
}