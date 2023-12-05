import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4">ToDo List</h1>

        <div className="mt-4">
          <div className="flex items-center py-2 border-b border-gray-300">
            <span className="flex-1">Task 1</span>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
