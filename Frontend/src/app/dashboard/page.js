"use client"

import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar';
import MobileMenuBar from './MobileMenuBar';
import Navbar from './Navbar';

export default function Layout({ pageTitle, children }) {
  // Concatenate page title (if exists) to site title
  let titleConcat = "Responsive Sidebar Example";
  if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

  // Mobile sidebar visibility state
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Head>
        <title>{titleConcat}</title>
      </Head>
      <div className="min-h-screen">
        <div className="flex">
          <MobileMenuBar setter={setShowSidebar} />
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <div className="flex min-h-screen">
            {children}
          </div>
          <Navbar/>
        </div>

      </div>
    </>
  )
}
