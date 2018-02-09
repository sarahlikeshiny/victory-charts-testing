import * as React from 'react';
// import * as V from 'victory';// importing the whole libray is huge (110K)
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'; // just the bar chart is still 100K

export class BarChart extends React.Component {
    
              data = [
                {quarter: 1, earnings: 18000},
                {quarter: 2, earnings: 13250},
                {quarter: 3, earnings: 15000},
                {quarter: 4, earnings: 12000}
              ];
              
              render(): JSX.Element {
                  return (
                    <div>
                      <VictoryChart
                        domainPadding={5}
                        theme={VictoryTheme.material}
                      >
                        <VictoryAxis
                          tickValues={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
                        />
                        <VictoryAxis
                          dependentAxis={true}
                          tickFormat={(x) => (`$${x / 1000}k`)}
                        />
                          <VictoryBar
                            data={this.data}
                            x={'quarter'}
                            y={'earnings'}
                          />
                      </VictoryChart>
                    </div>
                  );
                }
              }