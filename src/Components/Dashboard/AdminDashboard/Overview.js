import React from 'react';

const Overview = () => {
    return (
        <section>

            <div className='flex justify-center mt-10'>
                <div className="stats stats-vertical lg:stats-horizontal bg-primary shadow-md">

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

        </section>
    );
};

export default Overview;