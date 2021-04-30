import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'

import { fetchCountries } from '../../api'

import {styles} from './Country.module.css'



const Country = ({handleCountryChange}) => {

    const [fetchedCountries,setFetchedCountries] = useState([]);

useEffect(() => {
    const fetchAPI = async () => {
        setFetchedCountries(await fetchCountries());
    }
    fetchAPI();
},[setFetchedCountries]);

    return (
        <FormControl className='styles.form'>
            <NativeSelect defaultValue=''  onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value = 'global'>GLOBAL</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country
