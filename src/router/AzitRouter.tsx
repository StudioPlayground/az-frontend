import { Route, Routes } from 'react-router-dom';
import App from '@pages/app/App';
import { SamplePage } from '@pages/sample/SamplePage';

export const AzitRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sample" element={<SamplePage />} />
    </Routes>
  );
};
