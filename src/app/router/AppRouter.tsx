import { BrowserRouter as Router } from 'react-router-dom';
import { AuthRouter } from '../views/auth/AuthRouter';
export function AppRouter(){
   return (
      <Router>
         <AuthRouter/>
      </Router>
   );
}