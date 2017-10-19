import React from 'react'
import Radium from 'radium'

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 33, .8)',
        zIndex: 1,
    },
    modalcontainer: {
        height: '500px',
        width: '500px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        zIndex: 2,
    },
    modaltitle: {
        fontSize:24,
        fontFamily: 'Quicksand',
        color: '#000021'
    },
    inputcontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20
    },
    inputfield: {
        marginBottom: 20,
    },
    submitbutton: {
        borderRadius: '500px',
        minwidth: '250px',
        fontFamily: 'Quicksand',
        textTransform: 'uppercase',
        fontSize: '15px',
        fontWeight: 'normal',
        backgroundColor: 'transparent',
        border: 'solid',
        color: '#000021',
        borderColor: '#000021',
        borderWidth: '2px',
        paddingRight: '48px',
        paddingLeft: '48px',
        paddingTop: '15px',
        paddingBottom: '13px',
        display: 'block',
        ':hover': {
          backgroundColor: '#000021',
          color: '#fff',
          cursor: 'pointer',
        },
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
            password: ''
        }
    }
    onChangePassword = (value) => {
        let obj = {}
        obj['password'] = value
        this.setState(obj)
    }
    onChangeEmail = () => {
        // let obj = {}
        // obj['email'] = value
        // this.setState(obj)
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={styles.container} onClick={this.props.exitModal}>
                <div style={styles.modalcontainer}>
                    <div style={styles.modaltitle}>
                        Login
                    </div>
                    <form style={styles.inputcontainer}>
                        {/* bootstrap this shit */}
                        <input type="text" value={this.state.email} onChange={(text) => this.setState({email: text})} style={styles.inputfield}/>
                        <input type="text" value={this.state.password} onChange={(text) => this.setState({password: text})} style={styles.inputfield}/>
                    </form>
                    <div style={styles.submitbutton} onClick={this.handleSubmit}>Submit</div>
                </div>
            </div>
        )
    };
}

export default Radium(LoginModal);
