import React from 'react'

function Protected() {
    const isLoggedIn = false; 
    if (!isLoggedIn) {
        return <h2 style={{ textAlign: 'center', color: 'red' }}>Access Denied</h2>;
      }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to the Protected Page!</h2>
    </div>
  )
}

export default Protected