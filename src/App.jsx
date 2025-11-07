import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardOverview from './pages/DashboardOverview';
import FaceRegistration from './pages/FaceRegistration';
import LiveDetection from './pages/LiveDetection';
import AttendanceLogs from './pages/AttendanceLogs';
import MonthlySummary from './pages/MonthlySummary';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<DashboardOverview />} />
                    <Route path="face-registration" element={<FaceRegistration />} />
                    <Route path="live-detection" element={<LiveDetection />} />
                    <Route path="attendance-logs" element={<AttendanceLogs />} />
                    <Route path="monthly-summary" element={<MonthlySummary />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
