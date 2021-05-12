import React from 'react'

import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: '2vh',
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: 'rgb(245, 245, 245,0.9)',
    borderRadius: '1vh',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

export default function Item(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {props.items.map((item) => (
        <Paper key={item.id} className={classes.paper} elevation={5}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt='product_image'
                  src={item.image}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography variant='h6' color='secondary' align='justify'>
                    {item.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='h6'
                    color='secondary'
                    align='justify'>
                    {item.weight}
                  </Typography>
                  <Typography variant='body1' gutterBottom>
                    {item.description}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    Contains: {item.ingredients}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    color='secondary'
                    component={Link}
                    to='/order'>
                    Buy Now
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant='subtitle1'>{`$${item.price}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  )
}
