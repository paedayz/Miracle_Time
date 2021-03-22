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
    // return (
    //     <DataTable>
    //         <DataTable.Header>
    //         <DataTable.Title>Dessert</DataTable.Title>
    //         <DataTable.Title numeric>Calories</DataTable.Title>
    //         <DataTable.Title numeric>Fat</DataTable.Title>
    //         </DataTable.Header>

    //         <DataTable.Row>
    //         <DataTable.Cell>Frozen yogurt</DataTable.Cell>
    //         <DataTable.Cell numeric>159</DataTable.Cell>
    //         <DataTable.Cell numeric>6.0</DataTable.Cell>
    //         </DataTable.Row>

    //         <DataTable.Row>
    //         <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
    //         <DataTable.Cell numeric>237</DataTable.Cell>
    //         <DataTable.Cell numeric>8.0</DataTable.Cell>
    //         </DataTable.Row>

    //         <DataTable.Row>
    //         <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
    //         <DataTable.Cell numeric>237</DataTable.Cell>
    //         <DataTable.Cell numeric>8.0</DataTable.Cell>
    //         </DataTable.Row>


    //         <DataTable.Pagination
    //         page={1}
    //         numberOfPages={3}
    //         onPageChange={page => {
    //             console.log(page);
    //         }}
    //         label="1-2 of 6"
    //         />
    //     </DataTable>
    // )
  
};

export default MyComponent;