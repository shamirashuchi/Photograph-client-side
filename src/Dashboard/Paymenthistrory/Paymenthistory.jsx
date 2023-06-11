import React from 'react';
import usePayment from '../../Hooks/usePayment';
import Myenrollclass from '../Myenrollclass';


const Paymenthistory = () => {
  const [paymentdata, refetch] = usePayment();

  if (!paymentdata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {paymentdata.map((item) => (
        <Myenrollclass key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Paymenthistory;
