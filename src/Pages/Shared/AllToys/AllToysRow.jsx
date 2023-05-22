import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllToysRow = ({ toy }) => {
    const { seller, name, category, price, quantity, photo, email } = toy || {};

    // Get the navigate function from the useNavigate hook
    const navigate = useNavigate();

    // Handle the click event of the "View Details" button
    const handleViewDetails = () => {
        // Redirect the user to the Details Page
        navigate(`/toy/${toy._id}`);
    };

    return (
        <tr>
            <td className="px-2 py-2 sm:px-4 sm:py-2">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10">
                            <img src={photo || '-'} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-sm">{seller || '-'}</div>
                        <div className="text-xs opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-2">
                <div className="text-sm">{name}</div>
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-2">
                <div className="text-sm">{category}</div>
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-2">
                <div className="text-sm">{price}</div>
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-2">
                <div className="text-sm">{quantity}</div>
            </td>
            <td className="px-2 py-2 sm:px-4 sm:py-2">
                <button className="btn btn-primary btn-xs" onClick={handleViewDetails}>
                    Details
                </button>
            </td>
        </tr>
    );
};

export default AllToysRow;
