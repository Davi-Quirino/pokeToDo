import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';

export default class TodoInput extends Component {
    render() {
        const{item, handleChange, handleSubmit, classes} = this.props
        return (
            <div className="card card-body my-3"style={{background:'#f30e00'}}>
                <form onSubmit={handleSubmit}>
                    <div className="input-group" >
                    <div className="input-group-prepend">
                    <div className="input-group-text" style={{background:'#000000'}}>
                    <Avatar src='https://pokemonrpgtoop.weebly.com/uploads/1/5/8/2/15821202/2363559.png' style={{width:20, height:20}}   />
                    </div>
                    </div>
                    <input 
                    type="text" 
                    className="form-control text-capitalize"
                     placeholder="Adiciona uma nova atividade"
                     value={item}
                     onChange={handleChange}
                     />
                    </div>
                    <button type="submit" className="btn btn-block  mt-3"style={{color:'#ffffff',background:'#000000'}}>
                        Adicionar uma Atividade
                        </button>
                </form>
            </div>
        )
    }
}
