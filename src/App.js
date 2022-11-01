
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import { LoginPage } from './loginPage'
import { ForgotIds } from './forgotid';
import { NewAthlete } from './newAthlete';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotId" element={<ForgotIds/>} />
      <Route exact path="/newAthlete" element={<NewAthlete/>}/> */}
    </Routes>
  </Router>
);
