import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIdx: 0
    }
  }
  
  render() {
    return (
      <div>
        <ul>
        {this.props.tabs.map(tab => {
          return (
          <div>
            <h1>{tab.title}</h1>
            <article>{tab.content}</article>
          </div>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default Tabs;