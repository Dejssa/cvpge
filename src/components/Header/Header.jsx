import React from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Divider,
  Typography,

  Container,
  Stack,
} from '@mui/material'
import sx from './sx'

const Header = () => {
  return (
    <AppBar sx={sx.bar}>
      <Toolbar>
        <Container maxWidth="lg">
          <Stack direction="row">
            <Box sx={sx.container}>
              <Box sx={sx.person}>
                <Typography variant="subtitle1">
                  <Stack direction="row">
                    Aliaksei Kapura
                    <Divider orientation="vertical" sx={sx.divider} />
                    Full-stack developer
                  </Stack>
                </Typography>
              </Box>
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
