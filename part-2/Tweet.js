const Tweet = ({ username, user, date, message }) => {
    return (
    <div>
        <p>The user {user} who goes by {username} wrote {message} on {date}</p>
        {/* <p>Name of User Is: {user}</p>
        <p>Date Is: {date}</p>
        <p>Message Is: {message}</p> */}
    </div>
    )  
}
  