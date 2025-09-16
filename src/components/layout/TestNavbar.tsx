'use client'

import { useState } from 'react'
import Link from 'next/link'

const TestNavbar = () => {
  const [testState, setTestState] = useState<string>('initial')

  return (
    <div className="bg-blue-500 text-white p-4">
      <div className="flex items-center justify-between">
        <div>Test Navbar - State: {testState}</div>
        <div className="space-x-4">
          <button
            className="bg-red-500 px-4 py-2 rounded"
            onClick={() => {
              console.log('Button clicked!');
              alert('Button works!');
              setTestState('clicked');
            }}
          >
            Test Button
          </button>
          <button
            className="bg-green-500 px-4 py-2 rounded"
            onMouseEnter={() => {
              console.log('Mouse entered!');
              setTestState('hovered');
            }}
            onMouseLeave={() => {
              console.log('Mouse left!');
              setTestState('initial');
            }}
          >
            Hover Test
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestNavbar