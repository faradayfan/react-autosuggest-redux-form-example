import React, { Component } from 'react'
import './App.css';
import { withStyles, Input, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ReactAutosuggest from './ReduxAutosuggest'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { handleChange } from './actions'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const styles = () => ({
  demo: {
    width: '300px',
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: {
    width: '100%',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
      // eslint-disable-next-line no-throw-literal
      throw { email: 'Email already Exists' }
    }
  })
}

const validate = (values) => {
  console.log('validating form...', values)
  let errors = {}
  if (!values.demo)
    errors.demo = 'Reqiured'
  console.log('errors', errors)
  return errors
}

const onSuccess = () => {
  console.log('form summited successfully')
}

class App extends Component {
  render() {
    const { classes, handleSubmit, demoValue, handleOnChange } = this.props

    return (
      <div className={this.props.classes.demo}>
        <form onSubmit={handleSubmit(onSuccess)}>
          <Field
            label='Languages'
            name='demo'
            type="text"
            component={({
              input,
              label,
              type,
              meta: { touched, error, warning } }) => (
                <FormControl className={classes.formControl} error aria-describedby="name-error-text">
                  <TextField {...input} className={classes.demo} placeholder={label} type={type} />
                  {touched && error && <FormHelperText id="name-error-text">{error}</FormHelperText>}
                </FormControl>
              )}
          />
          <Button type='submit' className={classes.button}>
            Submit
          </Button>
        </form>
      </div>
    )
  }
}


export default reduxForm({
  validate,
  form: 'demo-form'
})(withStyles(styles)(App))