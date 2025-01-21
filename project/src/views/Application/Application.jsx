import React, { useState } from 'react'

import AboutMe from 'components/AboutMe'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Projects from 'components/Projects/Projects'
import { Container } from '@mui/material'

const pages = {
  'about': {
    component: AboutMe,
  }, 
  'projects': {
    component: Projects
  }
}

function Application() {
  const [page, setPage] = useState(pages['projects'])

  return (
    <>
      <Header />
      <Container sx={{mt: 12, mb: 4}}>
        <page.component/>
      </Container>
      <Footer />
    </>
  )
}

export default Application
