import React, { useState } from 'react';

const CouponForm = ({ onAddCoupon }) => {
    const [brand, setBrand] = useState('');
    const [couponTitle, setCouponTitle] = useState('');
    const [couponValue, setCouponValue] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };

    const handleCouponTitleChange = (event) => {
        setCouponTitle(event.target.value);
    };

    const handleCouponValueChange = (event) => {
        setCouponValue(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const coupon = {
            brand,
            couponTitle,
            couponValue,
            startDate,
            endDate,
            description,
        };

        // Pass the coupon data to the parent component
        onAddCoupon(coupon);

        // Clear the form fields after submitting
        setBrand('');
        setCouponTitle('');
        setCouponValue('');
        setStartDate('');
        setEndDate('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="brand">Brand:</label>
                <select id="brand" value={brand} onChange={handleBrandChange} required>
                    <option value="">Select a brand</option>
                    <option value="DMart">DMart</option>
                    <option value="Reliance Fresh">Reliance Fresh</option>
                    <option value="Zara">Zara</option>
                    <option value="Pantaloons">Pantaloons</option>
                    <option value="Westsides">Westsides</option>
                </select>
            </div>
            <div>
                <label htmlFor="couponTitle">Coupon Title:</label>
                <input
                    type="text"
                    id="couponTitle"
                    value={couponTitle}
                    onChange={handleCouponTitleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="couponValue">Coupon Value (%):</label>
                <input
                    type="number"
                    id="couponValue"
                    value={couponValue}
                    onChange={handleCouponValueChange}
                    min="1"
                    max="100"
                    required
                />
            </div>
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={handleStartDateChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={handleEndDateChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </div>
            <button type="submit">Add Coupon</button>
        </form>
    );
};

export default CouponForm;

