import React, { useEffect, useMemo } from 'react'

import {
  Box,
  Container,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import Translation from 'components/Translation'
import { yearDiff } from 'utils/date'

import sx from './sx'


const companies = [
  {
    title: 'EpolSoft',
    link: 'https://www.epolsoft.com/en/home/',
  },
  {
    title: 'NGrem',
    link: 'http://ngrem.net/',
  },
  {
    title: 'Masteria',
    link: 'https://masteria.by/',
  },
  {
    title: 'QuantaTech',
  },
  {
    title: 'Freelancer',
    current: true,
  },
]

function CompanyLink({ item }) {
  const { t } = useTranslation('body')

  const title = (
    <Typography
      sx={sx.link(item.link, item.current)}
      variant="subtitle2"
      {...item.link && {
        component: 'a',
        href: item.link,
        target: '_blank',
      }}
    >
      {item.title}
    </Typography>
  )

  if (item.current) {
    return (
      <Tooltip title={t('companies.current')}>
        {title}
      </Tooltip>
    )
  }

  return title
}

function AboutMe() {
  const { t } = useTranslation('body')

  useEffect(() => {
    document.title = 'About me'
  }, [])

  const myYearExperience = useMemo(() => {
    const firstWorkDay = new Date(2018, 3, 9)
    const currentDay = new Date()

    return yearDiff(currentDay, firstWorkDay)
  }, [])

  return (
    <Box>
      <Box sx={sx.sectionBlack}>
        <Container maxWidth="lg" sx={sx.sectionBlack}>
          <Stack rowGap={8}>
            <Translation
              t={t}
              variant="h2"
              text="main"
              values={{ years: myYearExperience }}
            />
            <Typography variant="h5">
              {t('responsabilities')}
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box sx={sx.section}>
        <Container maxWidth="lg">
          <Stack rowGap={8}>
            <div>
              <Translation t={t} text="skills.hard" />
              <Translation t={t} text="skills.soft" />
              <Translation t={t} text="skills.past" />
            </div>
            <div>
              <Translation t={t} text="skills.tech.title" />
              <Translation t={t} text="skills.tech.list" />
            </div>
          </Stack>
        </Container>
      </Box>
      <Box sx={sx.sectionBlack}>
        <Container maxWidth="lg">
          <Box>
            <Typography variant="subtitle1">
              {t('companies.title')}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={sx.subSection}
            >
              {companies.map(item => <CompanyLink key={item.title} item={item} />)}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutMe
