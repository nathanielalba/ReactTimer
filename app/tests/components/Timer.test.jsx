var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('countStatus', () => {

    it('should start timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);

      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.countStatus).toBe('started');
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);

      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.countStatus).toBe('started');
        expect(timer.state.count).toBe(1);

        timer.handleStatusChange('paused');
        setTimeout(() => {
          expect(timer.state.countStatus).toBe('paused');
          expect(timer.state.count).toBe(1);
          done();
        }, 1001);
      }, 1001);
    });

    it('should clear timer on stopped status', () => {
      var timer = TestUtils.renderIntoDocument(<Timer />);

      timer.handleStatusChange('started');
      expect(timer.state.countStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);
      }, 1001);
    });
  });
});
