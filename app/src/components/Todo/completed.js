import React from 'react';
import { myContext } from '../../App';


export class Completed extends React.Component {
  unComplete=(Uncomp)=>(e)=>{
    const id=e.target.dataset.id;
    console.log(id);
    Uncomp(id);
  }
  del=(deleted)=>(e)=>{
    const id=e.target.dataset.id;
    console.log(id);
    deleted(id);
  }
  render() {
    return (
      <myContext.Consumer>
        {
          value => (
            <React.Fragment>
              <h1>completed</h1>

              {
                value.state.data.filter(t => (t.completed === true && t.deleted === false)).map(t =>
                  <>
                    <p key={t.id}>{t.text}
                      <button data-id={t.id} onClick={this.unComplete(value.Uncomp)}>UNcompleted</button>
                      <button data-id={t.id} onClick={this.del(value.deleted)}>delete</button>
                    </p>
                  </>
                )
              }
            </React.Fragment>
          )
        }
      </myContext.Consumer>
    )
  }
}

export default Completed;