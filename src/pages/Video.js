import React from 'react'

const Video = () => {

          
  const url = <iframe width="720" height="480" src="https://www.youtube.com/embed/y3f7-2fl-jo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myvideo"></iframe>

  return (
    <div className="container projects p-4 p-sm-5" style={{maxWidth: "800px"}}>
      <div className="row m-auto">
        <div className="col text-center ratio ratio-16x9">
          { url }
        </div>
      </div>
    </div>
  )
}

export default Video
