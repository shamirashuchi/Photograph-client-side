import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();
import { router } from './Routes/Router.jsx';
import Authprovider from './Providers/Authprovider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
)
