import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import InputSearch from '../components/InputSearch'
import Btn from '../components/Btn'
import { Plus, MoreVertical } from 'lucide-react';
import RowsTable from '../components/RowsTable';

const Home:React.FC = () => {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <section className='flex flex-col w-full min-h-screen items-center bg-slate-100'>
        <NavBar/>

        <div className='flex flex-col p-8 w-full gap-8'>
            <div className='flex w-full items-center justify-between'>
                <InputSearch/>
                <Btn icon={<Plus className='w-5 h-5'/>} text='Add New Pet'/>
            </div>

            <table className='shadow-md rounded-md'>
                <thead className='  min-w-full divide-y divide-gray-200'>
                    <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4'>PET INFORMATION</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4'>OWNER DETAILS</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4'>Medical History</th>
                        <th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                        <RowsTable name_pet='Rocky' specie='Dog' age={2} name_owner='David Valenzuela' email='davidvalenzuelgml@gmail.com' phone='6731072858' medical_history='lorem dasd asd asd asd aasdasdasdas asdas dasd asd ad asd ad asd asdas da d adas a ada'/>
                        <RowsTable name_pet='Rocky' specie='Dog' age={2} name_owner='David Valenzuela' email='davidvalenzuelgml@gmail.com' phone='6731072858' medical_history='lorem dasd asd asd asd aasdasdasdas asdas dasd asd ad asd ad asd asdas da d adas a ada'/>
                        <RowsTable name_pet='Rocky' specie='Dog' age={2} name_owner='David Valenzuela' email='davidvalenzuelgml@gmail.com' phone='6731072858' medical_history='lorem dasd asd asd asd aasdasdasdas asdas dasd asd ad asd ad asd asdas da d adas a ada'/>
                        <RowsTable name_pet='Rocky' specie='Dog' age={2} name_owner='David Valenzuela' email='davidvalenzuelgml@gmail.com' phone='6731072858' medical_history='lorem dasd asd asd asd aasdasdasdas asdas dasd asd ad asd ad asd asdas da d adas a ada'/>
                        <RowsTable name_pet='Rocky' specie='Dog' age={2} name_owner='David Valenzuela' email='davidvalenzuelgml@gmail.com' phone='6731072858' medical_history='lorem dasd asd asd asd aasdasdasdas asdas dasd asd ad asd ad asd asdas da d adas a ada'/>
                    
                </tbody>
            </table>
        </div>
        
    </section>
  )
}

export default Home
