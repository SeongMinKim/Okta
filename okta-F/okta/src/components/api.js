// import React, {Component} from 'react';

// export default class Api extends Component{
// constructor(props) {
//   super(props);
//   this.state = {groups: [], isLoading: true};
//   this.remove = this.remove.bind(this);
// }

// componentDidMount() {
//   this.setState({isLoading: true});

//   fetch('api/groups')
//     .then(response => response.json())
//     .then(data => this.setState({groups: data, isLoading: false}));
//     console.log(this.data)
// }

// async remove(id) {
//   await fetch(`/api/group/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   }).then(() => {
//     let updatedGroups = [...this.state.groups].filter(i => i.id !== id);
//     this.setState({groups: updatedGroups});
//     console.log(this.id)
//     console.log({updatedGroups})
//   });
// }

// }
