import React, { Component } from 'react'

class List extends Component {
    state = {
        data: [
            { id: 1, name: 'Lorem' },
            { id: 2, name: 'Ipsum' },
            { id: 3, name: 'Sil' }
        ]
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
