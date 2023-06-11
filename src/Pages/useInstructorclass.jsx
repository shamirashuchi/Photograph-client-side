import React from 'react';
import { useQuery } from '@tanstack/react-query';
const useInstructorclass = () => {
         const { refetch,data} = useQuery({
            queryKey: ['class'],
            queryFn: async () => {
                const res = await fetch(`https://photography-school-server-shamirashuchi.vercel.app/class`)
                return res.json();
            },
        
})
return [refetch,data]
}

export default useInstructorclass;