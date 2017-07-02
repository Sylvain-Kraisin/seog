import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import * as basicdata from './BasicData.jsx';


class ChartEvo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kpiName: 'Visits',
            data: evoData,
            dataKey: 'visits'
        };
    }
    render() {
        return (
            <div>
                <div className="left-1">
                   <h3>{this.state.kpiName}, evolution</h3>
                   <div className="box-4">
                       <ResponsiveContainer height={130}>
                        <AreaChart data={this.state.data}
                            margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                          <XAxis dataKey="name"/>
                          <YAxis/>
                          <CartesianGrid strokeDasharray="3 3"/>
                          <Tooltip/>
                          <Area type='monotoneX' dataKey={this.state.dataKey} stroke='#000' fill='#000' dot={{ stroke: 'black', strokeWidth: 1 }}/>
                        </AreaChart>
                    </ResponsiveContainer>
                   </div>
                </div> 
            </div> 
        );
     }
}

export default ChartEvo;