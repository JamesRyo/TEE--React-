import {useState} from "react";
import Counter from "./components/Counter";
import InputExample from "./components/InputExample";

function App() {  //state değiştiğinde return içinde tekrar render edilir.
  const [name, setName] = useState("yasin");
  const [age, setAge] = useState(24);
  const [friends,setFriends] = useState(["Ahmet","Mehmet"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34756 });

  return (
    <div className="App">
        <h1>Hello {name}!</h1>
        <h2>{age}</h2>

        <button onClick={() => setName("mehmet")}>Change name</button>
        <button onClick={() => setAge(25)}>Change age</button>
        {
            friends.map((friend,index) => (
                <div key={index}>{friend}</div>
            ))
        }
        <button onClick={() => setFriends([...friends,"Yasin"])}>Add Friend</button>  {/*öncekileri kaybetmemek için ... kullandık.*/}
        <hr />
        <br></br>

        <h2>Address</h2>
        <div>
            {address.title} {address.zip}
        </div>
        <br />
        <button
            onClick={() => setAddress({ ...address, title: "Kayseri" })}>change address  {/*sadece adresin title i değişir*/}
        </button>

        <Counter></Counter>

        <InputExample></InputExample>
    </div>
  );
}

export default App;
