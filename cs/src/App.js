import './App.css';
import {Header} from "./component/header";
import {Footer} from "./component/footer";
import {ServiceList} from "./component/facility/service_list";
import {CustomerList} from "./component/customer/customer_list";
import {Contract} from "./component/contract/contract";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<ServiceList/>*/}
            {/*<CustomerList/>*/}
            <Contract/>
            <Footer/>
        </div>
    );
}

export default App;
