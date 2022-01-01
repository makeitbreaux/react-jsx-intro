const NamedComponent = (props) => {
    let name;
    return (
        <div>
            <p>
                My Name is: <b> {props.name} </b>
            </p>
        </div>
    )
}