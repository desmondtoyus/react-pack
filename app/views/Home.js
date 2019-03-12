import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Jumbotron from '../components/Jumbotron'
import Table from '../components/Table';
const content = [
    {
        name: 'Desmond',
        date: 'Nov 4 1993',
        email: 'desmond@pilotx.tv',
        plan: 'Custom'
    }, {
        name: 'Desmond2',
        date: 'Nov 4 1955',
        email: 'desmond2@pilotx.tv',
        plan: 'paid'
    }
]

class Home extends React.Component {
    state = {
        value: "",
        search: "",
        results: [],
        err:false

    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({err:false});
        const {search} = this.state;
        if (search === '') {
          this.setState({err:true});
        }
        const results = content.reduce((prev, curr) => {
            if (curr.name == search) {
                prev.push(curr);
            }
            return prev;
        }, []);
        this.setState({results})
    };
    render() {

        return (
            <div className="container">
                < Table content={this.state.results} label={'Home Table'}/>
                <div>
                    <form>
                        <input
                            type="text"
                            value={this.state.search}
                            name='search'
                            onChange={this.handleChange}/>
                        <button className="btn btn-outline-success my-2 my-sm-0"  id='search-btn' onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
                {this.state.err? <span> Input Error</span>: null}
            </div>
        );
    }
};

export default Home
