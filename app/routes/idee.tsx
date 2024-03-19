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
      <header className="bg-white-800 py-4">
        <h1>Ideeën</h1>
        <a href="https://groningen.maps.arcgis.com/apps/Viewer/index.html?appid=d5096c2a23ef44cbaee43a3b60f285e8" target="_blank" rel="noopener noreferrer">Arcgis link</a>
        <h1>Wat is de overheid al aan het doen en wat kunnen we nog meer doen</h1>

        <a href="https://www.rijksoverheid.nl/onderwerpen/klimaatverandering/gevolgen-klimaatverandering" target="_blank" rel="noopener noreferrer">
          <h2 className="underline text-purple-400">
            gevolgen-klimaatverandering Overheid
          </h2>
        </a>
        <a href="https://groningen.maps.arcgis.com/apps/PublicGallery/index.html?appid=60366f9e1f9e4fcab9e732643f09aaa2" target="_blank" rel="noopener noreferrer">
          <h2 className="underline text-purple-400">
            arcgis andere mappen
          </h2>
        </a>
      </header>


      {/* <figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
        <a href="#">
          <img className="rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JEBPIeV7s3lZ9QJ7DyfS4AHaEK%26pid%3DApi&f=1&ipt=de31728e4a63e4f6663124ae18fdde919cb268006de9cca4ce9b7193c8ba9ddf&ipo=images" alt=" description" />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>Versterk dijken en verbreed rivieren om overstromingen te voorkomen.</p>
        </figcaption>
      </figure>
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
        <a href="#">
          <img className="rounded-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faannemer-gigant-nl.imgix.net%2Fwp-content%2Fuploads%2F2019%2F09%2Fzonnepanelen-plaatsen-1.jpg%3Fauto%3Dformat%252Ccompress%26w%3D1024%26h%3D1024%26dpr%3D3&f=1&nofb=1&ipt=3c33ac7a5d56b461994d9d141e892651679dbc37de77f7ac22881ed77c03d0b2&ipo=images" alt=" description" />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>We zijn met subsidies aan het zorgen dat mensen meer zonnepanelen aanleggen</p>
        </figcaption>
      </figure>


      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
        <a href="#">
          <img className="h-auto max-w-lg ms-auto rounded-lg" src="https://fotobankna.nl/wp-content/uploads/vg096denhaag2014-480x360-81.jpg" alt=" description" />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>Wegen onder parken maken</p>
        </figcaption>
      </figure>

      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
        <a href="#">
          <img className="h-auto max-w-lg ms-auto rounded-lg" src="https://www.teng-groep.nl/wp-content/uploads/20210521_TenG_Groendak-Doorn-19-1024x683.jpg" alt=" description" />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>Implementeer groene infrastructuur, zoals groendaken, groene gevels en stadsbossen, om de stad te vergroenen en de leefbaarheid te verbeteren.</p>
        </figcaption>
      </figure> */}
    </div >
  );
}
// onder de punt bomen/groen en daar de mensen laten roken
// betonnen plaat vervanggen met iets groen/beter voor het weer en minder hitte
//https://flowbite.com/docs/typography/images/