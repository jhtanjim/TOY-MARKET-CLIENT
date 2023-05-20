import React from 'react';

const AllToysRow = ({ toy }) => {
    const { seller, name, category, price, quantity, photo, email } = toy;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo || '-'} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{seller || '-'}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button className="btn btn-primary btn-xs">Details</button>
            </td>
        </tr>
    );
};

export default AllToysRow;
