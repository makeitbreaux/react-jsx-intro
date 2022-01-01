const App = () => (
    <div>
        <Person name={"Briana"} age={31} hobbies={["coding", "quilting"]}/>
        <Person name={"Leah"} age={29} hobbies={["directing", "writing"]}/>
        <Person name={"Greyson"} age={11} hobbies={["gaming", "reptiles"]}/>
    </div>
  )
  
  
  
  ReactDOM.render(<App />, document.getElementById("root"))
  