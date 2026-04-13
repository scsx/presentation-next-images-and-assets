import React from 'react'

const ImagesClient = () => {
  return (
    <div className="w-full flex flex-col gap-4">

      {/* iframes side by side */}
      <div className="flex gap-4">
        <iframe
          src="/images/bad?1"
          className="w-1/2 h-[600px] border"
          title="badscript"
        />
        <iframe
          src="/images/good?2"
          className="w-1/2 h-[600px] border"
          title="goodscript"
        />
      </div></div>
  )
}

export default ImagesClient