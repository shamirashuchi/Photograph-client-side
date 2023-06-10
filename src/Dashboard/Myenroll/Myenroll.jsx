import React from 'react';
import usePayment from '../../Hooks/usePayment';
import Myenrollclass from '../Myenrollclass';

const Myenroll = () => {
    const [paymentdata, refetch] = usePayment();

    return (
        <div>
            {paymentdata.map(item => (
                <Myenrollclass
                    key={item._id}
                    item={item}
                />
            ))}
        </div>
    );
};

export default Myenroll;
