import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class Mycomponent extends React.Component {
//     // state = {
//     //     Name: 'Eric',
//     //     Age: 28,
//     //     Address: 'HCM'
//     // }
//     // sum = (a, b) => {
//     //     return a + b;
//     // }
//     state = {
//         listUser: [
//             {id: 1, Name: "Dung", Age: 49},
//             {id: 2, Name: "Hoang", Age: 34},
//             {id: 3, Name: "Chien", Age: 32},
//         ]
//     }
//     handleDeleteUser = (userID) => {
//         let listUserClone = this.state.listUser;
// // let listUserClone=[...this.state.listUser]//có thể viết theo cách này
//         listUserClone = listUserClone.filter(item => item.id !== userID)
//         this.setState({
//             listUser: listUserClone
//         })
//     }

//     handleAddnewUser = (userObject) => {
//         this.setState({
//             listUser: [userObject, ...this.state.listUser]
//         })
//     }
//     render() {
//         // let parent = "this is my parent";
//         return(
//             // <div>My first component</div>//chỉ trả về 1 phần tử	
//             // <div>
//             //     My name is: {this.state.Name}
//             //     <br />
//             //     Address: {this.state.Address}
//             // </div>
//             <div>
//                 {/* <Childcomponent myProp={parent}></Childcomponent>                */}
//                 {/* <Childcomponent myProp={parent} sum={this.sum}></Childcomponent> */}
//                 <AddUserInfor handleAddnewUser={this.handleAddnewUser}></AddUserInfor> 
//                 <hr />

//                 <DisplayInfor listUser={this.state.listUser}
//                 handleDeleteUser={this.handleDeleteUser}
//                 ></DisplayInfor>
//             </div>

//         );
//     }
// }

const Mycomponent = (props) => {
    const [listUser, setListUser] = useState([
        { id: 1, Name: "Dung", Age: 49 },
        { id: 2, Name: "Hoang", Age: 17 },
        { id: 3, Name: "Chien", Age: 32 },
    ]);

    const handleAddnewUser = (userObject) => {
        setListUser([userObject, ...listUser]);
    };

    const handleDeleteUser = (userID) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userID)
        setListUser(listUserClone);
    }

    const deleteAll = () => {
        if (window.confirm("Are you sure you want to delete all users?")) {
            setListUser([]);
        }
    }


    return (
        <div>
            <AddUserInfor handleAddnewUser={handleAddnewUser}></AddUserInfor>    
            <hr />
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser}  deleteAll={deleteAll}></DisplayInfor>
        </div>
    );
};

export default Mycomponent;