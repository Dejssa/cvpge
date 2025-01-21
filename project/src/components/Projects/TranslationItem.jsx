import React, { useMemo } from 'react'
import {
	Typography,
	LinearProgress,
	Stack,
	Tooltip,
	Collapse,
} from '@mui/material'

const TranslationItem = ({item}) => {
	let all = 0
	let progress = 0

	item.progress.forEach((progressItem) => {
		all += progressItem.lines
		progress += progressItem.progress
	})

	console.log(progress/all)

	const progressText = useMemo(() => (
		<Stack>
			<Typography>Lines: {all}</Typography>
			<Typography>Translated: {progress}</Typography>
		</Stack>
	))

	return (
		<div>
			<Tooltip title={progressText}>
				<Stack>
					<Stack direction={'row'} columnGap={2} alignItems={'baseline'}>
					<Typography variant='h6'>
						{item.title}
					</Typography>
					<Typography>
						({progress}/{all})
					</Typography>
					</Stack>
						<LinearProgress
							value={(progress/all)*100}
							variant='determinate'
						/>
				</Stack>
			</Tooltip>
		<Collapse>

		</Collapse>
		</div>
	
	)
}

export default TranslationItem