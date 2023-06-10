import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/Authprovider';
import useAxiosSecure from './useAxiosSecure';

const usePayment = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem('access-token');
  const { refetch, data: paymentdata = [] } = useQuery({
    queryKey: ['selects', user?.email],
    enabled: !!user && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymentinfo?email=${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (!loading && !user) {
      console.log('User not available');
    }
  }, [loading, user]);

  console.log(paymentdata);
  return [paymentdata, refetch];
};

export default usePayment;
