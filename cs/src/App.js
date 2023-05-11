import './App.css';
import {Header} from "./component/header";
import {Footer} from "./component/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ServiceList} from "./component/facility/service_list";
import {CreateService} from "./component/facility/create_service";
import {EditService} from "./component/facility/edit_service";
import {CustomerList} from "./component/customer/customer_list";
import {CreateCustomer} from "./component/customer/create_customer";
import {UpdateCustomer} from "./component/customer/update_customer";
import {Contract} from "./component/contract/contract";
import {CreateContract} from "./component/contract/create_contract";

function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<ServiceList/>}/>*/}
                {/*<Route path="/addFacility" element={<CreateService/>}/>*/}
                {/*<Route path="/editFacility/:id" element={<EditService/>}/>*/}
                <Route path="/" element={<CustomerList/>}/>
                <Route path="/addCustomer" element={<CreateCustomer/>}/>
                <Route path="/editCustomer/:id" element={<UpdateCustomer/>}/>
                {/*<Route path="/" element={<Contract/>}/>*/}
                {/*<Route path="/addContract" element={<CreateContract/>}/>*/}
            </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;
