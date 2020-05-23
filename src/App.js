import React from 'react';

import {Cards, Chart, CountryPicker, Footer} from './components'
import styles from "./App.module.css";
import {fetchData} from './api';
import CovidImg from './images/image.png';

class App extends React.Component{

    state = {
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    handleChange = async (data) =>{
        const countryData = await fetchData(data);
        this.setState({ data:countryData, country: data })
    }

    render(){
        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <img src={CovidImg} alt="Covid Images" width="370px" className={styles.logoimg} />
                <Cards data={data} />
                <CountryPicker handleChange={this.handleChange} />
                <Chart data={data} country={country} />
                <Footer />
            </div>
        );
    }
}

// const App = () =>{
//     return(
//     <div className={styles.container}>
//         <Cards />
//         <Chart />
//         <CountryPicker />
//     </div>
//     )
// }

export default App;