import React from 'react'
import Radium from 'radium'
import { FormControl, FormGroup } from 'react-bootstrap'
import { HelpBlock, DropdownButton, MenuItem, Checkbox, Glyphicon, Dropdown } from 'react-bootstrap'

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 33, .8)',
        zIndex: 1,
        minWidth: '1000'
    },
    modalcontainer: {
        display:'flex',
        height: '220px',
        width: '300px',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'space-around'
        top: '30vh',
        left: '30vw',
        zIndex: 2,
        position:'absolute',
        borderRadius: 20,
        borderColor: '#313639',
        borderWidth: '2px',
        // border: 'solid',
        padding: 20,
    },
    modaltitle: {
        fontSize:24,
        fontFamily: 'Quicksand',
        color: '#313639',
        marginBottom: 20,
        zIndex: 'inherit',

    },
    inputcontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        marginTop: 10,
        zIndex: 'inherit',

    },
    inputfield: {
        zIndex: 'inherit',

        marginBottom: 5,
        borderRadius: 10,
    },
    submitbutton: {
        zIndex: 'inherit',

        borderRadius: '20px',
        minwidth: '50px',
        fontFamily: 'Quicksand',
        textTransform: 'uppercase',
        fontSize: '15px',
        fontWeight: 'normal',
        backgroundColor: 'transparent',
        // border: 'solid',
        color: '##313639',
        borderColor: '#313639',
        borderWidth: '2px',
        paddingRight: '48px',
        paddingLeft: '48px',
        paddingTop: '5px',
        paddingBottom: '3px',
        marginTop: 20,
        display: 'block',
        // ':hover': {
        //   backgroundColor: '#313639',
        //   color: '#313639',
        //   cursor: 'pointer',
        // },
        ':focus': {
          outline: 'none'
        }
    }

}

class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            value: ''
        }
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleSubmit = (event) => {
        if(this.getValidationState() === 'warning')
        {
            alert("Please use an IBM email")
        }
        else(
            alert("Thank you for logging in!")
        )
        // event.preventDefault();
    }
    getValidationState= () => {
        if(this.state.email !== undefined){
            // let sub = this.state.email.substring(this.email.length-4,this.email.length-1)
            // console.log(sub)
            const length = this.state.email.length;
             let sub = this.state.email.substring(length-8,length)
             console.log(sub==="@ibm.com")
            if (sub==="@ibm.com") return 'success';
            else if (length > 0) return 'warning';
        }

    }


    render() {
        return (
            <div style={{height: '100vh', width: '100vw', position:'relative', minWidth:'1000'}}>
                <div style={styles.modalcontainer} onClick={this.props.dontExit}>
                    <div style={styles.modaltitle}>
                        Login
                    </div>
                    <form style={styles.inputcontainer}>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                            >
                                <FormControl
                                    type="text"
                                    // value={this.state.email}
                                    placeholder="Username"
                                    onChange={this.onChangeEmail}
                                    style={{ padding: 10, marginBottom: 15}}
                                />
                                <FormControl.Feedback />
                                <FormControl
                                    type="text"
                                    // value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.onChangePassword}
                                    style={{ padding: 10}}

                                />
                            </FormGroup>
                        </form>
                        <div style={styles.submitbutton} onClick={this.handleSubmit}>Submit</div>
                    </div>
                    <div style={styles.container} onClick={this.props.exitModal}>
                    </div>
            </div>
        )
    };
}

export default Radium(LoginModal);
