import React from 'react'

const JobList = () => {
  return (
    <div className="job-list">
        <div className="jobCard">
            <div className="companyLogo">
                <img src="images\loop-studios.svg" alt="" />
            </div>
            <div className="listingInfo">
                <div className="listingTitle">
                    <h3>Company Name</h3>
                    <span className='new'>NEW!</span>
                    <span className='featured'>FEATURED</span>
                </div>
                <h2>Frontend Developer</h2>
                <div className="listingMeta">
                    <span>1d Ago</span>
                    <span>Full Time</span>
                    <span>USA</span>
                </div>
            </div>
            <div className="listingTags">
                <span>Fronend</span>
                <span>HTML</span>
                <span>React</span>
                <span>Senior</span>
                
            </div>
        </div>
    </div>
  )
}

export default JobList