import React from 'react'
import UserStatisticsChart from './UserStatisticsChart'
import MyKpi from './MyKpi'

export default function MyDashboard() {
  return (
    <>
    <div className="col-lg-8 col-12">
            <MyKpi/>
          <UserStatisticsChart/>

    </div>
        
    </>
  )
}
