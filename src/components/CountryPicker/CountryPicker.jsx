import React,{useEffect, useState} from 'react';
import {NativeSelect, FormControl  } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';


const CountryPicker = ({ handleChange  }) =>{
    const [countries, setcountries] = useState([]);
    useEffect(()=>{
        const fetchCountry = async () =>{
            const fetchedCountry = await fetchCountries();
            setcountries(fetchedCountry);
        }
        fetchCountry();
    },[]);

    return(
        <FormControl className={styles.formcontainer}>
            <NativeSelect onChange={(e)=> handleChange(e.target.value) }>
                <option value="">Global</option>
                {countries.map((country, i)=> <option key={i} value={country}>{country}</option>) }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;