import Dialog from 'react-dialog'
import React from 'react';
import 'react-dialog/css/index.css';
export default class Example extends React.Component {
    constructor() {
        super();
        this.state = {
            isDialogOpen: false
        };
        this.openDialog = () => this.setState({ isDialogOpen: true });

        this.handleClose = () => this.setState({ isDialogOpen: false });
    }
    render() {
        return (
            <div className="container">
                <button type="button" className='btn btn-primary btn-lg' onClick={this.openDialog}>Create wallet</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog
                        title="Dialog Title"
                        modal={true}
                        onClose={this.handleClose}
                        buttons={
                            [{
                                text: "Close",
                                onClick: () => this.handleClose()
                            }]
                        }>
                        <h1>Dialog Content</h1>
                        <p>More Content. Anything goes here</p>
                    </Dialog>
                }
            </div>
        );
    }
}