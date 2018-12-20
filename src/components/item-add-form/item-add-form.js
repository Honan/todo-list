import React, {Component} from 'react';

export default class AddItem extends Component{

    clickButton = () => {
        console.log('click');
    };

    render(){
      return <button onClick={this.clickButton}>Нажми меня</button>
    };
}