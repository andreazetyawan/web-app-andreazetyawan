'use client'

import { useState, useEffect } from "react"
 
export default function Dashboard() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://api.andreazetyawan.id/v1', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed for your application
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
      <h1>{data.message}</h1>
    </div>
  )
}

