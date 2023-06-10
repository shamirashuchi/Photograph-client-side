import React from 'react';
import usePayment from '../../Hooks/usePayment';
import Myenrollclass from '../Myenrollclass';
import Myenrolldata from './Myenrolldata';

const Myenroll = () => {
  const [paymentdata, refetch] = usePayment();

  if (!paymentdata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {paymentdata.map((item) => (
        <Myenrolldata key={item._id} item={item} />
      ))}
      {paymentdata.map((item) => (
        <Myenrollclass key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Myenroll;
