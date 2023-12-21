import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
    const {username} = props

    if(!props.isLogin) {
        return <div>you are not logged in</div>
    }


    return (
        <div>
            {props.name} ({props.age})
            {props.title} {props.zip}
            <h1>{username}</h1>
            {
                props.friends.map((friend,index) =>(
                    <div key={index}>{friend}</div>
                ))
            }
            {
                props.friends.map((friend,index) =>{
                    const name= "ysk";
                    return <div key={index}>{name} and {friend} are friends</div>
                })
            }
        </div>
    );
};

User.propTypes = {  //hangi tipte prop aldığımızı belirtmek için.
   name : PropTypes.string.isRequired, //hem zorunlu hem string
   isLogin: PropTypes.bool,
   age: PropTypes.oneOfType([ //birden fazla tip içeriyorsa.
       PropTypes.number,
       PropTypes.string
   ]),
   address: PropTypes.shape({  //objectlerde shape kullanılır.
        title: PropTypes.string,
        zip: PropTypes.number
    })
}
User.defaultProps = {
    isLogin:false   //eğer isLogin user comp a gönderilmemişse varsayılan değeri falsedur.
}
export default User;

