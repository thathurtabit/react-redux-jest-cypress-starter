import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';
import FetchDataStyled from './FetchData.styled';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';
import { fetchExampleData } from '../../../state/actions/fetchExampleData';
import { api } from '../../../utils/constants/constants';

const mapStateToProps = state => ({
  response: state.app.data.response,
  fetching: state.app.data.fetching,
  fetchError: state.app.data.fetchError,
});

const mapDispatchToProps = dispatch => ({
  fetchData: endpoint => dispatch(fetchExampleData(endpoint)),
});

class FetchData extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(api); // Fetch
  }

  render() {
    const { response, fetching, fetchError } = this.props;

    return (
      <FetchDataStyled>
        {fetching && <LoadingSmall />}
        {fetchError ? (
          'Fetch error'
        ) : (
          <ul>
            {response.map(item => (
              <li key={uuidv1()}>{item.name}</li>
            ))}
          </ul>
        )}
      </FetchDataStyled>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchData);

FetchData.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetchError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    .isRequired,
  response: PropTypes.arrayOf(PropTypes.object),
};

FetchData.defaultProps = {
  response: [],
};
