import React, { Component } from 'react'

class List extends Component {
    state = {
        data: []
    }

    fetchData = () => {
        fetch('https://first-project-marysia.firebaseio.com/cats.json')
            .then(response => response.json())
            .then(responseData => {
                const data = []
                Object.entries(responseData).forEach(el => {
                    data.push(
                        {
                            id: el[0],
                            ...el[1]
                        }
                    )
                })
                this.setState({ data })
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    handleRemove = (id) => {
        fetch(`https://first-project-marysia.firebaseio.com/cats/${id}.json`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) this.fetchData()
            })
    }

    render() {
        return (
            <div>
                {this.state.data.map(el =>
                    <div
                        key={el.id}
                    >
                        {el.name}
                        <button
                            onClick={() => this.handleRemove(el.id)}
                        >
                            DELETE
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default List
