import React, { useEffect, useContext, useState} from 'react'

import {Link} from 'react-router-dom'

import StudentContext from '../../context/student/studentContext';
import Test from './Test'
import {testData} from './test/TestData';

const Home = () => {
    const [loading, setLoadng] = useState(false)
    const studentContext = useContext(StudentContext)

    useEffect(() => {

        studentContext.getStudents()
    }, [])
    return (

    <>
    <section>

    <div className="col-md-8 mrgt5 mrgb2 mx-auto">
               <div className="ui-dashboard-card  frnd-list  mrgb2">

<div className="ui-card-body">
    
{
    !studentContext.loading && studentContext.students.length > 0 && studentContext.students.map((s, i) =>

<>
    
<div className='container '>
    <div className='row'>
        
     <div className='col-md-12  mx-auto asses'>
         <div className="">
        <div className='d-flex assesment'>
            <div className="r-bd">
            <img src={s.pic} alt="" className="img" />
            </div>
        <div className="full-d">
        <h3>  {s.firstName} {s.lastName}</h3>
            <h4> Email: {s.email}</h4>
            <h4>Skill: {s.skill}</h4>
            <h4>Average: {s.grades[0]}</h4>
        </div>
        
   </div>


        </div>
        
   <div className="accordion d-block">
 
            <Test  test={s.grades} />

    </div>
     </div>
    
    
    </div>
</div>

</>

    ) 
}
<h2>okiri</h2>
</div>
    </div>
    </div>
    </section>
    </>
    
    

    )
}

export default Home;