import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
    state = {
        data: []
    }

    fetchData = () => {
        fetch('https://first-project-marysia.firebaseio.com/cats.json')
            .then(response => response.json())
            .then(responseData => {
                const data = []

                if (responseData === null) return

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
                        <Link to={`/read/${el.id}`}>
                            {el.name} 
                        </Link>
                        <Link to={`/update/${el.id}`}>
                            {' UPDATE '}
                        </Link>
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
