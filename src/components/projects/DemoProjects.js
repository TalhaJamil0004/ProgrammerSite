import React from 'react'
import "../../output.css"
import ProjectCardData from './ProjectCardData'
import ProjectStyling from './ProjectStyling'

const DemoProjects = () => {

let projects = ProjectCardData.map((value)=>{
   return <ProjectStyling heading={value.heading} paragraph={value.paragraph} imgsrc={value.imageSource}/>
})

  return (
    <div>
    {projects}
    </div>
  )
}

export default DemoProjects
