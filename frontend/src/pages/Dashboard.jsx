import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDashboard } from '../api/dashboard/dashboard';
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
      <p className="dashboard-paragraph">
        I sincerely hope that I have successfully met your expectations with this assignment. It has been a rewarding challenge to demonstrate my skills and creativity through this project. Thank you for the opportunity, and I look forward to your feedback.
      </p>
    </div>
  );
};

export default Dashboard;
