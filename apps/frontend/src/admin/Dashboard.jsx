import {
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
  Settings,
  Home,
  FileText,
  Search,
  Bell,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-600"
              >
                <Home size={20} />
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
              >
                <Users size={20} />
                Users
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
              >
                <ShoppingCart size={20} />
                Orders
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
              >
                <FileText size={20} />
                Reports
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
              >
                <Settings size={20} />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-700">
            Dashboard
          </h2>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>

            <Bell className="text-gray-600 cursor-pointer" />

            <img
              src="https://i.pravatar.cc/40"
              alt="admin"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">Users</p>
                  <h3 className="text-3xl font-bold">1,250</h3>
                </div>
                <Users className="text-blue-500" size={35} />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">Orders</p>
                  <h3 className="text-3xl font-bold">350</h3>
                </div>
                <ShoppingCart
                  className="text-green-500"
                  size={35}
                />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">Revenue</p>
                  <h3 className="text-3xl font-bold">$12K</h3>
                </div>
                <DollarSign
                  className="text-yellow-500"
                  size={35}
                />
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-500">Activity</p>
                  <h3 className="text-3xl font-bold">89%</h3>
                </div>
                <Activity
                  className="text-red-500"
                  size={35}
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow mt-8 p-6">
            <h3 className="text-xl font-semibold mb-4">
              Recent Users
            </h3>

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Name</th>
                  <th className="text-left py-3">Email</th>
                  <th className="text-left py-3">Role</th>
                  <th className="text-left py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="py-3">Ahmad Ilyas</td>
                  <td>ahmad@gmail.com</td>
                  <td>Admin</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-3">Budi</td>
                  <td>budi@gmail.com</td>
                  <td>User</td>
                  <td>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3">Siti</td>
                  <td>siti@gmail.com</td>
                  <td>User</td>
                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}