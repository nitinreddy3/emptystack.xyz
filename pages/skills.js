import 'chart.js/auto';
import { NextSeo } from 'next-seo';
import React from "react";
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'JavaScript',
    'React',
    'Node',
    'Python',
    'Others'
  ],
  datasets: [{
    data: [50, 50, 50, 50, 50],
    backgroundColor: [
      '#f2aa0e',
      '#00ffa1',
      '#36A2EB',
      '#FFCE56',
      '#0e7cf2'
    ],
    hoverBackgroundColor: [
      '#f2aa0e',
      '#00ffa1',
      '#36A2EB',
      '#FFCE56',
      '#0e7cf2',

    ]
  }]
}

const Skills = () => {
  return (
    <>
      <NextSeo
        title="Coderman dev skillset"
        description="This is the coderman dev's skillsets"
      />
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-center">
        <div className="lg:space-x-12 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
          <div className="lg:mt-12">
            <h1 className="text-center text-2xl font-bold text-emerald-900 lg:text-5xl dark:text-white">
              Skills
            </h1>
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <Pie
                data={data}
                style={{ width: 400, height: 400 }}
                className="text-emerald-900 lg:text-5xl dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;