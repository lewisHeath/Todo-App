import React from 'react'

function SignIn() {

    //username and password state
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    //sign in function
    async function signIn(e) {
        try {
            e.preventDefault();
            const response = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            console.log(response);
            if (response.status === 200) {
                window.location = "/to-do-list";
            } else {
                alert('Invalid username or password');
            }
            alert('You are signed in');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h1>Sign In</h1>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn btn-success' onClick={(e) => signIn(e)}>Sign In</button>
        </div>
    )
}

export default SignIn