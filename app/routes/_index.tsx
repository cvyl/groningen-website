import type { MetaFunction } from "@remix-run/node";
import logooo from "../../public/logo11.png";

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

            // <img className="h-8 w-15" src="https://gemeente.groningen.nl/images/logo52efe18aec6855c4.svg" alt="Gemeente Groningen" />
            <img className="h-8 w-15" src={logooo} alt="Gemeente Groningen" />
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

        <section className="mb-8 px-10 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <iframe title="Iframe" width='100%' height='600px' src='https://groningen.maps.arcgis.com/apps/Viewer/index.html?appid=d5096c2a23ef44cbaee43a3b60f285e8' frameBorder='0' scrolling='no'></iframe>
            <h3 className="text-lg font-semibold mb-2">Wat is dit?</h3>
            <p className="mb-4">
              Dit is een heatmap van de stad Groningen. De heatmap laat zien waar de meeste warmte is in de stad.
            </p>
            <p className="mb-4">
              Het hitte-eilandeffect of urban heat island effect (UHI) is het fenomeen dat de temperatuur in een stedelijk gebied gemiddeld hoger is dan in het omliggende landelijk gebied. De belangrijkste oorzaken van het UHI zijn de absorptie van zonlicht door de in de stad aanwezige donkere materialen en de relatief lage windsnelheden. Door het UHI worden problemen tijdens hittegolven, zoals hittestress, verergerd. Bouwkundige maatregelen en meer groen in de stad verminderen het UHI.
            </p>

          </div>
          <h2 className="text-2xl font-semibold mb-4">Welcome to Groningen Klimaat Website</h2>
          <p>
            This is a sample website for the Groningen Klimaat project. This website is built using the Remix framework.
          </p>
        </section>

        <section className="mb-8 px-10 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">


            <h1>Wat is de overheid nu aan het doen?</h1>




          </div>
        </section>
        <section className="mb-8 px-10 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">


            <h1>Wat kan nog meer gedaan worden?</h1>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h1 className="text-2xl font-semibold mb-4">Creating a Greener Groningen: Our Commitment to Climate Action</h1>
              <p className="text-gray-700 mb-6">Welcome to our initiative for a more sustainable and environmentally conscious Groningen! As a community, we recognize the urgent need to address climate change and protect our beautiful city. In this article, we'll explore practical steps the government can take to promote green living, enhance resilience, and reduce our carbon footprint.</p>


              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Klimaatadaptatie (Climate Adaptation)</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Strengthening dikes and riverbanks to prevent flooding during heavy rainfall.</li>
                  <li>Implementing green infrastructure, such as green roofs and vertical gardens, to absorb excess water and reduce runoff.</li>
                  <li>Creating shaded areas and green spaces to mitigate extreme heat.</li>
                  <li>Planting more trees and establishing urban forests to cool down neighborhoods.</li>
                </ul>
              </section>


              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Duurzame Energie en Energiebesparing (Sustainable Energy and Energy Efficiency)</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Investing in solar panels and wind turbines to generate clean energy.</li>
                  <li>Supporting local initiatives for community-based renewable energy projects.</li>
                  <li>Encouraging households and businesses to adopt energy-efficient practices.</li>
                  <li>Promoting smart grid technologies and energy-saving appliances.</li>
                </ul>
              </section>


              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Vergroening van Steden (Urban Greening)</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Expanding existing parks and creating new green areas for recreation and biodiversity.</li>
                  <li>Integrating green design principles into urban planning and architecture.</li>
                  <li>Engaging citizens in tree-planting drives and community gardens.</li>
                  <li>Encouraging rooftop gardens and balcony planters.</li>
                </ul>
              </section>


              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Klimaatmitigatie (Climate Mitigation)</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Transitioning to electric vehicles and promoting public transportation.</li>
                  <li>Supporting research on innovative solutions like green hydrogen.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">Bewustwording en Educatie (Awareness and Education)</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Hosting workshops, seminars, and awareness campaigns on climate change.</li>
                  <li>Educating citizens about sustainable practices and their impact.</li>
                </ul>
              </section>


              <p className="text-gray-700 mt-6">Together, we can transform Groningen into a resilient, green city—one that leads by example in the fight against climate change. Let's embrace sustainability, protect our environment, and secure a brighter future for generations to come.</p>
            </div>

          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Climate Change Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Reduce Carbon Emissions</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress:</div>
                <div className="text-green-500 font-semibold">48%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Renewable Energy Adoption</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress:</div>
                <div className="text-green-500 font-semibold">62%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-3/5 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Sustainable Transportation</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress:</div>
                <div className="text-green-500 font-semibold">47%</div>
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
