import React from "react"

const StackRate = ({ stack, score, stackid }) => {
  return (
    <div className="bar flex" key={stackid}>
      <div className="bar fill" style={{ width: `${score}%` }}>
        <div className="tag bold flex">{stack}</div>
      </div>
      <span>{score}%</span>
    </div>
  )
}

export default StackRate
