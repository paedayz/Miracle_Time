import React, {useState, Fragment} from 'react';
import {Text} from 'react-native'
import { VictoryChart, VictoryZoomContainer,VictoryLine, VictoryBar } from 'victory-native';

// Redux
import {useSelector} from 'react-redux'

export default function App() {
  const month = (new Date()).getMonth()
  const year = (new Date()).getFullYear()
  const [zoomDomain, setZoomDomain] = useState({ x: [new Date(year, month-2, 1), new Date(year, month+1, 1)] })
  const dashboardEvent = useSelector(state => state.data.dashboardEvent)

   const handleZoom = (domain) => {
    setZoomDomain(domain);
    }

    if(dashboardEvent.length != 0) {
      return (
        <Fragment>
          <VictoryChart width={400} height={250}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={zoomDomain}
                onZoomDomainChange={(domain) => handleZoom(domain)}
              />
            }
          >
            <VictoryBar
                style={{ data: { fill: "#17A0FF" } }}
                data={dashboardEvent}
                x="a"
                y="b"
              />
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={dashboardEvent}
                x="a"
                y="b"
              />
  
            </VictoryChart>
        </Fragment>
      );
    } else {
      return(
        <Text>Loading</Text>
      )
      
    }
      
  }