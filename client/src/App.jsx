import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import AboutScreen from './screens/AboutScreen';
import ProfileScreen from './screens/ProfileScreen';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sign-in" element={<SigninScreen />} />
        <Route path="/sign-up" element={<SignupScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
