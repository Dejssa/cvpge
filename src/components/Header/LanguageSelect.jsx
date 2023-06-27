import React, { useCallback, useMemo } from 'react'

import styled from '@emotion/styled'
import { Language } from '@mui/icons-material'
import { MenuItem, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Select = styled(TextField)(theme => ({
  '&.MuiTextField-root': {
    width: 112,
  },
  '&.MuiTextField-root > div > svg ': {
    color: 'white',
    width: 32,
  },
  '&.MuiTextField-root > div': {
    color: 'white',
  },
  '&.MuiTextField-root > div > fieldset': {
    border: 'unset',
  },
}))


function LanguageSelect() {
  const { i18n } = useTranslation()

  const languages = useMemo(() => [
    {
      title: 'Eng',
      code: 'en-US',
    }, {
      title: 'Бел',
      code: 'by-BY',
    }, {
      title: 'Biel',
      code: 'by-LT',
    }], [])

  const handleOnChange = useCallback(event => {
    i18n.changeLanguage(event.target.value)
  }, [i18n])

  const renderOption = useCallback(item => (
    <MenuItem
      key={item.code}
      value={item.code}
    >
      {item.title}
    </MenuItem>
  ), [])

  return (
    <Select
      value={i18n.language}
      onChange={handleOnChange}
      SelectProps={{
        IconComponent: Language,
      }}
      select
    >
      {languages.map(renderOption)}
    </Select>
  )
}

export default LanguageSelect
