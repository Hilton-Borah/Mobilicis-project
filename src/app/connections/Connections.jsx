import React, { useEffect, useState } from 'react'
import PeopleCard from '../componants/PeopleCard'

const Connections = () => {

    // let userData = [
    //     {
    //         id:1,
    //         name:"Hilton Kumar Borah",
    //         job_role:"Full stack developer",
    //         organisation:"Oruphanes",
    //         image:"https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"
    //     },
    //     {
    //         id:2,
    //         name:"Hilton Kumar Borah",
    //         job_role:"Full stack developer",
    //         organisation:"Oruphanes",
    //         image:"https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"

    //     },
    //     {
    //         id:3,
    //         name:"Hilton Kumar Borah",
    //         job_role:"Full stack developer",
    //         organisation:"Oruphanes",
    //         image:"https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"

    //     }
    // ]



    const [userData, setuserData] = useState([]);

    useEffect(() => {
        fetch("api/connection")
            .then((res) => {
                return res.json();
            }).then((res) => {
                setuserData(res.success)
                console.log(res.success)
            }).catch((err) => {
                return err
            })
    }, [])

// console.log(userData)

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {
        userData && userData.map((el)=>{
            return (
                <div key={el.id}>
                    <PeopleCard key={el.id} name={el.name} job_role={el.job_role} organisation={el.organisation} image={el.image} button={"Remove Connection"}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Connections
