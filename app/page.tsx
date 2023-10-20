import React from 'react'
import Nav from './pages/Nav'
import Main from './pages/page'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-6 border h-screen">
        <div className="col-span-1 flex flex-col items-center justify-center border">
          <Nav/>
        </div>
        <div className="col-span-5 border">
          <Main/>
        </div>
      </div>
    </>
  )
}
