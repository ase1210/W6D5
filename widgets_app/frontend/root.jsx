import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Root extends React.Component {
  
  render () {
    const tabs = [
      {title: "Vivi", content: "Jesse"},
      {title: "Drewski", content: "Jesse2"},
      {title: "ViviDrew", content: "Jesse3"}
    ]
    return (
      <div>
        <Clock />
        <Tabs tabs={tabs} />
      </div>
      );
  }
}

export default Root;