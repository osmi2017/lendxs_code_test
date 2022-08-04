import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Home from "./Home"


class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

  

    

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"http://localhost:8000/client/List/")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

return (<div>
    <Link className="btn btn-dark" to={'/'}>Go to Home</Link><center><h2>List of clients </h2></center>
    <table className="table table-striped table-bordered table-sm" cellspacing="0" width="50" >
        <thead className="thead-dark">
            <tr>
                <th>Nom</th>
                <th>Phone Number</th>
                <th>Email</th>
                
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr>
                    <td>{item.Name}</td>
                    <td>{item.Phone_Number}</td>
                    <td>{item.Email}</td>
                    
                </tr>
            ))}
        </tbody>
    </table>
</div>)
};
}


export default App;
