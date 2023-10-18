import React, { Fragment } from 'react'
import { Sidebar } from '../Components/Sidebar'
import { UserTable } from '../Components/UsersTable'
import { Button, Typography } from '@material-tailwind/react'
import { ArticlesTable } from '../Components/ArticlesTable'

export const ViewArticles = () => {
  return (
    <Fragment>

        <Sidebar/>
        <div className='ml-[20rem] p-10'>
            <div className=''>
                <div className='flex justify-between'>
                    <Typography variant="h2">Manage Articles</Typography>
                    <Button>Create User</Button>
                </div>
                <div className='mt-10'>
                <ArticlesTable/>
                </div>
            </div>
           
        </div>
    </Fragment>
  )
}
