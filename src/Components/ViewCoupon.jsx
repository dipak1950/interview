import React from 'react';

const CouponList = ({ coupons }) => {
    return (
        <div>
            <h2>Coupon List</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Coupon Tilte</th>
                        <th>Percentage</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.map((coupon, index) => (
                        <tr key={index}>
                            <td>{coupon.brand}</td>
                            <td>{coupon.couponTitle}</td>
                            <td>{coupon.couponValue}</td>
                            <td>{coupon.startDate}</td>
                            <td>{coupon.endDate}</td>
                            <td>{coupon.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CouponList;


