import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDashboard } from '../api/dashboard/dashboard';
import dashboard from '../assets/dashboard.png';
import '../styles/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log('No token found, redirecting to login');
        navigate('/auth/login'); 
        return;
      }

      try {
        const data = await getDashboard(token);
        console.log('Dashboard data:', data);
      } catch (error) {
        console.log('Redirecting to login');
        navigate('/auth/login');
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome to Your Dashboard</h1>
      <div className="dashboard-image"><img src={dashboard}/></div>
    </div>
  );
};

export default Dashboard;
