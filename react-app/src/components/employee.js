import React from 'react';
import { connect } from 'react-redux';

import ListEmp from './listEmp';
import { get_employee_list, get_employee_details } from '../action/employeeAction';
class Employee extends React.Component {
    constructor() {
        super();
        this.state = {};
        //empViewDetails:this.empViewDetails.bind(this);        
    }
    empViewDetails(empId) {
        console.log('Employee ID in conatiner  ' + empId);
        this.props.get_employee_details(empId);
    }
    componentDidMount() {
        const empList = this.props.get_employee_list();
    }
    render() {
        // const looped_emp = this.props.emp.employee ?this.props.emp.employee.map((val, i) => {
        //     return (<tr key={val.id}>
        //         <td>{val.id}</td>
        //         <td>{val.name}</td>
        //         <td>{val.phno}</td>
        //     </tr>)
        // }):'Loading....';
        return (
            <div>
                <h2 onClick={this.hello}>Employee dashboard</h2>
                {/* <LoopEmpList emp={this.props.employee.employee}/> */}
                {/* {this.props.employee.employee} */}
                {/* {looped_emp} Instead of tradional way will do some other way*/}
                <div className="cus_container">
                    <div className="leftNav">
                        <ListEmp empList={this.props.emp.employee} empDetailerView={this.empViewDetails.bind(this)}>Loading....</ListEmp>
                    </div>
                    <div>{this.props.emp.employeeDetails}</div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("Employee template", state);
    return {
        emp: state
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         get_employee_list: (dispatch) => get_employee_list(),
//         get_employee_detailed: (empId) =>{ get_emploee_details(empId)}
//     }
// }


export default connect(
    mapStateToProps,
    {
        get_employee_list: () => get_employee_list(),
        get_employee_details: (empId) => get_employee_details(empId)
    }
)(Employee)
// export default ;