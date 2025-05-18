import { useLoaderData } from 'react-router-dom';
import Equipment from './Equipment';
import { useState } from 'react';

const Equipments = () => {

    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments)
    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10 lg:mx-4 mx-2'>
            {
                loadedEquipments.map(equipment => <Equipment
                    key={loadedEquipments._id}
                    equipment={equipment}
                    equipments={equipments}
                    setEquipments={setEquipments}
                ></Equipment>)
            }
            
        </div>
    );
};

export default Equipments;