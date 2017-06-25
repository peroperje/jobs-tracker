import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';

/**
 * @description propTypes for SearchBar
 * @type {{handleSerachChange: (*)}}
 */
const propTypes = {
  handleSerachChange: PropTypes.func.isRequired,
  handleClearSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

/**
 * @class SearchBar
 * @extends React.Component
 * @description Render component
 */
class SearchBar extends Component {

  /**
   * @description Handle Search input change
   * @param {Object} e Synthetic event
   */
  handleInputChange = (e) => {
    this.props.handleSerachChange(e.target.value);
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Search"
          fullWidth={false}
          onChange={this.handleInputChange}
          value={this.props.search}
        />
        <IconButton onClick={this.props.handleClearSearch}>
          <ActionHighlightOff/>
        </IconButton>
      </div>
    );
  }
}

SearchBar.propTypes = propTypes;

export default SearchBar;
