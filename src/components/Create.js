import React from 'react'
import faker from 'faker'

class Create extends React.Component {
    state = {
        name: '',
        age: '',
        color: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        fetch(
            'https://first-project-marysia.firebaseio.com/cats.json', 
            {
                method: 'POST',
                body: JSON.stringify({
                    ...this.state,
                    role: faker.name.jobTitle()
                })
            }
        )
        .then(response => {
            if(response.ok) {
                this.props.history.push('/')
            }
        })
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Name:
                <input
                        type={'text'}
                        name={'name'}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Age:
                <input
                        type={'text'}
                        name={'age'}
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Color:
                <input
                        type={'text'}
                        name={'color'}
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button>
                        SEND
                    </button>
                </div>
            </form>
        )
    }
}

export default Create