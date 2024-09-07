const BASE_URL = import.meta.env.VITE_API_URL;

export const getDashboard = async (token) => {
  try {
    console.log('Fetching dashboard...', BASE_URL);
    
    const response = await fetch(`${BASE_URL}/dashboard`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error('Unauthorized');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    throw error;
  }
};
