import { common } from '@mui/material/colors'

export default {
  divider: {
    height: 36,
    mx: 2,
    my: 1,
    background: common.white,
  },
  bar: sx => ({
    background: common.black,
    ...sx && {
      height: 90,
    },
  }),
  person: {
    py: 1,
  },
  container: {
    display: 'flex',
    width: 1170,
    m: '0 auto',
  },
}
