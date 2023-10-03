import React, { useState } from "react";
import "./userProfile.css"; // Import the CSS file for styling

interface UserProfileProps {
  user: string;
  email: string;
  pfp: string;
  setPfp: (url: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  email,
  pfp,
  setPfp,
  isOpen,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  const truncateFileName = (name: string): string => {
    const maxLength = 15; // Adjust this value according to your preference

    if (name.length <= maxLength) return name;

    const extension = name.split('.').pop()!;
    const mainName = name.substr(0, name.length - extension.length - 1); // name without the extension

    // Calculate the number of characters we can take from the mainName before and after the '...'
    const sliceLength = (maxLength - 4) / 2; // 4 accounts for the length of '...' and the dot of the extension

    return `${mainName.substr(0, sliceLength)}...${mainName.substr(-sliceLength)}.${extension}`;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      setError(''); // Reset error
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('profilePic', selectedFile);

    try {
      const response = await fetch("http://localhost:3001/api/user/uploadPfp", {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      const data = await response.json();

      if (data.status === "ok") {
        // Refresh the profile picture
        setPfp(data.fileUrl);
      } else {
        setError(data.error || "Failed to upload profile picture.");
      }
    } catch (err) {
      console.error("Error uploading image:", err);
      setError("An error occurred while uploading the image.");
    }
  };

  const logoutUser = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        //alert(data.message);
        window.location.href = "/";
      } 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`profileModal ${isOpen ? 'open' : 'closed'}`}>
      <div className="profileModal-content">
        <span className="closeProfile" onClick={onClose}>&times;</span>
        <h2 className="UserProfileHeader">My Profile</h2>

        <div className="pfpContainer">
          <img src={pfp === "/images/SoneDefaultPFP.png" ? "/images/SoneDefaultPFP.png" : pfp} alt="User's profile" />
          <form className="uploadForm" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="customFileInput">
                Choose File
                <input type="file" onChange={handleFileChange} />
              </label>
              <span className="fileNameDisplay">{selectedFile && truncateFileName(selectedFile.name)}</span>
            </div>
            <button className="uploadButton" type="button" onClick={handleUpload}>Upload</button>
          </form>
          {error && <p className="errorMsg">{error}</p>}
        </div>

        <div className="profile-details">
          <p><strong>Username:</strong> {user}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>

        <button className="logout-button" onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
}

export default UserProfile;
