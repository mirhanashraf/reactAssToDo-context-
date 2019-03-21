import React from 'react';
import {myContext} from '../../App';
export class Deleted extends React.Component{
  Undeleted=(deleted)=>(e)=>{
    const id=e.target.dataset.id;
    console.log(id);
    deleted(id);
  }
render() {
    return (
<myContext.Consumer>
  {
    value=>(
    <React.Fragment>
      <h1>Deleted</h1>
      {
        
        value.state.data.filter(t => (t.deleted === true)).map(t =>
          <>
          
            <p key={t.id}>{t.text}
              <button data-id ={t.id} type="button" onClick={this.Undeleted(value.Undel)}>UnDelete</button>
              
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

  
  export default Deleted;