import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Legend, Bar, Line } from 'recharts';

const Overview = () => {

    const data = [
        {
            name: 'Jan-Feb',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Mar-Apr',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'May-Jun',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Jul-Aug',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Sept-Oct',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Nov-Dec',
            uv: 3694,
            pv: 3800,
            amt: 2500,
        },
    ];
    const barData = [
        {
            name: 'Jan',
            investments: 590,
            profits: 800,
            costs: 1400,
        },
        {
            name: 'Feb',
            investments: 868,
            profits: 967,
            costs: 1506,
        },
        {
            name: 'Mar',
            investments: 1397,
            profits: 1098,
            costs: 989,
        },
        {
            name: 'Apr',
            investments: 1480,
            profits: 1200,
            costs: 1228,
        },
        {
            name: 'May',
            investments: 1520,
            profits: 1108,
            costs: 1100,
        },
        {
            name: 'Jun',
            investments: 1600,
            profits: 1680,
            costs: 1700,
        },
    ];

    return (
        <section className='lg:overflow-hidden'>

            <div className='flex justify-center mt-10'>
                <div className="rounded-lg grid lg:grid-cols-6 grid-cols-2 bg-primary shadow-md">

                    <div className="stat">
                        <div className="">Weekly Orders</div>
                        <div className="stat-value my-1">31K</div>
                        <div className="">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="">New Users</div>
                        <div className="stat-value my-1">4,200</div>
                        <div className="">↗ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="">New Registers</div>
                        <div className="stat-value my-1">1,200</div>
                        <div className="">↘︎ 90 (14%)</div>
                    </div>

                    <div className="stat">
                        <div className="">Total Companies</div>
                        <div className="stat-value my-1">986</div>
                        <div className="">↗ 60 (19%)</div>
                    </div>

                    <div className="stat">
                        <div className="">Total Feedback</div>
                        <div className="stat-value my-1">882</div>
                        <div className="">↗ 120 (39%)</div>
                    </div>

                    <div className="stat">
                        <div className="">Order Amount</div>
                        <div className="stat-value my-1">$ 1.2M</div>
                        <div className="">↗ 60 (19%)</div>
                        <div className="text-sm mt-1">1 Feb - 2 March</div>
                    </div>

                </div>
            </div>

            <div className='grid lg:grid-cols-2 mt-16 lg:pl-7 gap-5'>
                <div>

                    <p className='text-center capitalize mb-5 text-lg font-semibold'>Last year revenue 2021</p>

                    <div style={{ width: '95%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#65C3C8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className='mt-8 lg:mt-0'>

                    <p className='text-center capitalize mb-5 text-lg font-semibold'>Current year revenue</p>

                    <div style={{ width: '95%', height: 340 }}>
                        <ResponsiveContainer>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={barData}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="costs" fill="#65C3C8" stroke="#8884d8" />
                                <Bar dataKey="profits" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="investments" stroke="#ff7300" />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Overview;