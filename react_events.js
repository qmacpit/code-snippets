/**
 * PARENT
 */

class Parent {

  handleUpstreamEvent() {
    console.log('event from child')
  }

  bindDownstreamEventDispatcher(dispatcher) {
    this.dispatchDownstreamEvent = dispatcher;
  }

  someEvent() {
    this.dispatchDownstreamEvent();
  }

  render() {
    return (
      <Child
        dispatchUpstreamEvent={this.handleUpstreamEvent}
        bindDownstreamEventDispatcher={this.bindDownstreamEventDispatcher}
      />
    )
  }

}

 /**
  * CHILD
  */

class Child {

  compontentDidMount() {
    this.props.bindDownstreamEventDispatcher(this.handleDownStreamEvent)
  }

  handleDownStreamEvent() {
    console.log('event from parent')
  }

  onButtonClicked() {
    this.props.dispatchUpstreamEvent()
  }

  render() {
    return (
      <div onClick={this.onButtonClicked}>
    )
  }

}
