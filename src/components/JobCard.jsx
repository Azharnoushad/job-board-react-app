import React from "react";

const JobCard = ({ job,setFilteredTag,filteredTag }) => {

    let tags = [job.role,job.level,...job.languages,...job.tools]

    const getTag = (tag) => {
        setFilteredTag((prevState)=>{
            return (
                 [...prevState,tag]
            )
           
        })
    }
   
  return (
   
    <div className="jobCard">
      <div className="companyLogo">
        <img src={job.logo} alt="" />
      </div>
      <div className="listingInfo">
        <div className="listingTitle">
          <h3>{job.company}</h3>
          {job.new && <span className="new">NEW!</span>}

          {job.featured && <span className="featured">FEATURED</span>}
        </div>
        <h2>{job.position}</h2>
        <div className="listingMeta">
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="listingTags">
        {
            tags.map((tag,i)=>{
                return (
                    <span key={i} onClick={()=>getTag(tag)}>{tag}</span>
                )
            })
        }
        
      </div>
    </div>
  );
};

export default JobCard;
