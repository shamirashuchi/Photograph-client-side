import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/Authprovider';
import useAxiosSecure from './useAxiosSecure';

const useSelecteddata = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem('access-token');
  const { refetch, data: classdata = [] } = useQuery({
    queryKey: ['selects', user?.email],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selects?email=${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (!loading && !user) {
      console.log('User not available');
    }
  }, [loading, user]);

  console.log(classdata);
  return [classdata, refetch];
};

export default useSelecteddata;
