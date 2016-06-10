import React from 'react';
import {render} from 'react-dom';
import ExampleComponent from './components/ExampleComponent.jsx'
import TodoList from './components/TodoList.jsx'

render(<ExampleComponent />, document.getElementById('ExampleComponent'));
render(<TodoList />, document.getElementById('TodoList'));
