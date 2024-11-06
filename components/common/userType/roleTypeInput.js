import React from 'react'


const RoleTypeInput = ({ user, icon, userType, setUserType }) => {
  return (
    <div onClick={() => setUserType(user)} className={`  flex flex-col gap-[2rem] justify-center items-center  px-[1rem] py-[1rem] w-[15rem] h-[15rem] ${userType == user ? "border-[4px] dark:dark-user-selected user-selected  text-black  scale-110 border-[#ff9d6cc6] " : "border-[1px] dark:dark-user-not-selected user-not-selected "}  rounded-md cursor-pointer duration-300 `} >
      <div className={` flex justify-center items-center dark:text-[#39396e] text-primary text-[2.5rem] w-[6rem] h-[6rem] user-elipse-gradient rounded-full `} >
        {icon}
      </div>
      <h2 className=' font-nunito font-[600]    ' >{user}</h2>
    </div>
  )
}

export default RoleTypeInput