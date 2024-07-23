// ProfilePageWithEdit.jsx
import React, { useState } from 'react';

const initialProfileData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  password: '', // Password is not displayed for security reasons
  dob: '1990-01-01',
  mobile: '123-456-7890',
  profilePhoto: 'https://via.placeholder.com/150', // Placeholder image URL
};

export const Settings = () => {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsEditable(false);
    // Here you would typically send the updated profile data to a server
    console.log('Updated Profile Data:', profileData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData((prevData) => ({
        ...prevData,
        profilePhoto: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Profile Page</h2>
      {!isEditable ? (
        <div>
          <img src={profileData.profilePhoto} alt="Profile" className="mb-4 w-32 h-32 object-cover rounded-full" />
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Bio:</strong> {profileData.bio}</p>
          <p><strong>Date of Birth:</strong> {profileData.dob}</p>
          <p><strong>Mobile No.:</strong> {profileData.mobile}</p>
          <button onClick={handleEdit} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
        </div>
      ) : (
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Profile Photo:</label>
            <input
              type="file"
              name="profilePhoto"
              onChange={handlePhotoChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <img src={profileData.profilePhoto} alt="Profile Preview" className="mt-4 w-32 h-32 object-cover rounded-full" />
          </div>
          {/* Additional form fields for editing */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />  
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Bio:</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={profileData.dob}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mobile No.:</label>
            <input
              type="tel"
              name="mobile"
              value={profileData.mobile}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update Profile</button>
        </form>
      )}
    </div>
  );
};