import React from 'react';
const users = [
  { id: 1, name: 'John Doe', profilePic: 'https://via.placeholder.com/150/1' },
  { id: 2, name: 'Jane Smith', profilePic: 'https://via.placeholder.com/150/2' },
  { id: 3, name: 'Alice Johnson', profilePic: 'https://via.placeholder.com/150/3' },
];

const ProfilePic = ({ userId }) => {
  // Find the user based on the given userId
  const user = users.find((user) => user.id === userId);
  const profilePicUrl = user
    ? user.profilePic
    : 'https://via.placeholder.com/150/000000?text=No+Image';

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={profilePicUrl}
        alt={user ? `${user.name}'s Profile` : 'Default Profile'}
        style={{ borderRadius: '50%', width: '100px', height: '100px' }}
      />
      {user && <p>{user.name}</p>}
    </div>
  );
};

export default ProfilePic;
