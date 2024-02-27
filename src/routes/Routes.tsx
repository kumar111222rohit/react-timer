import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import CurrentTime from '../components/ReactTime1';
import MouseMoveTimer from '../components/ReactTime2';

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/react-timer" element={<CurrentTime />} />
      <Route path="/mouse-timer" element={<MouseMoveTimer />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
