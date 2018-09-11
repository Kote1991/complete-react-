import React from 'react';

class Customer extends React.Component {
    constructor() {
        super();

        this.state = {
            cusomter: [
                { "id": "cust_07", "name": "Sujath", "phno": " 944 *** 9408" },
                { "id": "cust_06", "name": "Rakesh", "phno": " 944 *** 9407" }
            ]
        }
    }
    displayFullDetail(){


    }
    generateCustomerList() {
        return this.state.cusomter.map((val, index) => {
            return (
                <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.phno}</td>
                </tr>);
        });
    }
    componentDidMount() {

        setTimeout(()=>{
            console.log('get Data from express server');
            fetch('api/customer').then((res) => res.json())
            .then(data => {
                this.setState((prev )=>(
                    { ...prev,cusomter: prev.cusomter.concat(data.customer) }));
            })
            .catch(e => console.log("ERROR ", e));
        },5000);
    }
    render() {
        return (
            <div>
                <h3>Cusomter List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>SI.NO</th>
                            <th>NAME</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateCustomerList()}
                    </tbody>
                </table>

            </div>


        )
    }

}

export default Customer;