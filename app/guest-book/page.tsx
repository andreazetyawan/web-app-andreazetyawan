'use client'

import { useState, useEffect } from "react";

interface DataPage {
  title: string | null;
  description: string | null;
}

function Dashboard(datapage : DataPage) {

  const [data, setData] = useState(datapage)
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
 
  return (
    <div>
      {data.title}
      {data.description}
    </div>
  );
}

export default Dashboard;