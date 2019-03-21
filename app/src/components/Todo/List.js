import React from 'react';
import {myContext} from '../../App';


export class TodoList extends React.Component {
  comp=(completed)=>(e)=>{
    const id=e.target.dataset.id;
    console.log(id);
    completed(id);

  }
  del=(deleted)=>(e)=>{
    const id=e.target.dataset.id;
    console.log(id);
    deleted(id);

  }
  render() {
    return (
      <myContext.Consumer>
        {value => (
          <React.Fragment>

            <h1>List</h1>
            {
              value.state.data.filter(t => (t.isListed === true)).map(t =>
                <p key={t.text}>{t.text}
                  <button data-id={t.id} onClick={this.comp(value.completed)}>completed</button>
                  <button data-id={t.id} onClick={this.del(value.deleted)}>delete</button></p>

              )
            }
          </React.Fragment>
          )
        }
      </myContext.Consumer>
    )
  }
}

export default TodoList;
