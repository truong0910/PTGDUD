import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Name: '',
//             Age: ''
//         }
//     }
//     handleAddnewUser = (userObject) => {
//         this.setState({
//             listUser: [userObject, ...this.state.listUser]
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();//ngăn việc tải lại trang
//         //console.log(this.state)
//         this.props.handleAddnewUser({
//             id: Math.floor((Math.random() * 100) + 1) + "user",
//             Name: this.state.Name,
//             Age: this.state.Age
//         })
//         this.setState({
//             Name: '',
//             Age: ''
//         });
//     }
//     handleOnchangeInputName = (event) => {
//         this.setState({
//             Name: event.target.value
//         });
//     };
//     handleOnchangeInputAge = (event) => {
//         this.setState({
//             Age: event.target.value
//         });
//     };
//     render() {
//         return (
//             <div>
//                 <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
//                         <p>Your name: </p>
//                         <input type="text" value={this.state.Name}//gán giá trị mặc định
//                           onChange={(event) =>this.handleOnchangeInputName(event)} />
//                         <br />
//                         <p>Your Age: </p>
//                         <input type="number" value={this.state.Age}//gán giá trị mặc định
//                           onChange={(event) =>this.handleOnchangeInputAge(event)} />
//                         <br />
//                         <button>Submit</button>
//                     </form>

//                     {/* <div>
//             	        <span>{this.state.Name}</span>
//                         <span>{this.state.Age}</span>
//          	        </div> */}
//             </div>
//         );
//     }
// }

const AddUserInfor = (props) => {
    // state = {
    //     Name: 'Hien',
    //     Age: 28,
    //     Address: 'HCM'
    // }
    //chuyển sang hook
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');


    const handleOnchangeInput = (event) => {
          setName(event.target.value)
    }
    const handleOnchangeAge = (event) => {
          setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: Name,
            Age: Age
        })
    }
    return (
        <div>
            <form action="" onSubmit={(event) => handleOnSubmit(event)}>
                <label htmlFor="">Your name:</label>
                <input type="text" value={Name}
                 onChange={(event) => handleOnchangeInput(event)} />
                <br />
                <label htmlFor="">Your Age:</label>
                <input type="text"
                    onChange={(event) => handleOnchangeAge(event)}
                    value={Age} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddUserInfor;