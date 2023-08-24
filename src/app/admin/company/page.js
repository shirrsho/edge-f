import ModalFactory from '@/factories/modal'
import React from 'react'
import NewCompany from './new'

function Company() {
    const onClick = () =>{
        console.log("Clicked");
    }

    const modal = {
        title:'Add a Company',
        content:<NewCompany/>,
        button:'Add'
    }
  return (
    <div>
      <ModalFactory modal={modal}/>
    </div>
  )
}

export default Company
