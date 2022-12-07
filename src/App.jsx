import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import {
  FlexWrapper,
  PageWrapper
} from './App.styled';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Login from './pages/Login/Login';

function App() {
  const location = useLocation();

  return (
    <FlexWrapper>
      <Navbar />
      <PageWrapper>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </PageWrapper>
      <Footer />
    </FlexWrapper>
  );
}

export default App;
