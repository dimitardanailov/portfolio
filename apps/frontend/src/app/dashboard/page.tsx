'use client'

import NavBar from '@/components/NavBar'

function Dashboard() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <p>Dashboard1111</p>
      <p>{process.env.test}</p>
    </>
  )
}

export default Dashboard
