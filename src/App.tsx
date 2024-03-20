import { Route, Routes } from 'react-router-dom';
import { SignUp } from './routes/sign-up';
import { AuthLayout } from './layout/Auth';
import { Login } from './routes/Login';
import { Dashboard } from './routes/Dashboard';
import { LinkDetails } from './routes/link-details';
import { CreateLink } from './routes/create-link';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/links/:linkId' element={<LinkDetails />} />
        <Route path='/dashboard/links/create' element={<CreateLink />} />
        <Route path='/auth' element={<AuthLayout />} >
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  )
}


export default App;
