const empData = [
    {
        "name": 'Kotresh',
        "age": 27,
        "psid": "25713",
        "gender": "M",
        "dobirth": "08/02/1991",
        "dojoining": "13/02/2017"
    }
];
/**
 * initial state of employee assgining.. as now we are adding only one emp object. remaining we ll rendere from the express server 
 * 
 * each reducer takes 2 param - state & action these will be taken care fomr redux.
 * but must n should return object may be with updated object, based on action payload.
*/


const employeeReducer = (state = empData, action) => {

    switch (action.type) {
        case "CHANGE_NAME":

            break;
        case "UPDATE_EMP_LIST":
            state = action.payload;
            break;
        case "GET_EMP_DETAILS":
            debugger;
            const payload = action.payload;
            //  employee[action.payload] = {...state};  
            const currentEmpObj = state.employee.find(function (val, i) {

                return (val.id === payload);
            });
            const personality = [
                "changing in order to deal with new situations",
                "addictive personality becomes addicted to things very easily",
                "used for saying that someone will never change their behaviour or character",
                "a man with a particular quality or ability",
                "used for talking about someone in relation to their character rather than their professional position",
                "ready to behave in an unpleasant way when necessary",
                "used for emphasizing that someone has a lot of a particular quality",
                "to be stronger in your character than people expect",
                "used for emphasizing that someone or something has a lot of a particular quality"]
            state = {
                ...state,
                employeeDetails: currentEmpObj.name + ' - '+ personality[Math.floor(Math.random() * personality.length)]
            };

            break;
    }

    return state;


}
export default employeeReducer;

