import React from 'react';

class Answer extends React.Component {
  handleCheck(e) {
    this.props.onCheck({
      ...this.props.data,
    });
  }

  render() {
    return (
      <>
        <div>
          <span>{this.props.data.text}</span>
          <input
            type="checkbox"
            onInput={(e) => this.handleCheck(this.props.data.id, e)}
          />
        </div>
      </>
    );
  }
}

export default Answer;