import React from 'react'
import NavbarEn from '../NavbarEn'

const Video = () => {

          
  const url = <iframe className="personal-video" src="https://www.youtube.com/embed/y3f7-2fl-jo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myvideo"></iframe>

  return (
    <>
      <NavbarEn />
      <div className="container projects p-4 p-sm-5" style={{maxWidth: "800px", maxHeight: "500px"}}>
        <div className="row m-auto">
          <div className="col ratio ratio-16x9">
            { url }
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
