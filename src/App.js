import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { withStyles, Paper } from '@material-ui/core';


import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
//import classes from '*.module.css';

class App extends Component {

    state = {
      items: [],
      id: 0,
      item:'',
      editItem:false
    }

    handleChange = (e) => {
      this.setState({
        item:e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()

      const newItem = {
      id:this.state.id,
      title: this.state.item
      }
      console.log(newItem)
      const updateItens = [...this.state.items,newItem]

      this.setState({
        items:updateItens,
        item:'',
        id: this.state.id + 1,
        editItem:false
      })
    }

    clearList = () => {
      this.setState({
        items:[]
      })
    }

  render() {
    const {classes} = this.props
    return (
      
      <div className={classes.content}>
        <Paper className={classes.paper}>
        <div className="row" style={{background:'#f30e00'}}>
          <div className="col-10 mx-auto col-md-8 mt-4" style={{background:'#f30e00'}}>
            <h3 className="text-capitalize text-center" style={{color:'#ffffff'}} >
              Lista Tarefas Pokemons
          </h3>
            <TodoInput 
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
             />
            <TodoList 
            items={this.state.items}
            clearList={this.clearList}
            />
          </div>
        </div>
        </Paper>
      </div>
      
    );
  }
}

const styles = theme => ({
  content: {
    display:'flex',
    justifyContent:'center',
    position: 'relative',
    padding: '90px 2%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        padding: '90px 2%',
    },
},
  paper: {
    width:'40%',
    background:'#f30e00'

  }
})
export default withStyles(styles)(App);
