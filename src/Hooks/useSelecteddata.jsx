import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/Authprovider';
const useSelecteddata = () => {
         const {user,loading} = useContext(AuthContext);
         const { refetch,data} = useQuery({
            queryKey: ['selects', user?.email],
            queryFn: async () => {
                const res = await fetch(`http://localhost:2000/selects?email=${user?.email}`)
                return res.json();
            },
        
})
return [refetch,data]
}

export default useSelecteddata;