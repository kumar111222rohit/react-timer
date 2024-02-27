import { Routes, Route } from 'react-router-dom';
import CurrentTime from '../components/ReactTime1';
import MouseMoveTimer from '../components/ReactTime2';

const AppRoutes = () => (
  <Routes>
    <Route path="/react-timer" element={<CurrentTime />} />
    <Route path="/mouse-timer" element={<MouseMoveTimer />} />
  </Routes>
);

export default AppRoutes;
