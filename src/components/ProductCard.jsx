import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addWishlist, removeWishlist } from '../lib/slices/productsSlice';
import { setToLocal } from '../lib/ls';

const ProductCard = ({ p }) => {
	const dispatch = useDispatch();
	const { wishlist } = useSelector(state => state.products);
	const { cart } = useSelector(state => state.products)

	const addWishlistHandler = product => {
		const item = wishlist.find(w => w.id == product.id);
		if (item) {
			dispatch(removeWishlist(product.id));
		} else {
			dispatch(addWishlist(product));
		}
	};
	const hasWishlist = id => {
		const item = wishlist.find(w => w.id == id);
		return item ? true : false;
	};

	function handleAdderToCart() {
		dispatch(addToCart(p))
		alert('Added to cart')
	}

	return (
		<div className='mx-auto hover:shadow-xl transition-all hover:border-primary border border-transparent shadow relative rounded-2xl w-full max-w-[350px]'>
			<div className='aspect-square mx-auto max-h-[300px] p-4 rounded-xl overflow-hidden'>
				<img
					src={p.image}
					className='w-full h-full object-contain'
					alt={p.title}
				/>
				<button
					className='absolute top-3 cursor-pointer left-3'
					onClick={() => addWishlistHandler(p)}
				>
					<i
						className={`${hasWishlist(p.id) ? 'fa text-red-500' : 'fa-regular'
							} fa-heart`}
					></i>
				</button>
			</div>
			<div className='px-5 pb-16'>
				<h3 className='text-primary font-semibold text-lg line-clamp-2'>
					{p.title}
				</h3>
				<p>{p.category}</p>
				<div className='flex absolute bottom-0 left-0 right-0 px-5 pb-5 justify-between items-center'>
					<span className='text-3xl text-primary font-semibold'>
						{p.price} ₽
					</span>
					<button className='fa fa-cart-plus rounded-full p-3 cursor-pointer bg-violet-300' onClick={handleAdderToCart}></button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
