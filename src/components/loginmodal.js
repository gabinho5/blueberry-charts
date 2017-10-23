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
        height: '250px',
        width: '300px',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
        position:'absolute',
        borderRadius: 20,
        borderColor: '#000021',
        borderWidth: '2px',
        // border: 'solid',
        padding: 20,
    },
    modaltitle: {
        fontSize: 24,
        fontFamily: 'Quicksand',
        color: '#000021',
        marginBottom: 20,
        zIndex: 'inherit',

    },
    inputcontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
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
        color: '##000021',
        borderColor: '#000021',
        borderWidth: '2px',
        paddingRight: '48px',
        paddingLeft: '48px',
        paddingTop: '5px',
        paddingBottom: '3px',
        marginTop: 20,
        display: 'block',
        ':hover': {
        //   color: '#fff',
          cursor: 'pointer',
        },
        ':focus': {
          outline: 'none'
        }
    },
    forgotbutton: {
        fontFamily: 'Quicksand',
        fontSize: '13px',
        marginTop: '5px',
        marginBottom: '5px',
        fontWeight: 'normal',
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 33, .8)',
        width: '220px',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    forgottext: {
        ':hover': {
          color: 'red',
          cursor: 'pointer',
        },
        ':focus': {
          outline: 'none'
        }
    },
    errormessage: {
        fontFamily: 'Quicksand',
        fontSize: 15,
        color: 'red',
        textAlign: 'center',
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

    getValidationState= () => {
        if(this.state.email !== undefined){
            // let sub = this.state.email.substring(this.email.length-4,this.email.length-1)
            // console.log(sub)
            const length = this.props.email.length;
            let sub = this.props.email.substring(length-8,length)
            let sub1 = this.props.email.substring(length-11,length)
            let sub2 = this.props.email.substring(length-10,length)
            if (sub === "@ibm.com" || sub1 === "@us.ibm.com" || sub2 === "@gmail.com" || sub1 === "@jigsaw.xyz") return 'success';
            else if (length > 0) return 'warning';
        }
    }
    renderLogin = () => {
        return (
            <div style={styles.modalcontainer} onClick={this.props.dontExit}>
                <div style={styles.errormessage}>{this.props.error}</div>
                <div style={[styles.errormessage, {color: 'green'}]}>{this.props.success}</div>
                <div style={styles.modaltitle}>
                    Antioxdiant Login
                </div>
                <form style={styles.inputcontainer}>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                        style={{width: '220px', marginBottom: 0}}
                        >
                            <FormControl
                                type="text"
                                value={this.props.email}
                                placeholder="Email"
                                onChange={this.props.onChangeEmail}
                                style={{ padding: 10, marginBottom: 15}}
                            />
                            <FormControl.Feedback />
                            <FormControl
                                validationState={null}
                                type="password"
                                // value={this.state.password}
                                placeholder="Password"
                                onChange={this.props.onChangePassword}
                                onSubmit={this.props.onSubmit}
                                style={{ padding: 10}}
                            />
                        </FormGroup>
                        <div style={styles.forgotbutton}>
                            <div onClick={this.props.onForgotPassword} style={styles.forgottext}>Forgot Password</div>
                        </div>
                    </form>
                    <div className='submitbutton' onClick={this.props.onSubmit}>Submit</div>
                </div>
        )
    }
    renderForgot = () => {
        // userSendCode => send email
        // res means its resetting
        return (
            <div style={styles.modalcontainer} onClick={this.props.dontExit}>
                <div style={styles.errormessage}>{this.props.error}</div>
                <div style={styles.modaltitle}>
                    Enter your email
                </div>
                <form style={styles.inputcontainer}>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                        style={{width: '220px'}}>
                        <FormControl
                            type="text"
                            value={this.props.email}
                            placeholder="Email"
                            onChange={this.props.onChangeEmail}
                            style={{ padding: 10}}/>
                        <FormControl.Feedback />
                        <div style={styles.forgotbutton}>
                            <div onClick={this.props.backToLogin} style={styles.forgottext}>Back to login</div>
                        </div>
                    </FormGroup>
                </form>
                <div className='submitbutton' onClick={this.props.onSubmitResetEmail}>Send code to my email</div>
            </div>
        )
    }
    renderOneTimeCode = () => {
        //userConfirm => send email and code
        // get res.token (setToken)
        return (
            <div style={styles.modalcontainer} onClick={this.props.dontExit}>
            <div style={styles.errormessage}>{this.props.error}</div>
            <div style={styles.modaltitle}>
                Check your email
            </div>
            <form style={styles.inputcontainer}>
                <FormGroup
                    controlId="formBasicText"
                    style={{width: '220px'}}
                    >
                        <FormControl
                            type="text"
                            value={this.props.OTC}
                            placeholder="Code"
                            onChange={this.props.onChangeCode}
                            style={{ padding: 10}}
                        />
                        <FormControl.Feedback />
                        <div style={styles.forgotbutton}>
                            <div onClick={this.props.backToLogin} style={styles.forgottext}>Back to login</div>
                        </div>
                    </FormGroup>
                </form>
                <div className='submitbutton' onClick={this.props.onSubmitOTC}>Submit</div>
            </div>
        )
    }
    renderChangePassword = () => {
        //using this token send email, password, and confirm password
        //res means good to go through
        return (
            <div style={styles.modalcontainer} onClick={this.props.dontExit}>
                <div style={styles.errormessage}>{this.props.error}</div>
                <div style={[styles.errormessage, {color: 'green'}]}>{this.props.success}</div>
                <div style={styles.modaltitle}>
                    Enter your email
                </div>
                <form style={styles.inputcontainer}>
                    <FormGroup
                        controlId="formBasicText"
                        style={{width: '220px'}}
                        >
                            <FormControl
                                type="password"
                                value={this.props.newpassword}
                                placeholder="New password"
                                onChange={this.props.onChangeNewPassword}
                                style={{ padding: 10, marginBottom: 15}}
                            />
                            <FormControl
                                type="password"
                                value={this.props.confirm}
                                placeholder="Confirm password"
                                onChange={this.props.onChangeConfirm}
                                onSubmit={this.props.onResetPassword}
                                style={{ padding: 10}}
                            />
                            <div style={styles.forgotbutton}>
                                <div onClick={this.props.backToLogin} style={styles.forgottext}>Back to login</div>
                            </div>
                        </FormGroup>
                    </form>
                    <div className='submitbutton' onClick={this.props.onResetPassword}>I wont forget again...</div>
                </div>
        )
    }
    renderScreen = () => {
        if (this.props.screen === 'login') {
            return (
                this.renderLogin()
            )
        }
        else if (this.props.screen === 'forgotPassword') {
            return (
                this.renderForgot()
            )
        }
        else if (this.props.screen === 'OTC') {
            return (
                this.renderOneTimeCode()
            )
        }
        else if (this.props.screen === 'resetPassword') {
            return (
                this.renderChangePassword()
            )
        }
    }
    render() {
        return (
            <div style={{width: '100%', height: '100%', position:'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {/* TODO from here */}
                {this.renderScreen()}
                    {/* TODO to here */}
                    <div style={styles.container} onClick={this.props.exitModal}>
                    </div>
            </div>
        )
    };
}

export default Radium(LoginModal);
