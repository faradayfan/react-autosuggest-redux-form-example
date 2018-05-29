import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';



export default ({ input, ...custom }) => {
  return (
    <Autosuggest getSuggestionValue={suggestion => {
      input.onChange(suggestion.value);
      return suggestion.label;
    }}
      {...custom}
    />);
};