import React, {useState, Fragment} from 'react';
import { VictoryChart, VictoryZoomContainer,VictoryLine } from 'victory-native';

export default function App() {
    const [zoomDomain, setZoomDomain] = useState({ x: [new Date(1990, 1, 1), new Date(1990, 4, 1)] })
  
   const handleZoom = (domain) => {
    setZoomDomain(domain);
    }
      return (
        <Fragment>
          <VictoryChart width={400} height={300}
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
                  { a: new Date(1990, 1, 1), b: 125 },
                  { a: new Date(1990, 2, 1), b: 257 },
                  { a: new Date(1990, 2, 2), b: 300 },
                  { a: new Date(1990, 2, 3), b: 300 },
                  { a: new Date(1990, 3, 1), b: 345 },
                  { a: new Date(1990, 4, 1), b: 515 },
                  { a: new Date(1990, 5, 1), b: 132 },
                  { a: new Date(1990, 6, 1), b: 305 },
                  { a: new Date(1990, 7, 1), b: 270 },
                  { a: new Date(1991, 8, 1), b: 470 }
                ]}
                x="a"
                y="b"
              />
  
            </VictoryChart>
        </Fragment>
      );
  }