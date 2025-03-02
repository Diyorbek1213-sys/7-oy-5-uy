import { createSlice } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";

const initialState = {
	products: null,
	isLoading: false,
	error: null,
	wishlist: [],
	cart: []
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setWishlist: (state, action) => {
			state.wishlist = action.payload;
		},
		addWishlist: (state, action) => {
			state.wishlist = [...state.wishlist, action.payload];
		},
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		removeWishlist: (state, action) => {
			state.wishlist = state.wishlist.filter(w => w.id != action.payload);
		},
		addToCart: (state, action) => {
			const item = state.cart.find(c => c.id === action.payload.id)
			if (item) {
				item.quantity += 1
			} else {
				state.cart.push({...action.payload, quantity: 1})
			}
		},
		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(w => w.id !== action.payload)
			storage.setItem("persist:root", JSON.stringify(state))
		}
	},
});

export const {
	setProducts,
	setWishlist,
	removeWishlist,
	setError,
	setIsLoading,
	addWishlist,
	addToCart,
	removeFromCart
} = productsSlice.actions;
export default productsSlice.reducer;
