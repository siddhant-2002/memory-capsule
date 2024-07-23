import React, { useState } from 'react';

function Capsules() {
//   const [folders, setFolders] = useState([]);
  const [folderCount, setFolderCount] = useState(1);

  const createFolder = () => {
    const newFolderName = `Folder ${folderCount}`;
    setFolders([...folders, newFolderName]);
    setFolderCount(folderCount + 1);
  };

  const [folders, setFolders] = useState([]); // Example folder names
  const [editingIndex, setEditingIndex] = useState(null); // State to track editing
  const [editValue, setEditValue] = useState(""); // State to hold the edited value

  const editFolder = (index) => {
    setEditingIndex(index); // Set the current editing index
    setEditValue(folders[index]); // Initialize the input with the folder's current name
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value); // Update the edit value as the user types
  };

  const saveEdit = (index) => {
    const updatedFolders = [...folders]; // Copy the current folders
    updatedFolders[index] = editValue; // Update the folder name
    setFolders(updatedFolders); // Save the updated folders
    setEditingIndex(null); // Reset editing state
  };


  const [visibleMenu, setVisibleMenu] = useState(null); // Step 1: State to track the visible menu

  // Step 2: Implement the toggleMenu function
  const toggleMenu = (index) => {
    if (index) {
      // Optionally, ensure the menu for the first index is always closed
      setVisibleMenu(null);

    }
    if (visibleMenu === index) {
      // If the menu is already open, close it
      setVisibleMenu(null);
    } else {
      // Otherwise, open the menu for the clicked card
      setVisibleMenu(index);
    }
  };

//   const editFolder = (index) => {
//     // Placeholder for edit functionality
//     // For now, just log the action
//     console.log(`Edit folder at index: ${index}`);
//     // Here you would implement the actual edit logic, possibly setting up a modal or input prompt for the user to enter a new name
//   };

  const deleteFolder = (index) => {
    // Remove the folder from the array
    const updatedFolders = folders.filter((_, folderIndex) => folderIndex !== index);
    setFolders(updatedFolders);
  };

  return (
    <div className="p-4 flex flex-col w-full">
      <div className="flex flex-wrap -m-2 overflow-auto h-[100%]">
        {folders.map((folder, index) => (
          <div key={index} className="p-2 w-1/4">
            <div className="relative flex flex-col h-48 w-full bg-blue-500 rounded-lg shadow-md">
              <button onClick={() => toggleMenu(index)} className="absolute top-0 right-0 m-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4zm0-8a2 2 0 100 4 2 2 0 000-4zm0 8a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
              </button>

              {editingIndex === index ? (
            <div>
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
                onBlur={() => saveEdit(index)} // Save on input blur
                autoFocus
              />
            </div>
          ) : (
            <div>
              {folder}
              <button onClick={() => editFolder(index)}>Edit</button>
            </div>
          )}

              {visibleMenu === index && (
                <div className="absolute top-8 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
                  <button onClick={() => editFolder(index)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Edit</button>
                  <button onClick={() => deleteFolder(index)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Delete</button>
                </div>
              )}
              <div className="flex-grow flex items-center justify-center text-white">
                {/* Content area */}
              </div>
              <div className="p-2 bg-blue-700 text-white text-sm">
                {folder}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-end p-4'>
        <button
            onClick={createFolder}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Create Folder
        </button>
      </div>
    </div>
  );
}

export default Capsules;
