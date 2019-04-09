import React from 'react'

class Read extends React.Component {
    state = {}

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`https://first-project-marysia.firebaseio.com/cats/${id}.json`)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            })
    }

    render() {
        return (
            <div>
                <p>
                    Name: {this.state.name}
                </p>
                <p>
                    Age: {this.state.age}
                </p>
                <p>
                    Color: {this.state.color}
                </p>
                <p>
                    Role: {this.state.role || null}
                </p>
            </div>
        )
    }
}

export default Read