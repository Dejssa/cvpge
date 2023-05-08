import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@mui/material'
import { Trans } from 'react-i18next'

const components = {
  b: <b />,
}

function Translation({ t, text, values, ...props }) {
  return (
    <Typography {...props}>
      <Trans
        t={t}
        i18nKey={text}
        values={values}
        components={components}
      />
    </Typography>
  )
}

Translation.propTypes = {

}

Translation.defaultProps = {
  values: {},
}

export default Translation
