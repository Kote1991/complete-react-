import React from 'react';

class ListEmp extends React.Component {
    constructor() {
        super();
    }
    showDetails(empID) {
        this.props.empDetailerView(empID);
    }
    loopvalues() {
        return (
            this.props.empList ? this.props.empList.map((val, i) => {
                return (
                    <p key={val.id} onClick={this.showDetails.bind(this, val.id)}>
                        {val.name}
                    </p>)
            }) : null);
    }

    render() {
        return (
            <div>
                {this.loopvalues()}
            </div>

        )
    }
}

export default ListEmp;