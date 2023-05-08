import React from 'react'

import { Book, Person } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Container,
  Divider,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import LanguageSelect from './LanguageSelect'
import sx from './sx'

function Name({ downMD }) {
  const { t } = useTranslation('header')

  if (downMD) {
    return (
      <Stack sx={sx.person}>
        <Typography variant="h6">
          {t('name')}
        </Typography>
        <Typography variant="caption">
          {t('position')}
        </Typography>
      </Stack>
    )
  }

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="subtitle1">
        <Stack direction="row">
          {t('name')}
          <Divider orientation="vertical" sx={sx.divider} />
          {t('position')}
        </Stack>
      </Typography>
    </Stack>
  )
}

function Pages({ downMD }) {
  if (downMD) {
    return null
  }

  return (
    <Tabs>
      <Tab label={<Person />} sx={{ color: 'white' }} />
      <Tab label={<Book />} sx={{ color: 'white' }} />
    </Tabs>
  )
}

function Header() {
  const downMD = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <AppBar sx={sx.bar(downMD)}>
      <Toolbar disableGutters>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Name downMD={downMD} />
            <LanguageSelect />
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
