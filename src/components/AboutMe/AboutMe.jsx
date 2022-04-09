import React from 'react'
import {
  Box,
  Container,
  Typography,
  Tooltip,
  Stack,
} from '@mui/material'
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
    current: true,
  },
]

const CompanyLink = ({ item }) => {
  const title = (
    <Typography
      sx={sx.link(item.link, item.current)}
      variant="subtitle2"
      {...item.link && {
        component: 'a',
        href: item.link,
      }}
    >
      {item.title}
    </Typography>
  )

  if (item.current) {
    return (
      <Tooltip title="Current work">
        {title}
      </Tooltip>
    )
  }

  return title
}

const AboutMe = ({}) => {
  function getMyYearExperience() {
    const firstWorkDay = new Date(2018, 3, 9)
    const currentDay = new Date(2022, 3, 1)

    return yearDiff(currentDay, firstWorkDay)
  }

  return (
    <Box>
      <Box sx={sx.sectionBlack}>
        <Container maxWidth="lg" sx={{ pt: 16 }}>
          <Box sx={sx.content}>
            <Typography variant="h2">
              Software Developer
              <br />
              {`${getMyYearExperience()} `}
              years of experience.
            </Typography>
          </Box>
          <Box sx={sx.content}>
            <Typography variant="h5">
              I know how to handle with Front-end & Back-end.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={sx.section}>
        <Container maxWidth="lg">
          <Box sx={sx.content}>
            <Typography>
              Currenlty have strong skills in
              <strong> JavaScript </strong>
              and
              <strong> Go </strong>
              .
              <br />
              In addition can do something with
              <strong> PHP </strong>
              and
              <strong> SQL </strong>
              .
            </Typography>
          </Box>
          <Box sx={sx.content}>
            <Typography>
              In past I used to work using
              <strong> C++</strong>
              ,
              <strong> Java</strong>
              ,
              <strong> C#</strong>
              .
            </Typography>
          </Box>
          <Box sx={sx.content}>
            <Typography>
              A-and some techonogies I know:
            </Typography>
            <Typography>
              React, React-Redux, Material-UI, Swagger, Android, Node.js, Webpack, Babel, gRPC, InfluxDB, Kapacitor, Arduino, Spring Boot
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={sx.sectionBlack}>
        <Container maxWidth="lg">
          <Box>
            <Typography variant="subtitle1">
              Companies I worked in:
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
