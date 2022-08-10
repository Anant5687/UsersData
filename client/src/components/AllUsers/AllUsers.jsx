import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import outerStyle from './User.module.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios'
import CardMedia from '@mui/material/CardMedia';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const AllUsers = () => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/api/get`).then((res) => {
            setApiData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [apiData])

    return (
        <>
            <h1 align="center" className={outerStyle.h1}>All Registered User Data</h1>

            <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" style={{ color: "white", marginLeft: "10%", marginTop: "3%" }}>Registration Form</Button>
            </Link>
            <TableContainer component={Paper} style={{ width: "70vw", marginLeft: "15%", marginTop: "5%" }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name of user</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Mobile No.</StyledTableCell>
                            <StyledTableCell align="right">Profile pic</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apiData.map((ele, i) => (
                            <StyledTableRow key={i}>
                                <StyledTableCell component="th" scope="row">
                                    <b> {ele.name}</b>
                                </StyledTableCell>
                                <StyledTableCell align="right">{ele.email}</StyledTableCell>
                                <StyledTableCell align="right">{ele.mobile}</StyledTableCell>
                                <StyledTableCell align="right"> <CardMedia
                                    style={{ width: 50, height: 50, marginLeft:"60%" }}
                                    component="img"
                                    image={ele.profile}
                                    alt="green iguana"
                                /></StyledTableCell>

                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AllUsers
