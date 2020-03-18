import React from "./node_modules/react";
import {connect} from "./node_modules/react-redux";
import {bindActionCreators} from "./node_modules/redux";
import {fetchPosts} from "./postActions";
import {isEmpty} from "./node_modules/lodash";

class CustomerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    const {items, isFetching, fetchPosts} = this.props;
    return (
      <div>
        <button onClick={() => fetchPosts()}>
          {isFetching ? "loading....." : "Request data"}
        </button>
        {!isEmpty(items) && !isFetching && (
          <ul>
            {items.map(I => {
              return <li key={I.id}>{I.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.post.items,
    isFetching: state.post.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerComponent); 