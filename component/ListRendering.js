import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'

export default function ListRendering() {


// let employeelist=["Divya","Akshitha","Swetha","kavya"]
let employeelist=[
    {
        name:"swetha",
        salary:40000,
        email:"swetha@gmail.com"
    },
    {
        name:"akshitha",
        salary:45000,
        email:"akshitha@gmail.com"
    },
    {
        name:"yatheesh",
        salary:50000,
        email:"yatheesh@gmail.com"
    }
]
// let employeelist=[
//     employeelist.map(element => {
//         <h1>
//             {element}
//         </h1>
//       })
// ]
return (
        <div>
            <h1>
                 ListRendering
            </h1>
            {/* {
                employeelist.map(element =>( 
                    <h1>
                        {element}
                    </h1>
                  ))

            }
             */}
             {
                  employeelist.map(
                      empdata => 
                      <>
                      <p>
                          {empdata.name}
                          
                      </p>
                      <p>
                          {empdata.salary}
                      </p>
                      <p>
                          {empdata.email}
                      </p>
                      
                      
                      </>
                  )

             }
            
        </div>
    )
}
