import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Users = () => {

    const { isPending, isError, error, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    })

    if (isPending) {
        return <span className="loading loading-dots loading-xl"></span>
    }
    // cosnt [users, setUsers] = useState([]);

    if (isError) {
        return <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error.message}</span>
        </div>
    }

    const handleUserDelete = id => {
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
                fetch(`equipment-management-server.vercel.app/users/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                        }
                    });
            }
        });
    };

    return (
        <div>
            {/* <h2 className='text-3xl font-bold text-center m-4'>My User List: {users.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user._id} className='items-center'>
                                    <th>{index + 1}</th>
                                    <td><img src={user.image || 'data:image/jpeg;base64,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'} className='rounded-full w-10 h-10' alt="User" /></td>
                                    <td>{user.name || 'Anonymous'}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td>
                                        <button onClick={() => handleUserDelete(user._id)} className='btn btn-sm btn-error'>X</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;