import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "../All.css";

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 ${alertType}` } id = "Remaing">
			<span>Remaining: ₹{budget - totalExpenses}</span>
		</div>
	);
};

export default RemainingBudget;
