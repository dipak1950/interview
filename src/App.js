import { useState } from 'react';
import './App.css';
import CouponForm from './Components/Coupon/AddCoupon';
import CouponList from './Components/ViewCoupon';

function App() {

  const [coupons, setCoupons] = useState([]);

  const handleAddCoupon = (coupon) => {
    setCoupons([...coupons, coupon]);
  };

  return (
    <div>
      <CouponForm onAddCoupon={handleAddCoupon} />
      <CouponList coupons={coupons} />
    </div>
  );
}

export default App;
