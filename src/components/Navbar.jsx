import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const user = JSON.parse(localStorage.getItem('users')) || []
	const { cart } = useSelector(state => state.products)

	return (
		<div className='container border-b-2 border-primary flex justify-between items-center py-3'>
			<a href='/' className='flex items-center gap-5 text-primary'>
				<img src='/logo.svg' alt='logo' />
				<div>
					<span className='block text-3xl font-semibold'>Red Clothes</span>
					<span className='text-sm'>Магазин одежды для практики </span>
				</div>
			</a>
			<div className='flex gap-5 items-center text-primary text-2xl'>
				<Link to={'/cart'}>
					<i className='fa me-2 fa-shopping-cart'></i>
					<span>30 595 ₽</span>
				</Link>
				<Link to={'/wishlist'}>
					<i className='fa-regular fa-heart'></i>
				</Link>
				{/* <Link to={'/register'}>
					<i className='fa-regular fa-user'></i>
				</Link> */}

				{
					user.length > 0 && user.map((e, i) => {
						return <span key={i}>{e.username}</span>
					})
				}

				{
					user.length === 0 && <Link to={'/register'}>
						<i className='fa-regular fa-user'></i>
					</Link>
				}
			</div>
		</div>
	);
};

export default Navbar;

