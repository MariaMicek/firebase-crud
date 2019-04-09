import React from 'react'

class Create extends React.Component {
    state = {
        name: null,
        age: null
    }

    handleChange = (event, fieldName) => {
        this.setState({[fieldName]: event.target.value})
    }

    render() {
        return (
            <form>
                <div>
                    Name:
                <input
                        value={this.state.name}
                        onChange={event => this.handleChange(event, 'name')}
                    />
                </div>
                <div>
                    Age:
                <input
                        value={this.state.age}
                        onChange={event => this.handleChange(event, 'name')}
                    />
                </div>
                <div>
                    <button>SEND</button>
                </div>
            </form>
        )
    }
}

export default Create