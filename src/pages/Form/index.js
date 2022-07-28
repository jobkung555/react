import React, { useState, useEffect } from 'react'
import Publiclayout from '../../layout/Public'
import styled from 'styled-components'
import axios from 'axios';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

const Form = () => {
    const [dataUser, setDataUser] = useState([])
    const [dataautocomplete, setDataAutoComplete] = useState(null)
    const [datevalue, setDateValue] = useState(null);
    const [timevalue, setTimeValue] = useState(null);
    const [datafilter, setDatafilter] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'avatar', headerName: 'Image', width: 150, renderCell: (r) => <Avatar src={r.value} variant="square"></Avatar> },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'time', headerName: 'Time', width: 200 },
    ];


    const getApi = () => {
        axios.get('https://62d5a29e15ad24cbf2caf682.mockapi.io/api/users')
            .then(function (response) {
                response.data.map(m => m['label'] = m.name)
                setDataUser(response.data)
            })
    }

    useEffect(() => {
        getApi()
    }, [])
    useEffect(() => {
        // console.log(dataUser)
        console.log(dataautocomplete)
        console.log(datevalue)
        console.log(timevalue)
        setDatafilter(dataUser.filter(f=>(f?.name == dataautocomplete?.name 
            || f?.date == `${datevalue?.getFullYear()}-${(datevalue?.getMonth()+1>9?(datevalue?.getMonth()+1):'0'+(datevalue?.getMonth()+1))}-${(datevalue?.getDate()>9?datevalue?.getDate():'0'+datevalue?.getDate())}`) 
            || ((f?.time).split`:`.splice(0,2).join`:`) == `${(timevalue?.getHours()>9?timevalue?.getHours():'0'+timevalue?.getHours())}:${(timevalue?.getMinutes()>9?timevalue?.getMinutes():'0'+timevalue?.getMinutes())}`)
            || [])
        console.log(datafilter)
    }, [dataautocomplete,dataUser,datevalue,timevalue])
    return (
        <Publiclayout>
            <Autocomplete
                onChange={(event, newValue) => {
                    setDataAutoComplete(newValue)
                }}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                disablePortal
                options={dataUser}
                renderInput={(params) => <TextField {...params} label="Users" />}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date Picker"
                    value={datevalue}
                    onChange={(newValue) => {
                        setDateValue(new Date(newValue));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Time Picker"
                    value={timevalue}
                    onChange={(newValue) => {
                        setTimeValue(new Date(newValue));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={datafilter.length && datafilter || dataUser}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </Publiclayout>
    )
}

export default Form