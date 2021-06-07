import React from 'react'
import { Link } from 'react-router-dom'


const LangLinkRu = () => {
  return (
    <div className="select-lang">
      <Link to="/">
        <button data-tip='English' data-for="english" style={{background: "url('https://api.iconify.design/twemoji:flag-for-flag-russia.svg') no-repeat center center / contain"}}>
        </button>
      </Link>
    </div>
  )
}

export default LangLinkRu
