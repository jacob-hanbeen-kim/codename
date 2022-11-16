import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import {
  FlexWrapper,
  PageWrapper
} from './App.styled';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';

function App() {
  const location = useLocation();

  return (
    <FlexWrapper>
      <Navbar />
      <PageWrapper>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </PageWrapper>
    </FlexWrapper>
  );
}

export default App;
