import React from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Tooltip,
  Typography,
  Container,
  Divider,
  Stack,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import VK from 'icons/vk'
import sx from './sx'

const socials = [
  {
    link: 'https://www.linkedin.com/in/dejssa/',
    icon: <LinkedInIcon />,
    text: 'LinkedIn',
  },
  {
    link: 'https://vk.com/dejssa',
    icon: <VK />,
    text: 'VKontakte',
  },
  {
    link: 'https://t.me/Dejssa',
    icon: <TelegramIcon />,
    text: 'Telegram',
  },
  {
    link: 'https://github.com/Dejssa',
    icon: <GitHubIcon />,
    text: 'GitHub',
  },
  {
    link: 'https://www.instagram.com/dejssa_/',
    icon: <InstagramIcon />,
    text: 'Instagram. Just a crap. Was once here.',
  },
  {
    link: 'https://music.yandex.by/users/dejss/playlists',
    icon: <LibraryMusicIcon />,
    text: 'Yandex Music',
  },
]

const SocialIcon = ({ item }) => (
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

const Footer = () => {
  return (
    <Box sx={sx.section}>
      <Container maxWidth="sm">
        <Stack
          sx={sx.content}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {socials.map(item => <SocialIcon key={item.text} item={item} />)}
        </Stack>
        <Stack
          sx={sx.content}
          alignItems="center"
        >
          <Typography variant="caption" sx={sx.poweredText}>
            Powered on React & Material-UI by Me
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
