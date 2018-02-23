import Formsy from 'formsy-react';
import React from 'react';
import PasswordInput from './PasswordInput';
import Dialog from 'react-dialog'
import AccountService from '../services/AccountService';


import 'react-dialog/css/index.css';

export default class CWdialog extends React.Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.submit = this.submit.bind(this);
        this.state = { canSubmit: false };

        this.state = {
            isDialogOpen: false
        };
        this.openDialog = () => this.setState({ isDialogOpen: true });
        this.handleClose = () => this.setState({ isDialogOpen: false });

        this.wallet = props.wallet;
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
        console.log(this.wallet);
    }

    submit(model) {
        if(model.password2){
            const acs = new AccountService();
            switch (this.wallet){
                case 'ETH' : acs.createETHAccount(model.password2);
            }
        }
    }

    render() {
        return (
            <div className="container">
                <button type="button" className='btn btn-primary btn-lg' onClick={this.openDialog}>Create wallet</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog
                        modal={true}
                        height={500}
                        width={700}
                        isDraggable={true}
                        closeOnEscape={true}
                        onClose={this.handleClose}>
                        <h1>Create new Ethereum Wallet</h1>
                        <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                            <PasswordInput
                                name="password1"
                                validations="minLength:8"
                                validationError="Password length minimum 8 symbols"
                                required
                            />
                            <PasswordInput
                                name="password2"
                                validations="equalsField:password1"
                                validationError="Passwords must by equals"
                                required
                            />
                            <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
                        </Formsy>
                    </Dialog>
                }
            </div>
        );
    }
}