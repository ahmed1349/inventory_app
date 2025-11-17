import Sidebar  from "@/components/sidebar"

const page = () => {
  return (
    <>
  <div className="min-h-screen bg-gray-50">
    <Sidebar currentPath="/dashboard" />
    <div className="ml-64 p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  </div>
    </>
  )
}

export default page
