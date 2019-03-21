import React from 'react';
import uuidv4 from 'uuid/v4';
import { myContext } from '../../App';

class TodoForm extends React.Component {

  handleSubmit = (addTodo) => (e) => {
    e.preventDefault();
    if (!this.myTextInput.value) return;
    const todo = {
      text: this.myTextInput.value, isListed: true, completed: false, deleted: false, id: uuidv4(),
    };
    addTodo(todo);
  }

  render() {
    return (
      <myContext.Consumer>
        {
          value => (
            <form onSubmit={this.handleSubmit(value.addtodo)}>
              <input type="text" ref={(ref) => this.myTextInput = ref} />
              <button type="submit">Add</button>
            </form>
          )
        }
      </myContext.Consumer>
      );
    }
  }    
      export default TodoForm;
