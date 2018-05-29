import React, { Component } from 'react'
import './App.css';
import { withStyles, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
// import ReduxAutosuggest from './ReduxAutosuggest'
import { reduxForm, Field } from 'redux-form'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

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
  form: 'demo-form'
})(withStyles(styles)(App))