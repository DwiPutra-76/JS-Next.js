import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    {/* Section Card Tengah */}
      <div className="flex justify-center items-center h-screen">
        <div className="bg-yellow-100 p-6 rounded shadow-lg max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Apa itu Tailwind CSS?
          </h1>

          <p className="text-gray-600">
            Tailwind adalah framework modern berbasis
            <span className="font-semibold underline">
              {" "}utility-class
            </span>{" "}
            yang memudahkan kita membangun tampilan web dengan cepat.
          </p>

          <button className="mt-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full">
            Klik Disini
          </button>
        </div>
      </div>

      {/* Section Flex */}
      <div className="flex gap-1 px-6">
        <div className="bg-blue-500 text-white p-4 w-24">
          Baris 1
        </div>

        <div className="bg-green-500 text-white p-4 flex-grow">
          Baris 2
        </div>
      </div>

      {/* Section Grid */}
      <div className="px-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Galeri Grid</h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Item 1</div>
          <div className="bg-white p-4 rounded shadow">Item 2</div>
          <div className="bg-white p-4 rounded shadow">Item 3</div>
          <div className="bg-white p-4 rounded shadow">Item 4</div>
          <div className="bg-white p-4 rounded shadow">Item 5</div>
          <div className="bg-white p-4 rounded shadow">Item 6</div>
        </div>
      </div>
      </>
  );
}
