# 🚀 My React.js Learning Journey

Welcome to my React.js study repository! This document outlines key theoretical concepts and practical steps learned throughout my exploration of React, its features, and development practices.

## Table of Contents

1. [Introduction to React](#introduction-to-react)
2. [JSX Syntax](#jsx-syntax)
3. [Components in React](#components-in-react)
4. [Props in React](#props-in-react)
5. [State in React](#state-in-react)
6. [React Lifecycle](#react-lifecycle)
7. [React Hooks](#react-hooks)
8. [React Router](#react-router)
9. [Performance Optimization](#performance-optimization)
10. [Custom Hooks](#custom-hooks)

## Introduction to React

React is a JavaScript library for building user interfaces, primarily for single-page applications (SPAs). It is developed and maintained by Facebook and allows developers to create dynamic and interactive web apps with minimal effort.

### Key Features of React:
- **React DOM**: React DOM is responsible for rendering React components in the browser. It allows React to efficiently update the user interface.
- **React Native**: A framework that allows you to use React to build mobile apps for iOS and Android.
- **Virtual DOM**: React uses a virtual DOM to optimize updates to the real DOM. Instead of directly manipulating the DOM, React creates a lightweight copy (virtual DOM) and compares it with the real DOM to identify changes.
  
### Key Concepts in React:
- **JSX (JavaScript XML)**: JSX allows you to write HTML-like syntax within JavaScript code. JSX is transpiled into regular JavaScript by tools like Babel, which makes it compatible with browsers.
- **Components**: React components are the building blocks of the UI. They can either be **class components** or **functional components**. Each component has its own state, and they are typically organized in a tree structure.
- **Props (Properties)**: Props are used to pass data from a parent component to its child components. Props are immutable, meaning they cannot be modified by the child components.
- **State**: State is used to manage dynamic data within a component. Unlike props, state is mutable and can change over time, triggering re-renders of the component.
- **Hooks**: React hooks are functions that let you "hook into" React features like state and lifecycle methods within functional components. Popular hooks include `useState`, `useEffect`, `useRef`, etc.
- **Reconciliation**: Reconciliation is the process React uses to update the DOM efficiently. React compares the virtual DOM with the real DOM to determine the minimal set of changes needed to update the UI.
- **React Fiber**: React Fiber is the reimplementation of React's core algorithm, designed to improve the performance of the reconciliation process and enable new features like asynchronous rendering.

## JSX Syntax

JSX is a syntax extension that allows you to write HTML-like elements in JavaScript. It is not required in React but is widely used because it makes the code easier to understand.

- JSX elements are written inside parentheses and return a single parent element.
- React components written in JSX can include expressions wrapped in curly braces `{}`.


