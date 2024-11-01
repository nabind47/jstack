import React from "react"

import Navbar from "@/components/global/navbar"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default MainLayout
