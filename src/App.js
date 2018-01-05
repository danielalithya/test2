import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Biggify extends Component {
  render() {
    return (<div>
         <h1>{this.props.bigText}</h1>
         </div>);
  }

}

class Greeter extends Component {

  constructor(props) {
    super(props);
   }

  submit = () => {
    let name = this.nameInput.value;
    /*
    if (this.props.font == "bold") this.greet.innerHTML = "hello " + "<b>" + name + "</b>";
    else this.greet.innerHTML = "hello " + "<u>" + name + "</u>";
    */
    let htmlbegintag = "";
    let htmlendtag = "";

    switch(this.props.font){
      case "bold": htmlbegintag = "<b>"
         htmlendtag = "</b>"
         break;
      case "underline": htmlbegintag = "<u>"
         htmlendtag = "</u>"
         break;
      case "italic": htmlbegintag = "<i>"
         htmlendtag = "</i>"
         break;
      case "*": htmlbegintag = "<h1>"
         htmlendtag = "</h1>"
         break;
      }
      this.greet.innerHTML = "hello " + htmlbegintag + name + htmlendtag;
  
  }

  render() {
    return (<div><p>Enter a name:<input ref={r => this.nameInput = r} />
      <button onClick={this.submit}> click </button>
      <div ref={r => this.greet = r} />
      </p></div>
    );
  }
}

class MainApp extends Component {
  render() {
    return (<div><Greeter font="bold"/>
                  <Greeter font="underline"/>
                  <Greeter font="italic"/>                  
            </div>);
  }

}

export default MainApp;
