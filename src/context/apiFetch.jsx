import { useNavigate } from "react-router-dom";

// Centralized fetch function
async function apiFetch(url, options = {}) {
    const token = localStorage.getItem('token');
  
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  
    const finalOptions = { ...defaultOptions, ...options };
  
    try {
      const response = await fetch(url, finalOptions);
  
      if (response.status === 401 || response.status === 403) {
        alert('Session expired or insufficient permissions. Please log in again.');
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName'); // Remove the user's name
        window.location.href = '/login-signup';
        return;
      }
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      alert('An error occurred while processing your request.');
    }
  }
  
  

export default apiFetch;
