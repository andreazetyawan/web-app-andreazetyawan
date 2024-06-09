'use client'

import { useState, useEffect } from "react";


function Dashboard() {

  const [data, setData] = useState({
    title: null,
    description: null
  })
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
 
  if (isLoading) return <p className="pt-16 lg:pt-8">Loading...</p>
  if (!data) return <p className="pt-16 lg:pt-8">No data card...</p>
 
  return (
    <div className="pt-16 lg:pt-8 max-w-4xl text-left px-6">
        <div className="rounded-lg border border-transparent p-4 transition-colors border-white bg-white dark:border-neutral-700 dark:bg-neutral-800/30">      
          <h2 className="text-2xl font-semibold mb-3">
          {data.title}
          </h2>
          <p className="flex mb-3 text-md opacity-50">
          {data.description}
          </p>
        </div>
    </div>
  );
}

export default Dashboard;