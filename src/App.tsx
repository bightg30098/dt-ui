import { Button } from '@bightg30098/dt-ui'

import '@bightg30098/dt-ui/dist/style.css'

export default function App() {
  return (
    <div className="h-screen w-screen bg-black p-8">
      <div className="space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="unstyled" className="text-gray-50">
          Unstyled
        </Button>
      </div>
    </div>
  )
}
