import React from 'react'
import PeopleCard from '../componants/PeopleCard'

const Recommended = () => {

    let arr = [
        {
            id:1,
            name:"Hilton Kumar Borah",
            job_role:"Full stack developer",
            organisation:"Oruphanes",
            image:"https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"
        },
        {
            id:2,
            name:"Hilton Kumar Borah",
            job_role:"Full stack developer",
            organisation:"Oruphanes",
            image:"https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"

        },
        {
            id:3,
            name:"Hilton Kumar Borah",
            job_role:"Full stack developer",
            organisation:"Oruphanes",
            image:"https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"

        }
    ]

  return (
    <div>
        <div>
            <p className='text-3xl mt-32 mb-12'>People you can also connect</p>
        </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {
                  arr && arr.map((el) => {
                      return (
                          <div key={el.id}>
                              <PeopleCard key={el.id} name={el.name} job_role={el.job_role} organisation={el.organisation} image={el.image} button={"Connect"} />
                          </div>
                      )
                  })
              }
          </div>
    </div>
  )
}

export default Recommended
