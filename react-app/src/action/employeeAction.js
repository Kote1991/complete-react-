import axios from 'axios'
/**
 * below function are called actioncreator, will return plain object with action type & payload.
 * whenever action are disptached from component will call reducer, 
 * reducer will take action & update state if required & update store of application & subscibe back to view.compnent.
 */
export function employee_change_name(name) {
    return ({
        type: 'CHANGE_NAME',
        payload: name
    })
}
export function get_employee_list() {
    return dispatch => {
        axios.get('api/employee').then(function (response) {

            dispatch({
                type: 'UPDATE_EMP_LIST',
                payload: response.data
            })
        }).catch(e => console.log("ERROR ", e));
    }
}

export function get_employee_details(empId) {
    
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'GET_EMP_DETAILS',
                payload: empId
            })
        }, 1000, console.log("getting employee indetail  "));

    }

}

