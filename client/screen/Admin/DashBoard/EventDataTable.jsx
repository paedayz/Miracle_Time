import React, {useState} from 'react';
import { DataTable } from 'react-native-paper';
import {Text} from 'react-native'

// Redux
import {useSelector} from 'react-redux'
import { Fragment } from 'react';

const MyComponent = () => {
    const [showData, setShowData] = useState([])
    const [nowPage, setNowPage] = useState(0)
    const dashboardEvent = useSelector(state => state.data.dashboardEvent)
    const [months, setMonths] = useState([ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ])

    const mapEventData = (data) => {
        return(
            <Fragment>
                {data.slice((nowPage * 2) + nowPage, ((nowPage*2)+(nowPage+2)) + 1).map((event) => (
                    <DataTable.Row key={event.a}>
                        <DataTable.Cell>{`${months[event.a.getMonth()]}`}</DataTable.Cell>
                        <DataTable.Cell numeric>{`${event.a.getFullYear()}`}</DataTable.Cell>
                        <DataTable.Cell numeric>{event.b}</DataTable.Cell>
                    </DataTable.Row>
                    
                    ))}
            </Fragment>
            
            
        )
        
    }

    if(dashboardEvent.length === 0) {
        return (
            <Text>Loading</Text>
        )
    } else if(showData.length === 0) {
        setShowData(dashboardEvent)

        return (
            <DataTable>
                <DataTable.Header>
                <DataTable.Title>Month</DataTable.Title>
                <DataTable.Title numeric>Year</DataTable.Title>
                <DataTable.Title numeric>Amount</DataTable.Title>
                </DataTable.Header>

                {mapEventData(showData)}

                <DataTable.Pagination
                page={nowPage}
                numberOfPages={Math.ceil(dashboardEvent.length/3)}
                onPageChange={page => {
                    setNowPage(page)
                }}
                label={`page ${nowPage+1} of ${Math.ceil(dashboardEvent.length/3)}`}
                />
            </DataTable>
        )
    } else {
        
        return (
            <DataTable>
                <DataTable.Header>
                <DataTable.Title>Month</DataTable.Title>
                <DataTable.Title numeric>Year</DataTable.Title>
                <DataTable.Title numeric>Amount</DataTable.Title>
                </DataTable.Header>

                {mapEventData(dashboardEvent)}

                <DataTable.Pagination
                page={nowPage}
                numberOfPages={Math.ceil(dashboardEvent.length/3)}
                onPageChange={page => {
                    setNowPage(page)
                }}
                label={`page ${nowPage+1} of ${Math.ceil(dashboardEvent.length/3)}`}
                />
            </DataTable>
        )
    }
};

export default MyComponent;