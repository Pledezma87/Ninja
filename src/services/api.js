import axios from 'axios';

const ApiService = {
  getUsers: async () => {
    try {
      const response = await axios.get('https://randomuser.me/api?results=5&noinfo');
      return response.data.results;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
  
  getUserById: async (userId) => {
    try {
      const response = await axios.get(`https://randomuser.me/api?id=${userId}`);
      return response.data.results[0];
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  }
};

export default ApiService;
