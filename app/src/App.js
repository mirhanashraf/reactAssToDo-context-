import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import TodoForm from './components/Todo/Form';
import TodoList from './components/Todo/List';
import Completed from './components/Todo/completed';
import Deleted from './components/Todo/deleted';


export const myContext = React.createContext({ data: [] });

class App extends React.Component {

  state={
      data:[],
  }
  addtodo=(todo)=>{
    const {data}=this.state;
    this.setState({data:data.concat(todo)});
  }
  completedFn=(id) =>{
      this.state.data.filter(t => (t.id === id)).map(t => { t.completed = true; t.isListed = false });
      const {data}=this.state;
      this.setState({data:data});
  }
  deletedFn=(id)=> {
    debugger
    console.log(this.state)
      this.state.data.filter(t => (t.id === id)).map(t => { t.deleted = true; t.isListed = false });
      const {data}=this.state;
      this.setState({data:data});
  }
  Uncomp=(id)=> {
    
      this.state.data.filter(t => (t.id === id)).map(t => { t.completed = false; t.isListed = true })
      const {data}=this.state;
      this.setState({data});
  }
  Undel=(id)=> {
   
      this.state.data.filter(t => (t.id === id)).map(t => {
        t.deleted = false;
        if(t.completed===false)
        {
          t.isListed=true;
        }
      })
      const {data}=this.state;
      this.setState({data}); 
  }
  render() {
    const value={
      state:this.state,
      addtodo:this.addtodo,
      completed:this.completedFn,
      deleted:this.deletedFn,
      Uncomp:this.Uncomp,
      Undel:this.Undel,
    }
    return (
      <myContext.Provider value={value}>
        <Router>
          <Switch>
            <Route exact path="/" component={TodoForm} />
          </Switch>
        </Router>
        <TodoList />
        <Completed/>
        <Deleted/> 
      </myContext.Provider>
    )
  }
}

export default App;
