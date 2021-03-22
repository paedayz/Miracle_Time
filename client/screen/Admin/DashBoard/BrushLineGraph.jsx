import React, {useState, Fragment} from 'react';
import {Text} from 'react-native'
import { VictoryChart, VictoryZoomContainer,VictoryLine } from 'victory-native';

// Redux
import {useSelector} from 'react-redux'

export default function App() {
  const [zoomDomain, setZoomDomain] = useState({ x: [new Date(2021, 0, 1), new Date(2021, 4, 1)] })
  const dashboardEvent = useSelector(state => state.data.dashboardEvent)

   const handleZoom = (domain) => {
    setZoomDomain(domain);
    }

    if(dashboardEvent.length != 0) {
      return (
        <Fragment>
          <VictoryChart width={400} height={300} 
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={zoomDomain}
                onZoomDomainChange={(domain) => handleZoom(domain)}
              />
            }
          >
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