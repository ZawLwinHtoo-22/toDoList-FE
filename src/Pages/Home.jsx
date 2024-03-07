import React from 'react'
import { Header } from '../Fragments/Header'
import { CategoryContainer } from '../Fragments/CategoryContainer'
import { TaskContainer } from '../Fragments/TaskContainer'

export function Home() {
  return (
    <>
      <div className='w-[430px] h-[932px] '>
        <div className='py-12 px-6 bg-blue-500'>
          <Header />
          <CategoryContainer />
          <TaskContainer />
        </div>
      </div>
    </>
  )
}
