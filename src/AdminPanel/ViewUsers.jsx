import React, { Fragment } from 'react'
import { Sidebar } from '../Components/Sidebar'
import { UserTable } from '../Components/UsersTable'
import { Button, Typography } from '@material-tailwind/react'

export const ViewUsers = () => {
  return (
    <Fragment>

        <Sidebar/>
        <div className='ml-[20rem] p-10'>
            <div className=''>
                <div className='flex justify-between'>
                    <Typography variant="h2">Manage Users</Typography>
                    <Button>Create User</Button>
                </div>
                <div className='mt-10'>
                <UserTable/>
                </div>
            </div>
           
        </div>
    </Fragment>
  )
}
