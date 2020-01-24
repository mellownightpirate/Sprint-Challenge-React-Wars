# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library for building user interfaces.

React enables developers to create web applications that can change your data without reloading your page. It tries to achieve DOM manipulation by virtual render rather than actual DOM manipulation in order to minimise the number of DOM operations.

This almost always results in much smaller and simpler code base, which leads to less bugs.

As a result, the main advantage of React JS is that it is scalable, simple and fast.

1. What does it mean to think in react?

It means to think in a way that builds big, fast and scalable applications. The React team outline 6-steps to do so.

Step 1 - Creating a simple mock service.
Step 2 − Break the functionality into smaller components (i.e. re-usable, independent blocks of code).
Step 3 − If possible start by making a simple static version.
Step 4 − Identifying the Minimal representation of UI state.
Step 5 − Identify where the state should live.
Step 6 − Add two way data flow if required.

1. Describe state.

The state object is where you store property values that belongs to the component.  It's scope is limited to the component where it is declared.

1. Describe props.

Props can best be defined as a way of passing data from component to component. Once state is passed out of the parent component it becomes a variable 'prop' in the child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A "side effect" is anything that affects something outside the scope of the function being executed. Component side effects are things like API calls, logging, timers, DOM manipulation, event listeners, subscriptions.

You can sync effects in a React component by using an effect hook. A hook is a means of executing custom code (function) that lets you use state and other React features without writing a class. You can decide whether the effect will run just once, only when certain state or with every some state. In other words, with which piece of state it will be synchronised.