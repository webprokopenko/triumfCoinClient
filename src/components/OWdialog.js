import React from 'react';
import Dialog from 'react-dialog';
import ReactFileReader from 'react-file-reader';
import PasswordInput from './PasswordInput';
import AccountService from '../services/AccountService';
import Formsy from 'formsy-react';

import 'react-dialog/css/index.css';

export default class OWdialog extends React.Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.submit = this.submit.bind(this);
        this.uploadFile = this.uploadFile.bind(this);

        this.state = { canSubmit: false };

        this.state = {
            isDialogOpen: false
        };
        this.openDialog = () => this.setState({ isDialogOpen: true });
        this.handleClose = () => this.setState({ isDialogOpen: false });

        this.wallet = props.wallet;
        this.keyFile = {};
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    uploadFile(files) {
        console.dir(files);
        const file = new FileReader();
        file.readAsText(files[0]);
        file.onload = (event) => {
            try {
                const keyFile = JSON.parse(event.target.result);
                console.log('keyFile: ');
                console.dir(keyFile);
                this.keyFile = keyFile;
                console.log('this.keyFile = ');
                console.dir(this.keyFile);

            } catch (e) {
                console.dir(e);
                this.disableButton;
            }
        }
    }
    submit(params){
        if(params.password1){
            const aService = new AccountService();
            aService.openETHAccount(params.password1, this.keyFile);
        }
        console.log(params)
    }
    render() {
        return (
            <div className="container">
                <button type="button" className='btn btn-primary btn-lg' onClick={this.openDialog}>Open wallet</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog
                        modal={true}
                        height={500}
                        width={700}
                        isDraggable={true}
                        closeOnEscape={true}
                        onClose={this.handleClose}>
                        <h1>Add Ethereum Wallet</h1>
                        <ReactFileReader fileTypes={["*"]} base64={false} multipleFiles={false} handleFiles={this.uploadFile}>
                            <button className='btn btn-primary btn-lg'>Select public key</button>
                        </ReactFileReader>
                        <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                            <PasswordInput
                                name="password1"
                                validations="minLength:8"
                                validationError="Password length minimum 8 symbols"
                                required
                            />
                            <button type="submit" disabled={!this.state.canSubmit}>LogIn</button>
                        </Formsy>
                    </Dialog>
                }
            </div>
        );
    }
}