import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>How to use it</h1>
        <ol className="instructions">
          <li>Go to <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer">Google Takeout</a></li>
          <li>Deselect all products</li>
          <li>Scroll down to <i>YouTube and YouTube Music</i> section and select it</li>
          <li>Click on <i>Multiple formats</i> button</li>
          <li>In a modal find <i>History</i> section and select <b>JSON</b> in a file format dropdown</li>
          <li>Click on <i>All YouTube data included</i> button</li>
          <li>In a modal click on  <i>Deselect all</i> button and select <b>history</b> option</li>
          <li>Go to <b>Next step</b></li>
          <li>Leave the default values and click on <b>Create export</b></li>
          <li>Wait a couple of minutes. You will receive an email from Google Takeout</li>
          <li>Download the file</li>
          <li>Add your Google Takeout file <Link to="/stats">HERE</Link></li>
        </ol>
      </div>
    );
  }
}
