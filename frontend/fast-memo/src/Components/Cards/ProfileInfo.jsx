import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({onLogout}) => {
  return (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-200 hover:bg-blue-300">
            {getInitials("Joseph Ikeanyi")}</div>
        <div>
            <p className=" text-sm font-medium">Joseph Ikeanyi</p>
            <button className="text-slate-800 underline text-sm" onClick= {onLogout}>Logout</button>
        </div>
      
    </div>
  )
}

export default ProfileInfo
