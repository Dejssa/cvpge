import React, { useTransition } from 'react'
import translations from './translations'
import TranslationItem from './TranslationItem'
import { Stack } from '@mui/material'

function Projects() {

    console.log('a')

    return (
    <div>
        <Stack rowGap={8}>
        {translations.games.map(item => <TranslationItem item={item}/>)}
        </Stack>
    </div>
    )
}

export default Projects