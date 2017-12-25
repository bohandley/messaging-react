class Channel extends React.Component{
  onClick(){
    console.log(this);
    console.log('This is ' + this.props.name + ' and it is cool');
  }
  render(){
    // return React.createElement('li', null, 'Channel Name');

    return (
      <li onClick = {this.onClick.bind(this)}>{this.props.name}</li>
    )
  }
}

ReactDOM.render(<Channel name='Hardware Support' toot='Tootyrooty'/>, document.getElementById('app'));