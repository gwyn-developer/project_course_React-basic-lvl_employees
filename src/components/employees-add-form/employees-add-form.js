import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length >= 3 && this.state.salary !== '') {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                error: 'false'
            })
        } else {
            this.setState({
                error: 'true'
            })
        }
    }

//     static onLog = () => {
//          console.log('hello epta');
//     }

//     static logged = 'on';
 
    render() {
        const {name, salary, error} = this.state;
 
        let classNames = 'form-control new-post-label';
 
        if (error === 'true') {
            classNames += ' red';
        }

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className={classNames}
                        placeholder="Как его зовут?"
                        name="name"
                        error={error}
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className={classNames}
                        placeholder="З/П в $?"
                        name="salary"
                        error={error}
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
            </form>
            </div>
        );
    }
}

// EmployeesAddForm.onLog();

// console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;
