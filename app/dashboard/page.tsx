'use client'

import { useState, useEffect } from "react"

function Dashboard() {
  
  const [data, setData] = useState({message:null})
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.andreazetyawan.id/v1', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch(error => console.error('Error:', error));
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <div>
      {data.message}
    </div>
  );
}

export default Dashboard;