import React from 'react'

import {
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Switch,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { DateTimePicker } from 'formik-material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import SendIcon from '@material-ui/icons/Send'

const OFFERINGS = require('../../offerings.json')

interface Values {
  email: string;
  password: string;
}

const useStyles = makeStyles({
  root: {
    width: '9vh',
    height: '6vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  track: {
    width: '7vh',
    height: '3vh',
    borderRadius: '2vh',
  },
  switchBase: {
    '&$checked': {
      color: '#91071B',
      transform: 'translateX(4vh)',
    },
    '& + $track': {
      backgroundColor: '#d7ebdd',
    },
  },
  checked: {},
  thumb: {
    width: '4vh',
    height: '4vh',
    transform: 'translateX(0px)',
  },
})

const formStyle = {
  backgroundColor: 'rgb(245, 245, 245,0.9)',
  borderRadius: '1vh',
  padding: '1vh',
}

const textInputStyle = {
  margin: '0.5vh',
  display: 'flex',
}

export default function Order() {
  /*  const [product, setProduct] = useState('')
 const handleChange = (event) => {
    setProduct(event.target.value)
  } */
  const classes = useStyles()

  return (
    <>
      <Grid container justify='center'>
        Pickup
        <Switch
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            checked: classes.checked,
            track: classes.track,
            thumb: classes.thumb,
          }}
        />
        Delivery
      </Grid>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          telephone: '',
          cart: '',
          qty: undefined,
          dateTime: new Date(),
        }}
        validate={(values) => {
          const errors: Partial<Values> = {}
          if (!values.email) {
            errors.email = 'Enter your email'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            alert(JSON.stringify(values, null, 2))
          }, 1000)
        }}>
        {({ submitForm, isSubmitting }) => (
          <Form style={formStyle}>
            <Grid container align='center'>
              <Grid item xs={12} sm={6}>
                <Field
                  variant='outlined'
                  style={textInputStyle}
                  component={TextField}
                  name='firstname'
                  type='firstname'
                  label='First Name'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  variant='outlined'
                  style={textInputStyle}
                  component={TextField}
                  name='lastname'
                  type='lastname'
                  label='Last Name'
                />
              </Grid>
            </Grid>
            <Grid container align='center'>
              <Grid item xs={12} sm={6}>
                <Field
                  variant='outlined'
                  style={textInputStyle}
                  component={TextField}
                  name='email'
                  type='email'
                  label='Email'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  variant='outlined'
                  style={textInputStyle}
                  component={TextField}
                  name='telephone'
                  type='telephone'
                  label='Contact Number'
                />
              </Grid>
            </Grid>
            <Grid container align='center'>
              <Grid item xs={12} sm={6}>
                <Field
                  variant='outlined'
                  style={textInputStyle}
                  component={TextField}
                  select
                  name='cart'
                  type='cart'
                  label='Select Product'>
                  {OFFERINGS.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  variant='outlined'
                  style={textInputStyle}
                  component={TextField}
                  name='qty'
                  type='number'
                  label='Qty'
                />
              </Grid>
            </Grid>
            <Grid item xs={12} align='center'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Field
                  inputVariant='outlined'
                  style={textInputStyle}
                  component={DateTimePicker}
                  name='dateTime'
                  label='Pick-Up Time'
                  disablePast
                />
              </MuiPickersUtilsProvider>
            </Grid>
            {isSubmitting && (
              <Grid item xs={12} align='center'>
                <CircularProgress color='secondary' />
              </Grid>
            )}
            <Grid item xs={12} align='center'>
              <Button
                size='large'
                variant='contained'
                color='secondary'
                disabled={isSubmitting}
                onClick={submitForm}
                endIcon={<SendIcon />}>
                Submit
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  )
}
