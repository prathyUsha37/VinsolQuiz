import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Quiz } from './Quiz'

const useStyles = makeStyles((theme) =>
createStyles({
	heading: {
	marginTop: theme.spacing(1),
	position: 'absolute',
	textAlign: 'center',
	padding: '5px',
	},
	screens: {
		position: 'relative',
		marginTop: theme.spacing(4),
		padding: '5px',
		height: '100%',
	}
}),
);

export default function TwoSplitScreen() {
const classes = useStyles();

return (
	<div style={{margin: '30px'}}>
	<Grid container spacing={3}>
		<Grid item xs={12}>
		<Paper className={classes.heading}>
			VinSol Quiz
		</Paper>
		</Grid>
		<Grid item xs={6} sm={6}>
		<Paper className={classes.screens}><Quiz /></Paper>
		</Grid>
		<Grid item xs={6} sm={6}>
		<Paper className={classes.screens}><Quiz /></Paper>
		</Grid>
	</Grid>
	</div>
);
}
