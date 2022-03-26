import React from 'react';

const Question = () => {
    return (
        <div>
            <h2>How to react works?</h2>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. React is Component-Based. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
            <p>The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.</p>
            <div>
              <h2> Difference between useState and props ?</h2>
              <p>1) useState may change. And props don't may change. </p>
              <p>2) useState can not change his place. if we want send any component or place, we can send by props</p>
            </div>
        </div>
    );
};

export default Question;