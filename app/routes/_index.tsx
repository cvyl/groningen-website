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

            <h2 className="text-2xl font-semibold mb-4">Welkom bij de Groningen Klimaat Website</h2>
            {/* <p>
              This is a sample website for the Groningen Klimaat project. This website is built using the Remix framework.
            </p> */}
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
          {/* <h2 className="text-2xl font-semibold mb-4">Welcome to Groningen Klimaat Website</h2>
          <p>
            This is a sample website for the Groningen Klimaat project. This website is built using the Remix framework.
          </p> */}
        </section>


        <section className="mb-8 px-10 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1>Wat is de overheid nu aan het doen?</h1>
            <h2 className="text-xl font-semibold mb-2">Klimaatadaptatie:</h2>
            <div className="mt-1 grid grid-cols-1 gap-6 md:grid-cols-4 justify-center">
              {/* First repetition */}
              <div className="bg-[#f4f4f4] border border-gray-detailBorder rounded-lg overflow-hidden relative">
                <img className="h-auto w-full rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JEBPIeV7s3lZ9QJ7DyfS4AHaEK%26pid%3DApi&f=1&ipt=de31728e4a63e4f6663124ae18fdde919cb268006de9cca4ce9b7193c8ba9ddf&ipo=images" alt="description" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-green-600 text-white p-4 text-center">
                  Versterk dijken en verbreed rivieren om overstromingen te voorkomen.
                </figcaption>
              </div>
              {/* Second repetition */}
              <div className="bg-[#f4f4f4] border border-gray-detailBorder rounded-lg overflow-hidden relative">
                <img className="h-auto w-full rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faannemer-gigant-nl.imgix.net%2Fwp-content%2Fuploads%2F2019%2F09%2Fzonnepanelen-plaatsen-1.jpg%3Fauto%3Dformat%252Ccompress%26w%3D1024%26h%3D1024%26dpr%3D3&f=1&nofb=1&ipt=3c33ac7a5d56b461994d9d141e892651679dbc37de77f7ac22881ed77c03d0b2&ipo=images" alt="description" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-green-600 text-white p-4 text-center">
                  We zijn met subsidies aan het zorgen dat mensen meer zonnepanelen aanleggen.
                </figcaption>
              </div>
              {/* Third repetition */}
              <div className="bg-[#f4f4f4] border border-gray-detailBorder rounded-lg overflow-hidden relative">
                <img className="h-auto w-full rounded-lg" src="https://fotobankna.nl/wp-content/uploads/vg096denhaag2014-480x360-81.jpg" alt="description" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-green-600 text-white p-4 text-center">
                  Wegen onder parken maken.
                </figcaption>
              </div>
              {/* Fourth repetition */}
              <div className="bg-[#f4f4f4] border border-gray-detailBorder rounded-lg overflow-hidden relative">
                <img className="h-auto w-full rounded-lg" src="https://www.teng-groep.nl/wp-content/uploads/20210521_TenG_Groendak-Doorn-19-1024x683.jpg" alt="description" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-green-600 text-white p-4 text-center">
                  Implementeer groene infrastructuur, zoals groendaken, groene gevels en stadsbossen, om de stad te vergroenen en de leefbaarheid te verbeteren.
                </figcaption>
              </div>
            </div>
          </div>
        </section>





        <section className="mb-8 px-10 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wat kan nog meer gedaan worden?</h5>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* First bullet point */}
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Leg meer groene ruimtes aan, zoals parken en plantsoenen.</p>
              </div>
              {/* Second bullet point */}
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Integreer groen in stedelijke planning en bouwvoorschriften.</p>
              </div>
              {/* Third bullet point */}
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Betrek burgers bij het vergroenen van hun eigen omgeving.</p>
              </div>
              {/* Fourth bullet point */}
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Informeer burgers en bedrijven over klimaatverandering en hoe ze kunnen bijdragen aan een groenere toekomst.</p>
              </div>
              {/* Fifth bullet point */}
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Organiseer workshops, lezingen en campagnes om bewustwording te vergroten.</p>
              </div>
            </div>
          </div >
        </section >



        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Climate Change Roadmap 2023 - 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Verminderde CO2-uitstoot</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress 2023:</div>
                <div className="text-red-500 font-semibold">48%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-1/2 h-full bg-red-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress 2024:</div>
                <div className="text-green-500 font-semibold">40%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-2/5 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Hernieuwbare energie-adaptatie</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress 2023:</div>
                <div className="text-red-500 font-semibold">62%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-3/5 h-full bg-red-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress 2024:</div>
                <div className="text-green-500 font-semibold">75%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Duurzame transport</h3>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress 2023:</div>
                <div className="text-red-500 font-semibold">47%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-1/2 h-full bg-red-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">Progress 2024:</div>
                <div className="text-green-500 font-semibold">62%</div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-3/5 h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main >
      <footer className="bg-green-800 py-4 mt-8">
        <div className="container mx-auto text-center text-white">
          {/* Add footer content here */}
          &copy; {new Date().getFullYear()} Jara, Mikka, Terrence, en Stijn . All rights reserved.
        </div>
      </footer>
    </div >
  );
}
