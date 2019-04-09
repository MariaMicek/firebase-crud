import React, { Component } from 'react'

class List extends Component {
    state = {
        data: []
    }

    componentDidMount() {
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
                this.setState({data})
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
                    </div>
                )}
            </div>
        );
    }
}

export default List
