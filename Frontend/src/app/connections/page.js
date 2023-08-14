"use client"

import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from '../dashboard/Sidebar';
import MobileMenuBar from '../dashboard/MobileMenuBar';
import MainPart from './MainPart';

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
          <MainPart/>
        </div>

      </div>
    </>
  )
}
