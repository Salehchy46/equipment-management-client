import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleEquipment = () => {

    const singleEqip = useLoaderData();

    console.log(singleEqip);
    
    const handleBuyProduct = () => {
        Swal.fire({
            title: 'Product added to cart.',
            icon: 'success'
        })
    }

    return (
        <div>
            <div className="hero min-h-2/3">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={singleEqip.image}
                        className="rounded-lg w-80 shadow-2xl"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">Name: {singleEqip.name}</h1>
                        <p className="py-1">
                            Description: {singleEqip.description}
                        </p>
                        <p className='py-1'>Category: {singleEqip.category}</p>
                        <p className='py-1'>Price: {singleEqip.price}</p>
                        <p className='py-1'>rating: {singleEqip.rating}</p>
                        <p className='py-1'>Stock: {singleEqip.stock}</p>
                        <p className='py-1'>Customization: {singleEqip.customization}</p>
                        <p className='py-1'>Produced: {singleEqip.delivery}</p>
                        <button onClick={handleBuyProduct} className="btn mt-2">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEquipment;