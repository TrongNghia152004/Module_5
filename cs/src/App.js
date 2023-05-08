import './App.css';
import {Header} from "./component/header";
import {Footer} from "./component/footer";
import {ServiceList} from "./component/facility/service_list";
import {CustomerList} from "./component/customer/customer_list";
import {Contract} from "./component/contract/contract";
import {UpdateService} from "./component/facility/create_service";
import {EditService} from "./component/facility/edit_service";
import {CreateCustomer} from "./component/customer/create_customer";
import {UpdateCustomer} from "./component/customer/update_customer";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<ServiceList/>*/}
            {/*<CustomerList/>*/}
            {/*<Contract/>*/}
            {/*<UpdateService/>*/}
            {/*<EditService/>*/}
            {/*<CreateCustomer/>*/}
            <UpdateCustomer/>
            <Footer/>
        </div>
    );
}

export default App;
