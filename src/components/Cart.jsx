import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../lib/slices/productsSlice'

function Cart() {
    const { cart } = useSelector(state => state.products)
    const dispatch = useDispatch()

    function handleDelete(id) {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='container mt-[60px]'>
            <h1 className='text-[40px] font-bold text-[brown]'>Cart Page</h1>
            <div className='mt-[45px] grid grid-cols-4 gap-5 mt-5'>
                {
                    cart.length > 0 && cart.map((item, index) => {
                        return (
                            <div key={index} className='mx-auto hover:shadow-xl transition-all hover:border-primary border border-transparent shadow relative rounded-2xl w-full max-w-[350px]'>
                                <div className='aspect-square mx-auto max-h-[300px] p-4 rounded-xl overflow-hidden'>
                                    <img
                                        src={item.image}
                                        className='w-full h-full object-contain'
                                        alt={item.title}
                                    />
                                </div>
                                <div className='px-5 pb-16'>
                                    <h3 className='text-primary font-semibold text-lg line-clamp-2'>
                                        {item.title}
                                    </h3>
                                    <p>{item.category}</p>
                                    <div className='flex absolute bottom-0 left-0 right-0 px-5 pb-5 justify-between items-center'>
                                        <span className='text-3xl text-primary font-semibold'>
                                            {item.price} ₽
                                        </span>
                                        <button onClick={() => handleDelete(item.id)} className='fa fa-trash rounded-full p-3 cursor-pointer bg-violet-300'></button>
                                    </div>
                                    <span className='font-bold'>Quantity: {item.quantity}</span> <br />
                                    <span className='font-bold'>Total: {item.price * item.quantity}₽</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart