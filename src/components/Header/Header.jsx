import React from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Divider,
  Typography,

  Container,
  Stack,
  useMediaQuery,
} from '@mui/material'
import sx from './sx'

const Name = ({ downMD }) => {
  if (downMD) {
    return (
      <Stack sx={sx.person}>
        <Typography variant="h6">
          Aliaksei Kapura
        </Typography>
        <Typography variant="caption">
          Full-stack developer
        </Typography>
      </Stack>
    )
  }

  return (
    <Box sx={sx.person}>
      <Typography variant="subtitle1">
        <Stack direction="row">
          Aliaksei Kapura
          <Divider orientation="vertical" sx={sx.divider} />
          Full-stack developer
        </Stack>
      </Typography>
    </Box>
  )
}

const Header = () => {
  const downMD = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <AppBar sx={sx.bar(downMD)}>
      <Toolbar disableGutters>
        <Container maxWidth="lg">
          <Stack direction="row">
            <Box sx={sx.container}>
              <Name downMD={downMD} />
            </Box>
            {/* <Tabs>
              <Tab label="Item One" sx={{ color: 'white' }} />
              <Tab label="Item Two" sx={{ color: 'white' }} />
            </Tabs> */}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
