import React from 'react'

import {
  AppBar,
  Box,
  Container,
  Divider,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import socials from './socials'
import sx from './sx'

function SocialIcon({ item }) {
  return (
    <Tooltip title={item.text}>
      <Typography
        sx={sx.social}
        target="_blank"
        href={item.link}
        component="a"
      >
        {item.icon}
      </Typography>
    </Tooltip>
  )
}

function Footer() {
  const { t } = useTranslation('footer')

  return (
    <Box sx={sx.section}>
      <Container maxWidth="sm">
        <Stack
          sx={sx.content}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {socials(t).map(item => <SocialIcon key={item.text} item={item} />)}
        </Stack>
        <Stack
          sx={sx.content}
          alignItems="center"
        >
          <Typography variant="caption" sx={sx.poweredText}>
            {t('title')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
