import './App.css';
import Header from './components/Header'
import User from "./components/User";

const username = "YSK"
const title = "YSK App"
const isLogin = true

function App() {
    return (
        /*  <>   div kullanmak istemezsek böyle (<>) anonim olarak oluşturabiliriz*/
        <div className="App">
            <Header></Header>
            <p className="ab">      {/*class değil className kullan*/}
                lorem ipsum dolor sit amet, consectetur adipis
            </p>
            <label htmlFor="input">  {/*for değil htmlFor kullan*/}
                Country
                <input type="text" id="input"/>
            </label>
            <h1>{title}</h1>
            <User adress={{title:"Kayseri",zip:38020}}  username={username} age={"12"} name={"yasin"} isLogin={isLogin} friends={["ahmet","mehmet","samet"]}></User>
        </div>
        /* </>  */
    );
}
export default App;
