const Liste = () => {
    const numbers = [1, 2, 3, 4, 5];
    const usersInfo = [
        {
            username: "Eric",
            email: "XY@gmail.com",
            location: "DE",
        },
        {
            username: "Yanik",
            email: "RFX@gmail.com",
            location: "Arabt",
        },
        {
            username: "Lucas",
            email: "FFF@gmail.com",
            location: "Rostock",
        }

    ];

    return <div>

        {numbers.map((number) => (
            <ul key={number }>

                <li> {number}</li>
            </ul>
        ))}

        {usersInfo.map((user) => (
            <ul key={Math.random()}>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.location}</li>

            </ul>
            /* oder mit
            {usersInfo.map(({username,email,location}) => (
            <ul key={Math.random()}>
                <li>{username}</li>
                <li>{email}</li>
                    <li>{location}</li>
                */
        ))} 


    </div>



};

export default Liste;