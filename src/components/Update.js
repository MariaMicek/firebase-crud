import React from 'react'
import { db } from '../firebase'

class Update extends React.Component {
    state = {
        name: '',
        age: '',
        color: ''
    }

    componentDidMount() {
        const id = this.props.match.params.id

        db.ref(`/cats/${id}`).once('value', snapshot => {
            this.setState(snapshot.val())
        })

        // fetch(`https://first-project-marysia.firebaseio.com/cats/${id}.json`)
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState(data)
        //     })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        const id = this.props.match.params.id

        db.ref(`/cats/${id}`).set(this.state).then(this.props.history.push(`/read/${id}`))

        // fetch(
        //     `https://first-project-marysia.firebaseio.com/cats/${id}.json`,
        //     {
        //         method: 'PATCH',
        //         body: JSON.stringify(this.state)
        //     }
        // )
        //     .then(response => {
        //         if (response.ok) {
        //             this.props.history.push(`/read/${id}`)
        //         }
        //     })
        // event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Update form</h2>
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
            </div>
        )
    }
}

export default Update