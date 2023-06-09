import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/Authprovider';

const useSelecteddata = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');
  const { refetch, data: classdata = [] } = useQuery({
    queryKey: ['selects', user?.email],
    enabled: !!user, 
    queryFn: async () => {
      const res = await fetch(`http://localhost:2000/selects?email=${user?.email}`,{ headers: {
                authorization: `bearer ${token}`
             }});
      return res.json();
    },
  });

  useEffect(() => {
    if (!loading && !user) {
      console.log('User not available');
    }
  }, [loading, user]);
console.log(classdata);
  return [classdata,refetch];
};

export default useSelecteddata;
