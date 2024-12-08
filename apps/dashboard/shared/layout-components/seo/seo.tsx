import React from 'react'
import Head from "next/head";
import favicon from '../../../public/assets/images/brand-logos/favicon.ico';

const Seo = ({ title }:any) => {
  let pageTitle = `AbaaTech Solution - ${title}`

  return (
    <Head>
      <title>{pageTitle}</title>
      <link href={favicon.src} rel="icon"></link>
      <meta name="description" content="AbaaTech Admin &amp; Dashboard" />
      <meta name="author" content="AbaaTechnology Solutions" />
      <meta name="keywords" content="admin, user, admin dashboard, protect, finances"></meta>
    </Head>
  )
}

export default Seo;