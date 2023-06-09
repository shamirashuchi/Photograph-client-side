import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/Authprovider';

const useSelecteddata = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: classdata = [] } = useQuery({
    queryKey: ['selects', user?.email],
    enabled: !!user, // Only enable the query if the user object is available
    queryFn: async () => {
      const res = await fetch(`http://localhost:2000/selects?email=${user?.email}`);
      return res.json();
    },
  });

  useEffect(() => {
    if (!loading && !user) {
      // Handle the case when the user is not available during the initial load
      // You can redirect to a login page or show an appropriate message
      console.log('User not available');
    }
  }, [loading, user]);
console.log(classdata);
  return [classdata,refetch];
};

export default useSelecteddata;
