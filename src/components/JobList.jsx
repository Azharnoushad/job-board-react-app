import React from 'react'
import JobCard from './JobCard'

const JobList = ({data,setFilteredTag,filteredTag}) => {
  return (



    <div className="job-list">
       {
        data.map((job)=>{
            return (
                <JobCard job={job} key={job.id} setFilteredTag={setFilteredTag} filteredTag={filteredTag}/>
            )
        })
       }
    </div>
  )
}

export default JobList