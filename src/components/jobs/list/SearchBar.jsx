import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class SearchBar extends Component {

  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Search"
          fullWidth={false}
        />

      </div>
    );
  }
}

export default SearchBar;
