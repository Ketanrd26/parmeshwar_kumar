import React from 'react'
import "./VideoSection.scss"

function VideoSection() {
    return (
        < >
            <div className='parent parent-video'>
                <video
                    src="https://wedesignthemes.s3.us-east-1.amazonaws.com/gayu/Gayu-video-01.mp4"
                    controls 
                    autoPlay
                    loop
                    muted 
                    className="video"
                />
            </div>
        </>
    )
}

export default VideoSection
