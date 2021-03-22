import React, {useState, Fragment} from 'react';
import { VictoryChart, VictoryZoomContainer,VictoryLine } from 'victory-native';

export default function App() {
    const [zoomDomain, setZoomDomain] = useState({ x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] })
  
   const handleZoom = (domain) => {
    setZoomDomain(domain);
    }
      return (
        <Fragment>
          <VictoryChart width={400} height={300} scale={{ x: "time" }}
            containerComponent={
              <VictoryZoomContainer
                zoomDimension="x"
                zoomDomain={zoomDomain}
                onZoomDomainChange={() => handleZoom()}
              />
            }
          >
              <VictoryLine
                style={{
                  data: { stroke: "tomato" }
                }}
                data={[
                  { a: new Date(1982, 1, 1), b: 125 },
                  { a: new Date(1987, 1, 1), b: 257 },
                  { a: new Date(1993, 1, 1), b: 345 },
                  { a: new Date(1997, 1, 1), b: 515 },
                  { a: new Date(2001, 1, 1), b: 132 },
                  { a: new Date(2005, 1, 1), b: 305 },
                  { a: new Date(2011, 1, 1), b: 270 },
                  { a: new Date(2015, 1, 1), b: 470 }
                ]}
                x="a"
                y="b"
              />
  
            </VictoryChart>
        </Fragment>
      );
  }