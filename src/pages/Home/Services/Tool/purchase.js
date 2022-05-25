import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams()
    const [part, setPart] = useState({})
    useEffect(() => {
        fetch(http://localhost:5000/parts/${id})
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])
    const { title, minOrderQuantity, desc, img, price, available } = part;
    const quantityRef = useRef('')
    const [quantity, setQuantity] = useState(minOrderQuantity)
    const [btnDisable, setBtnDisable] = useState(false)
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newQuantity = quantityRef.current.value || minOrderQuantity;
        if (newQuantity < minOrderQuantity) {
            setBtnDisable(true)
            toast.error(Minimum order ${minOrderQuantity} pieces)
            return
        }
        const orderForm = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            quantity: newQuantity
        }
        console.log(orderForm);

    }
    useEffect(() => {
        if (quantity >= minOrderQuantity) {
            setBtnDisable(false)
        }
    }, [quantity, minOrderQuantity])
    return (
        <>
            <div class="hero  bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img} alt={title} />
                    <div>
                        <h1 class="text-2xl font-bold">{title}</h1>
                        <p>Price: ${price}</p>
                        <p>Available: ${available} pcs.</p>
                        <p>Minimum Order: ${minOrderQuantity} pcs.</p>
                        <p class="py-6">About Product: <br />
                            <span style={{ color: 'gray' }}>{desc}</span>
                        </p>
                    </div>
                </div>
            </div >
            <div className='mx-auto  w-4/5 lg:w-1/2 mt-8'>
                <h1 className='font-bold text-center text-3xl mt-3'>Order Now</h1>
                <div class="card mx-auto mt-3 p-2 bg-base-100 shadow-xl">
                    <form onSubmit={handleSubmit}>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="name" className='my-2'>Name</label>
                            <input type="text" name='name' id='name' placeholder="name" value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                {/* <span class="label-text-alt">Alt label</span> */}
                            </label>
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="email" className='mb-2'>Email</label>
                            <input type="email" name='email' id='email' value={user?.email} disabled placeholder="email" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="address" className='my-2'>Address</label>
                            <input type="text" name='address' id='address' class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="Phone" className='my-2'>Phone</label>
                            <input type="number" name='phone' id='phone' class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control mx-auto text-left w-full max-w-xs">
                            <label htmlFor="quantity" className='my-2'>Order Quantity <span style={{ color: "gray" }}>(minimum {minOrderQuantity} pcs.)</span></label>
                            <input onChange={handleQuantity} placeholder={minOrderQuantity} ref={quantityRef} type="number" name='quantity' id='quantity' class="input input-bordered w-full max-w-xs" />
                        </div>

                        <input disabled={btnDisable} type="submit" value="PLACE ORDER" className='btn btn-primary form-control mx-auto text-left w-full max-w-xs mt-3' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Purchase;