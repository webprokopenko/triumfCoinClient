import { withFormsy } from 'formsy-react';
import React from 'react';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();

        return (
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input
                    className="form-control"
                    onChange={this.changeValue}
                    type="password"
                    value={this.props.getValue() || ''}
                />
                <span>{errorMessage}</span>
            </div>
        );
    }
}

export default withFormsy(PasswordInput);