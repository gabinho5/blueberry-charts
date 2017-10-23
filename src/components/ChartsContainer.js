import React from 'react'
import Charts from './Charts'
import Radium from 'radium'
import { Bar } from 'recharts'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'
import logo from './logo.png'
import { MenuItem } from 'react-bootstrap'
import 'react-select/dist/react-select.css'
import Loading from './Loading'
import LoginModal from './loginmodal'
import Logo from './Logo'
import HttpServices from '../helpers/HttpServices'
import CsvButton from './csvbutton'
// import allprojects from './global.json'

var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyD9pUhAVT2WLJyZAkF9BtupOnzkEwgu-F8",
    authDomain: "blueberry-charts.firebaseapp.com",
    databaseURL: "https://blueberry-charts.firebaseio.com",
    projectId: "blueberry-charts",
    storageBucket: "blueberry-charts.appspot.com",
    messagingSenderId: "722005862176"
});
const colors = [
    '#FF411D', //amandaR-1
    '#DD3A1B', //amandaR-2
    '#BB3015', //amandaR-3
    '#A4250D', //amandaR-4
    '#8A1E09', //amandaR-5

    '#E551A7', //amandaP-1
    // '#D04A98', //amandaP-2
    '#AA3A7B', //amandaP-3
    // '#852D60', //amandaP-4
    '#5E1F44', //amandaP-5

    '#7708EF', //amandPurp-1
    // '#6507CC', //amandPurp-2
    '#4F069E', //amandPurp-3
    // '#3B0477', //amandPurp-4
    '#280450', //amandPurp-5

    '#0763FF', //amandBlue-1
    // '#0A53D0', //amandBlue-2
    '#053C9C', //amandBlue-3
    // '#06307A', //amandBlue-4
    '#052761', //amandBlue-5

    '#17DCD3', //amandaCyan-1
    '#14BFB8', //amandaCyan-2
    // '#11A19C', //amandaCyan-3
    '#0B7773', //amandaCyan-4
    '#064644', //amandaCyan-5

    '#00FF7F', //amandagreen-1
    // '#00E672', //amandagreen-2
    '#00CB65', //amandagreen-3
    // '#029149', //amandagreen-4
    '#005D2E', //amandagreen-5
    '#66023C', //purple1
    '#6F0342', //purple2
    // '#7F044B', //purple3
    '#86034F', //purple4
    '#8B0452', //purple5
    '#0B0B55', //blue1
    '#0F0F63', //blue2
    // '#12127C', //blue3
    '#141485', //blue4
    '#171799', //blue5
    '#A00F06', //red1
    '#B21309', //red2
    // '#C91308', //red3
    '#E01307', //red4
    '#F01305', //red5
    '#100C08', //black
    '#372808', //yellow1
    '#5B4411', //yellow2
    // '#866010', //yellow3
    '#BF8710', //yellow4
    '#EBA50F', //yellow5
    '#154211', //green1
    '#1D5E17', //green2
    // '#207718', //green3
    '#2CA022', //green4
    '#2EBE21', //green5
]
const blueberryDictionary = {
    // '1': {first_name: 'Jianbiao', last_name: 'Chen'},
    '2': {first_name: 'Andrew', last_name: 'Sun'},
    // '3': {first_name: 'Mike', last_name: 'Campbell'},
    '4': {first_name: 'Gabriel', last_name: 'Munoz'},
    '5': {first_name: 'Natalie', last_name: 'De.Clercq'},
    '6': {first_name: 'Sasha', last_name: 'Soshnin'},
    '7': {first_name: 'Danielle', last_name: 'Hyatt'},
    '8': {first_name: 'Kalsey ', last_name: 'Sanford'},
    // '9': {first_name: 'Daryl', last_name: 'Rowland'},
    '10': {first_name: 'Amanda ', last_name: 'Scharkss'},
    '11': {first_name: 'Maria', last_name: 'Rymer'},
    // '12': {first_name: 'Hadden', last_name: 'Fray-Smith'},
    // '14': {first_name: 'Andrew', last_name: 'Tarver'},
    '15': {first_name: 'Leslie', last_name: 'Lockyer'},
    '16': {first_name: 'Daisi', last_name: 'Arichabala'},
    '17': {first_name: 'Shawn', last_name: 'Sam'},
    '18': {first_name: 'Jacki ', last_name: 'Yeung'},
    // '19': {first_name: 'Michael', last_name: 'Stanley'},
    '20': {first_name: 'Nick', last_name: 'Partie'},
    '21': {first_name: 'Steven', last_name: 'Delpilar'},
    '22': {first_name: 'Vandana', last_name: 'Kumar'},
    '23': {first_name: 'Jacqueline', last_name: 'Kuo'},
    '24': {first_name: 'Franco', last_name: 'Lebolo'},
    '25': {first_name: 'Eric', last_name: 'Kohn'},
    '27': {first_name: 'Phoebe', last_name: 'Ross'},
    '28': {first_name: 'Joyce', last_name: 'Lin'},
    // '30': {first_name: 'Anthony', last_name: 'Keating'},
    '31': {first_name: 'Maxwell', last_name: 'Ridgeway'},
    '32': {first_name: 'Andre', last_name: 'moskowitz'},
    '33': {first_name: 'Ricki', last_name: 'Kong'},
    '34': {first_name: 'Hannah', last_name: 'Schwartz'},
    '35': {first_name: 'Jeffrey ', last_name: 'Kole'},
    '36': {first_name: 'Sara', last_name: 'Analoui'},
    '37': {first_name: 'Benjamin', last_name: 'Chin'},
    // '38': {first_name: 'Mike', last_name: 'Campbell'},
    '42': {first_name: 'Jonny', last_name: 'Andrews'},
    '43': {first_name: 'Ryan', last_name: 'Yeh'},
    '44': {first_name: 'Vassilis', last_name: 'Rousschatzakis'},
    '45': {first_name: 'Asia', last_name: 'Grant'},
    // '46': {first_name: 'Neil', last_name: 'Gordon'},
    // '47': {first_name: 'Greg', last_name: 'Piccolo'},
    '48': {first_name: 'Peter', last_name: 'Weon'}
}

const styles = {
    containerstyles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
        minWidth: '1000px'
    },
    topbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '150px',
        minHeight: '150px',
        backgroundColor: '#000021'
    },
    blueberry: {
        display: 'block',
        width: 'auto',
        minWidth: '280px',
        // marginTop: '50px',
        // marginLeft: '20px'
    },
    datepicker: {
        display: 'block',
        // margin: 'auto',
        marginTop: '15px',
        minWidth: '200px',
    },
    naughty: {
        color: 'red',
        fontFamily: 'Quicksand ',
        fontWeight: 'bold',
        fontSize: '18px'
    },
    nice: {
        color: 'green',
        textDecoration: 'line-through',
        fontFamily: 'Quicksand',
        fontSize: '14px'
    },
    buttonstyles: {
        borderRadius: '500px',
        minwidth: '250px',
        fontFamily: 'Quicksand',
        textTransform: 'uppercase',
        fontSize: '15px',
        fontWeight: 'normal',
        backgroundColor: 'transparent',
        border: 'solid',
        color: '#fff',
        borderColor: '#fff',
        borderWidth: '2px',
        paddingRight: '48px',
        paddingLeft: '48px',
        paddingTop: '15px',
        paddingBottom: '13px',
        display: 'block',
        margin: 'auto',
        marginBottom: 20,
        ':hover': {
            backgroundColor: '#fff',
            color: '#000021',
            cursor: 'pointer',
        },
        ':focus': {
            outline: 'none'
        }
    },
    loginButtonStyles: {
        fontFamily: 'Quicksand',
        fontSize: '15px',
        border: 'solid',
        color: '#fff',
        backgroundColor: 'transparent',
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
        backgroundColor: '#fff',
        color: '#000021',
        cursor: 'pointer',
      },
      ':focus': {
        outline: 'none'
      }
  },
}

const csvdata = [
  {firstname: 'Ahmed', lastname: 'Tomi' , email: 'ah@smthing.co.com'},
  {firstname:'Raed', lastname:'Labes' , email:'rl@smthing.co.com'} ,
  {firstname:'Yezzi', lastname:'Min l3b', email:'ymin@cocococo.com'}
];

class ChartsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            me: {},
            isProjectView: true,
            //start date
            date: 'Oct-2-2017',
            startDate: moment(),
            focused: false,
            true: true,
            filters: {
                sector: [],
                //'distribution','comms', 'public', 'FSS', 'internal', 'healthcare', 'IBM Middle East', 'other'
                ptype: []
                //'pipeline', 'sold', 'internal', 'business development', 'other'
            },
            checkedSectors: {
                'distribution': true,
                'comms': true,
                'internal': true,
                'public': true,
                'FSS':true,
                'healthcare': true,
                'IBM Middle East': true,
                'other': true
            },
            checkedPTypes: {
                'pipeline': true,
                'business development': true,
                'sold': true,
                'internal': true,
                'other': true
            },
            isAllChecked: true,
            allProjects: {},
            naughtyList: {},
            modal: false,
            email: '',
            password: '',
            token: '',
            error: '',
            success: '',
            userId: '',
            csvData: [{'Your csv did not download correctly': 'Please try again'}]
        }
    }

    componentWillMount() {

        // app.database().ref('/').once('value').then((snapshot) => {
        //     this.setState({ allProjects: snapshot.val() })
        // })
        HttpServices.get("/api/projects/hours", (err, res) => {
            if (err) {
                console.log(err)
            }
            else {
                const allProjects = res;
                const niceList = {};
                const naughtyList = {};
                Object.keys(allProjects).forEach(date => {
                    niceList[date] = []
                    naughtyList[date] = []
                    allProjects[date].forEach(obj => {
                        if (!niceList[date].includes(obj.user_id)) {
                            niceList[date].push(obj.user_id.toString())
                        }
                    })
                    Object.keys(blueberryDictionary).forEach(id => {
                        if(!niceList[date].includes(id) && !naughtyList[date].includes(id)) {
                            naughtyList[date].push(blueberryDictionary[id].first_name)
                        }
                    })
                })

                this.setState({
                    allProjects: allProjects,
                    naughtyList: naughtyList
                })
            }
        })
    }

    //project vs name view
    handleClick = () => {
        this.setState({isProjectView: !this.state.isProjectView});
        console.log(this.state.startDate.getMonth)
    }

    //filtering
    // handleSector = (e) => {
    //     const filters = this.state.filters
    //     const checkedSectors = this.state.checkedSectors
    //     let index
    //
    //     if (e.target.checked) {
    //         index = filters.sector.indexOf(e.target.value)
    //         filters.sector.splice(index, 1)
    //     } else {
    //         filters.sector.push(e.target.value)
    //     }
    //     checkedSectors[e.target.value] = !checkedSectors[e.target.value]
    //
    //     this.setState({ filters: filters })
    //     this.setState({checkedSectors: checkedSectors})
    //
    // }
    // handlePtype = (e) => {
    //     const filters = this.state.filters
    //     const checkedPTypes = this.state.checkedPTypes
    //     let index
    //
    //     if (e.target.checked) {
    //         index = filters.ptype.indexOf(e.target.value)
    //         filters.ptype.splice(index, 1)
    //     } else {
    //         filters.ptype.push(e.target.value)
    //     }
    //     checkedPTypes[e.target.value] = !checkedPTypes[e.target.value]
    //
    //     this.setState({ filters: filters })
    //     this.setState({ checkedPTypes: checkedPTypes})
    //     console.log(this.state.checkedPTypes)
    //     console.log(this.state.filters)
    //
    //     // if(this.state.isAllChecked === false)
    // }

    // handleSelectAll = (e) => {
    //     const checkedSectors = this.state.checkedSectors
    //     const checkedPTypes = this.state.checkedPTypes
    //     const filters = this.state.filters
    //     let index
    //
    //     Object.keys(checkedSectors).map((key)=>{
    //         checkedSectors[key] = e.target.checked
    //
    //         if (checkedSectors[key]) {
    //             index = filters.sector.indexOf(key)
    //             filters.sector.splice(index, 1)
    //         } else {
    //             filters.sector.push(key)
    //         }
    //     })
    //     Object.keys(checkedPTypes).map((key)=>{
    //         checkedPTypes[key] = e.target.checked
    //
    //         if (checkedPTypes[key]) {
    //             index = filters.ptype.indexOf(key)
    //             filters.ptype.splice(index, 1)
    //         } else {
    //             filters.ptype.push(key)
    //         }
    //     })
    //     this.setState({ checkedPTypes : checkedPTypes})
    //     this.setState({ checkedSectors : checkedSectors})
    // }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
            error: '',
        })
    }
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
            error: '',
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

    handleCalendar = (date) => {
        this.setState({
            date: date.clone().isoWeekday(1).format('MMM-D-YYYY'),
            startDate: date,
        });
    }
    exitModal = () => {
        this.setState({
            modal: false,
        })
    }
    openModal = () => {
        this.setState({
            modal: true,
        })
    }
    // const checkLoginPromise = new Promise((resolve, reject) => {
    //     HttpServices.get("/api/user/login", {email: this.state.email, password: this.state.password}, (err, res) => {
    //         if(err) {
    //             console.log(err)
    //             reject("failure reason: " + err); // rejected
    //         }
    //         else {
    //             console.log(res)
    //             resolve(res); // fulfilled
    //         }
    //     })
    // });
    checkForLogin = () => {
        const checkLoginPromise = new Promise((resolve, reject) => {
            HttpServices.post("/api/user/login", {email: this.state.email, password: this.state.password}, (err, res) => {
                if(err) {
                    this.setState({error: err})
                    console.log(err)
                    // reject("failure reason: " + err); // rejected
                }
                else {
                    this.setState({success: 'Success!'})
                    setTimeout(function(){
                        resolve(res); // Yay! Everything went well!
                    }, 1000);
                    HttpServices.setToken(res.token)
                }
            })
        });
        checkLoginPromise.then(info => {
            this.setState({
                token: info.token,
                userId: info.user.id,
                modal: false,
                success: ''
            })
            console.log(this.state.token)
            HttpServices.get("/api/user/hours", (err, res) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(res)
                    const userHours = []
                    Object.keys(res).forEach(date => {
                        res[date].forEach(hoursObj => {
                            userHours.push({
                                date: hoursObj.date,
                                project: hoursObj.title,
                                hours: hoursObj.hours,
                                content: hoursObj.content
                            })
                        })
                    })
                    this.setState({csvData: userHours})
                }
            })
        })
    }

    renderNaughtyList = () => {
        return(
            this.state.naughtyList[this.state.date].map((name, index) => {
                return (
                    <div key={index} style={styles.naughty}>{name}</div>
                    // console.log(name)
                )
            })
        )
    }
    userLogin = () => {
        return new Promise((resolve, reject) => {
            HttpServices.post('/api/user/login', {email: this.state.email, password: this.state.password}, (err, res) => {
                this.setState({token: 'loading'})
                if (err) {
                    console.log(err)
                    this.setState({token: 'error'})
                } else {
                    HttpServices.get('/api/user/me', (err, res) => {
                        this.setState({token: 'loading'})
                        if (err) {
                            console.log(err)
                            this.setState({token: 'error'})
                        } else {
                            this.setState({token: res.token})
                        }
                    })
                    this.setState({token: res.token})
                }
            })
        })
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    render() {
        const { date, allProjects } = this.state

        let allData = [];
        let one = {
            hey: [{color: 'red', number: 'three'}, {color: 'orange', number: 'four'}, {color: 'purple', number: 'seven'}],
            ho: [{color: 'blue', number: 'one'}, {color: 'azul', number: 'ocho'}, {color: 'green', number: 'eighteen'}],
            letsgo: [{color: 'yellow', number: 'two'}, {color: 'rojo', number: 'five'}, {color: 'doorhinge', number: 'thirty'}]
        }

        Object.keys(allProjects).forEach(key => {
            allProjects[key].forEach(item => {
                allData.push(item)
            })
        })
        console.log(allProjects)

        var datesArray = Object.keys(allProjects)
        var lastDate = 'Jan-1-2017'

        for (var i = 0; i < datesArray.length; i++) {
            if (moment(datesArray[i]).isAfter(lastDate)) {
                lastDate = datesArray[i]
            }
        }


        if (allProjects[date] == undefined) {
            return <Loading/>
        }

        var projectObj = {};
        var nameObj = {};

        for (var i = 0; i < allProjects[this.state.date].length; i++) { //1 variable
            var currentProject = allProjects[this.state.date][i]
            var currentName = allProjects[this.state.date][i]
            // if (!(this.state.filters.sector.includes(currentProject.sector) || this.state.filters.ptype.includes(currentProject.ptype))) { //2 vars
            if (Object.keys(projectObj).includes(currentProject.title)) {
                projectObj[currentProject.title][currentProject.first_name] = currentProject.hours
            } else {
                projectObj[currentProject.title] = {}
                projectObj[currentProject.title][currentProject.first_name] = currentProject.hours
            }
            if (Object.keys(nameObj).includes(currentName.first_name)) {
                nameObj[currentName.first_name][currentName.title] = currentName.hours
            } else {
                nameObj[currentName.first_name] = {}
                nameObj[currentName.first_name][currentName.title] = currentName.hours
            }
            // }
        }

        var projectArray = [];
        var nameArray = [];

        Object.keys(projectObj).map( key => {
            projectObj[key].title = key
            projectArray.push(projectObj[key])
        })
        Object.keys(nameObj).map( key => {
            nameObj[key].name = key
            nameArray.push(nameObj[key])
        })
        projectArray.sort(( a, b ) => {
            a = a.title.toLowerCase();
            b = b.title.toLowerCase();

            return a < b ? -1 : a > b ? 1 : 0;
        });

        nameArray.sort(( a, b ) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();

            return a < b ? -1 : a > b ? 1 : 0;
        });
        var nameprojectObj = {
            name : nameArray,
            title : projectArray
        }

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //nameproject[this.state.date] ? do this : do that
        var projectfilters = nameprojectObj.title.map((a, index) =>
        <Bar dataKey={a.title} stackId='stack' fill={colors[index]} isAnimationActive={false}/>)

        var namefilters = nameprojectObj.name.map((a, index) =>
        <Bar key={index} dataKey={a.name} stackId='stack' fill={colors[index]} isAnimationActive={false}/>)

        const Toggle = this.state.isProjectView ? 'Project View' : 'Name View'

        // var allSectorSelected = []
        // var allPTypeSelected = []
        //
        // Object.keys(this.state.checkedSectors).map((key, index)=>{
        //     allSectorSelected[index] = this.state.checkedSectors[key]
        //
        // })
        // var isSectorChecked = allSectorSelected.filter(function(c) {
        //     return c;
        // }).length === allSectorSelected.length;
        //
        // Object.keys(this.state.checkedPTypes).map((key, index)=>{
        //     allPTypeSelected[index] = this.state.checkedPTypes[key]
        //
        // })
        // var isPTypeChecked = allPTypeSelected.filter(function(c) {
        //     return c;
        // }).length === allPTypeSelected.length;
        //
        // var isAllChecked = isSectorChecked&&isPTypeChecked
        // this.state.isAllChecked = isAllChecked


        return (

            <div style={styles.containerstyles}>
                 {this.state.modal &&
                      <LoginModal openModal={this.openModal} exitModal={this.exitModal}
                          onChangePassword={this.onChangePassword} onChangeEmail={this.onChangeEmail} onSubmit={this.checkForLogin}
                          error={this.state.error} success={this.state.success}/>}
                <div style ={styles.topbar}>
                    <div style= {styles.blueberry}>
                        <Logo />
                    </div>
                    <div style={styles.datepicker}>
                        {/*TODO These are the filters */}
                        {/* <div style={{position: 'absolute', marginTop: '20px', marginLeft:'260px'}}>
                            <Dropdown title="Menu" id="menu-nav-dropdown">
                                <Dropdown.Toggle>
                                    <Glyphicon glyph="filter" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='selectSector' onClick={this.handleSelectAll} key={0} checked={isAllChecked}>Select All</Checkbox>
                                    <MenuItem disabled>Sector</MenuItem>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='distribution' onClick={this.handleSector} checked={this.state.checkedSectors['distribution']}>Distribution</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='comms' onClick={this.handleSector} checked={this.state.checkedSectors['comms']}>Comms</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='internal' onClick={this.handleSector} checked={this.state.checkedSectors['internal']}>Internal</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='public' onClick={this.handleSector} checked={this.state.checkedSectors['public']}>Public Sector</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='FSS' onClick={this.handleSector} checked={this.state.checkedSectors['FSS']}>FSS</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='healthcare' onClick={this.handleSector} checked={this.state.checkedSectors['healthcare']}>Healthcare</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='IBM Middle East' onClick={this.handleSector} checked={this.state.checkedSectors['IBM Middle East']}>IBM Middle East</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='other' onClick={this.handleSector} checked={this.state.checkedSectors['other']}>Other</Checkbox>
                                    <MenuItem disabled>Project Type</MenuItem>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='pipeline' onClick={this.handlePtype} checked={this.state.checkedPTypes['pipeline']}>Pipeline</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='business development' onClick={this.handlePtype} checked={this.state.checkedPTypes['business development']}>Business Development</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='sold' onClick={this.handlePtype} checked={this.state.checkedPTypes['sold']}>Sold</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='internal' onClick={this.handlePtype} checked={this.state.checkedPTypes['internal']}>Internal</Checkbox>
                                    <Checkbox style={{margin: '5px', marginLeft: '20px'}} value='other' onClick={this.handlePtype} checked={this.state.checkedPTypes['other']}>Other</Checkbox>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div> */}
                        <div style={{width: '132px', margin: 'auto'}}>
                            <SingleDatePicker
                                // style={{display: 'inline-block', width: '150px'}}
                                date={this.state.startDate} // momentPropTypes.momentObj or null
                                onDateChange={this.handleCalendar} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                numberOfMonths = {1}
                                isOutsideRange = {(d) => !d.isBetween('Aug-28-2017', moment(lastDate).isoWeekday(7))}
                                // isDayBlocked = {(d) => console.log(lastDate)}
                            />
                        </div>
                        <div style={{display: 'block', marginTop: '10px'}}>
                            <button key="view" style={styles.buttonstyles} onClick={this.handleClick}>{Toggle}</button>
                        </div>
                    </div>
                    {/* <Button data={csvdata} onClick={() => this.checkForLogin()}/> */}
                    {this.state.userId ?
                        <CsvButton data={this.state.csvData} onClick={console.log('Pulled info')}/> :
                        <div style={styles.loginButtonStyles} onClick={() => this.openModal()}>Login to download hours</div>
                    }

                    {/* onClick={() => this.checkForLogin()} */}
                </div>
                <h2 style={{fontSize:24, fontFamily: 'Quicksand', textAlign: 'center'}}> Week of: { date } </h2>
                <div style={{display: 'flex', height: '80%', width: '100%', minHeight: '500px'}}>
                    <div style={{display: 'block', height: '100%', width: '80%', minHeight: '500px'}}>
                        <Charts filteredobject = {nameprojectObj} isProjectView = {this.state.isProjectView} date={this.state.date} projectfilters = {projectfilters} namefilters = {namefilters}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20%', paddingRight: '20px'}}>
                        {/* <div style={{fontFamily: 'Quicksand', fontSize: '18px', color: '#000021'}}>
                            Andrew's Lists
                        </div> */}
                        <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                            <div style={{fontFamily: 'Quicksand', fontSize: '18px', color: '#000021', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: 20}}>
                                Andrew's Naughty List
                                <div style={{paddingTop: 20}}>
                                    {this.renderNaughtyList()}
                                </div>
                            </div>
                            {/* <div style={{fontFamily: 'Quicksand', fontSize: '18px', color: '#000021', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                                Not So Naughty
                                <div style={{paddingTop: 20}}>
                                    <div style={styles.nice}>Gabe</div>
                                    <div style={styles.nice}>Daisy</div>
                                    <div style={styles.nice}>Max</div>
                                    <div style={styles.nice}>Kara</div>
                                    <div style={styles.nice}>Gabe</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(ChartsContainer);
