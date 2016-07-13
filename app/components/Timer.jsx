var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      countStatus: 'stopped',
      count: 0
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countStatus !== prevState.countStatus) {
      switch (this.state.countStatus) {
      case 'started':
        this.startTimer();
        break;
      case 'stopped':
        this.setState({ count: 0, countStatus: 'paused' });
      case 'paused':
        clearInterval(this.timer);
        this.timer = undefined;
        break;
      }
    }
  },
  componentWillUnMount: function() {
    clearInterval(this.timer);
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });

      if (this.state.count === 0) {
        this.setState({
          countStatus: 'stopped'
        });
      };
    }, 1000)
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      countStatus: newStatus
    });
  },
  render: function() {
    var { count, countStatus } = this.state;
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
