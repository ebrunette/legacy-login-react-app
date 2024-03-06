
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/loginPage'
import { ForgotIds } from './pages/forgotid';
import { NewAthlete } from './pages/newAthlete';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotId" element={<ForgotIds/>} />
      <Route exact path="/newAthlete" element={<NewAthlete/>}/>
    </Routes>
  </Router>
);
