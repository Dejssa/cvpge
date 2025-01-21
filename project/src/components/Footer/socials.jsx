import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import VK from 'icons/vk'

export default (t = v => v) => [
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
    text: 'Instagram.',
  },
  {
    link: 'https://music.yandex.by/users/dejss/playlists',
    icon: <LibraryMusicIcon />,
    text: 'Yandex Music',
  },
]
