 import { createFileRoute } from '@tanstack/react-router'
 import ManualForm from '../Mainform.jsx' // adjust path if ManualForm.jsx lives elsewhere

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Auth App</h3>
      <ManualForm />
    </div>
  )
}