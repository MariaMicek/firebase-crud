import React from 'react'
import faker from 'faker'
import { db } from '../firebase'

class Create extends React.Component {
    state = {
        name: '',
        age: '',
        color: '',
        url: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {

        const headers = {
            'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
        }

        fetch(`https://api.thecatapi.com/v1/images/search`, { headers })
            .then(response => response.json())
            .then(data => {
                this.setState({ url: data[0].url }, () => {

                    db.ref('/cats').push({
                        ...this.state,
                        role: faker.name.jobTitle()
                    }).then(this.props.history.push('/'))
                    // fetch(
                    //     'https://first-project-marysia.firebaseio.com/cats.json',
                    //     {
                    //         method: 'POST',
                    //         body: JSON.stringify({
                    //             ...this.state,
                    //             role: faker.name.jobTitle()
                    //         })
                    //     }
                    // )
                    //     .then(response => {
                    //         if (response.ok) {
                    //             this.props.history.push('/')
                    //         }
                    //     })
                })
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