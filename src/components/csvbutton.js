import React from 'react'
import Radium from 'radium'
import {CSVLink} from 'react-csv';

const styles = {
    csvbuttonstyles: {
        fontFamily: 'Quicksand',
        fontSize: '15px',
        border: 'solid',
        backgroundColor: '#fff',
        height: '50px',
        borderRadius: '10px',
        borderWidth: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        transition: '0.1s ease-in-out all',
        width: '200px',
        minWidth: '200px',
        marginRight: '20px',
      ':hover': {
        borderColor: '#fff',
        backgroundColor: '#000021',
        // color: '#fff !important',
        cursor: 'pointer',
      },
      ':focus': {
        outline: 'none'
      }
  },
  csvlinkstyles: {
      color: '#000021',
      backgroundColor: 'transparent',
      height: '-webkit-fill-available',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ':hover': {
          backgroundColor: 'transparent',
          color: '#fff !important',
          cursor: 'pointer',
      },
      ':focus': {
        outline: 'none',
        textDecoration: 'none'
      }
  }
}

class CsvButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (

            <div style={{display: 'block', marginTop: '10px'}}>
                <div key="csv" style={styles.csvbuttonstyles} onClick={this.props.onClick}>
                    <CSVLink
                        data={this.props.data}
                        filename={"my-resume.csv"}
                        style={styles.csvlinkstyles}
                        className="csvlinkstyles">
                        Download your resume
                    </CSVLink>
                </div>
            </div>
        )
    };
}

export default Radium(CsvButton);
