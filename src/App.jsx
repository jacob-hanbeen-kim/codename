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
import Request from './pages/Project/Request/Request';
import Execution from './pages/Project/Execution/Execution';

function App() {
  const location = useLocation();

  return (
    <FlexWrapper>
      <Navbar />
      <PageWrapper>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />}>
            <Route index element={<Navigate to="request" />} />
            <Route path="request" element={<Request />} />
            <Route path="execution" element={<Execution />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </PageWrapper>
      <Footer />
    </FlexWrapper>
  );
}

export default App;
