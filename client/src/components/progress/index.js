import React from 'react'


//bootstrap for progress bar (to show progress of file upload)
const Progress = ({ percentage }) => {
    return (
        <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: `${percentage}%` }}>{percentage}%</div>
            
        </div>
    )
}


export default Progress
