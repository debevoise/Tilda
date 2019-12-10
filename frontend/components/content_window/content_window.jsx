import React from 'react';
import GreetingContainer from '../greeting_bar/greeting_container'
import GreetingBar from '../greeting_bar/greeting_bar';

const ContentWindow = (props) => {
    return (
      <section id="content-window">
        <GreetingBar />
      </section>
    );
}

export default ContentWindow;