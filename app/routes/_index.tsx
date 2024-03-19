import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Groningen Klimaat Website" },
    { name: "description", content: "Groningen Klimaat Website" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <header className="bg-green-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="object-none object-left text-xl font-semibold text-white">Groningen Klimaat Website</h1>
          {
            // Add navigation here
            //logo gemeente groningen

            <img className="h-8 w-15" src="https://gemeente.groningen.nl/images/logo52efe18aec6855c4.svg" alt="Gemeente Groningen" />
 
          }
        </div>
      </header>
      
      <main className="container mx-auto py-4">
        <section className="mb-8">
        <img className="rounded-lg w-full" src="https://gemeente.groningen.nl/_next/image?url=http%3A%2F%2Fdvg-backend-httpd%2Fsites%2Fgroningen%2Ffiles%2Fstyles%2Fopen_online_17_4%2Fpublic%2F2022-07%2FMartinitoren%2520in%2520avondzon_0.jpg%3Fh%3D70452c41%26itok%3DPpvBJh4T&w=1920&q=85" alt="" />
          <div className="bg-white shadow-md rounded-lg p-6">
            
            <h2 className="text-2xl font-semibold mb-4">Welcome to Groningen Klimaat Website</h2>
            <p>
              This is a sample website for the Groningen Klimaat project. This website is built using the Remix framework.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Groningen Klimaat Website</h2>
          <p>
            This is a sample website for the Groningen Klimaat project. This website is built using the Remix framework.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Climate Change Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Reduce Carbon Emissions</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress:</div>
                <div className="text-green-500 font-semibold">75%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Renewable Energy Adoption</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress:</div>
                <div className="text-green-500 font-semibold">60%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-3/5 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Sustainable Transportation</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress:</div>
                <div className="text-green-500 font-semibold">50%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-1/2 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-green-800 py-4 mt-8">
        <div className="container mx-auto text-center text-white">
          {/* Add footer content here */}
          &copy; {new Date().getFullYear()} Groningen Klimaat Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
