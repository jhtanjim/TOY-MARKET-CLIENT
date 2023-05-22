import React, { useState } from 'react';

const AllToysRow = ({ toy }) => {
    const { seller, name, category, price, quantity, photo, email } = toy || {};

    // State for controlling the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
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
                <button className="btn btn-primary btn-xs" onClick={openModal}>
                    Details
                </button>
            </td>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-75">
                    <div className="bg-white p-6 max-w-sm mx-auto rounded-lg">
                        <h2 className="text-xl font-bold mb-4">{name}</h2>
                        < div className="text-sm mb-2">
                            <img src={photo || '-'} alt="" />
                        </div>
                        <div className="text-sm mb-2">
                            <strong>Seller:</strong> {seller || '-'}
                        </div>
                        <div className="text-sm mb-2">
                            <strong>Email:</strong> {email}
                        </div>
                        <div className="text-sm mb-2">
                            <strong>Category:</strong> {category}
                        </div>
                        <div className="text-sm mb-2">
                            <strong>Price:</strong> {price}
                        </div>
                        <div className="text-sm mb-2">
                            <strong>Quantity:</strong> {quantity}
                        </div>
                        <button className="btn btn-primary btn-sm" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </tr>
    );
};

export default AllToysRow;
