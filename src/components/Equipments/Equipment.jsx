import Swal from 'sweetalert2';

const Equipment = ({ equipment, equipments, setEquipments }) => {

    const { _id, name, image, description, price } = equipment;

    const handleDeleteEquipment = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/equipments/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingEquipments = equipments.filter(equip => equip._id !== _id);
                            setEquipments(remainingEquipments);
                        }
                    })
            }
        });
    }

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
                        <button onClick={() => handleDeleteEquipment(_id)} className="btn btn-error">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;