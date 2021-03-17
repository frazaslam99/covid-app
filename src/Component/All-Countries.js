import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50
    },
    title: {
        textAlign: 'left'
    },
    table: {
        height: 450,
        overflowY: 'scroll',
        display: 'block'
    }
}));

export default function AllCountries() {
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://disease.sh/v3/covid-19/countries");
            let data = await response.json();

             setGlobalData(Object.values(data))
            console.log(Object.values(data))

        }
        getData();
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <table className={classes.table}>
                <thead>
                    <tr className={classes.title}>
                        <th>Country Name</th>
                        <th>Total Cases</th>
                        <th>Active Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {globalData.map((key, ind) => {
                        return (
                            <tr key={ind}>
                                <th className={classes.title}>
                                    {globalData[ind].country}
                                </th>
                                <td>
                                    {globalData[ind].cases}
                                </td>
                                <td>
                                    {globalData[ind].active}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}