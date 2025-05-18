import React from 'react';

const Equipment = ({ equipment, equipments, setEquipments }) => {

    const { name, image, description, price } = equipment;

    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-56 h-56" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className='btn btn-dash'>Edit</button>
                        <button className="btn btn-primary">Details</button>
                        <button className="btn btn-error">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;