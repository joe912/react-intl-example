import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as CounterStore from '../store/Counter';
import * as WeatherForecasts from '../store/WeatherForecasts';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

type CounterProps =
    CounterStore.CounterState
    & typeof CounterStore.actionCreators
    & RouteComponentProps<{}>;

class Counter extends React.Component<CounterProps, {}> {
    public render() {
        var currentcount = this.props.count;

        return <div>
                <div>
                    <h1>
                        <FormattedMessage id='counter.title' />
                    </h1>

                    <p>This is a simple example of a React component.</p>

                    <p>
                        <FormattedHTMLMessage id='counter.currentcount' values={{mycount: currentcount}}/>
                    </p>

                    <button onClick={ () => { this.props.increment() } }>Increment</button>
                   </div>
                <div>
                    This is an input with placeholder: <input placeholder="enter some text..." />
                </div>
            </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
    CounterStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Counter) as typeof Counter;