export function Sidebar({currentPath = "/dashpoard"}: {currentPath: string}) {
  return (
    <div className="fixed left-0 top-0 bg-gray-900 text-white p-4 w-64 min-h-screen z-10">  
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Profile</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Settings</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Logout</a></li>
        </ul>
    </div>
    );
}
