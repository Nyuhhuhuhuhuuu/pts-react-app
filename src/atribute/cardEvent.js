import images from "../images/poser.webp";
import location from "../images/location.svg";

export default function CardEvent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl gap-5 mx-auto my-5 place-items-center overflow-x-auto">
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:-translate-y-2 ease-linear duration-100">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src={images}
            alt="Sunset in the mountains"
          />
          <div className="absolute bottom-0 w-full px-3 py-2 items-center flex justify-between bg-black bg-opacity-75">
            <div className="flex">
              <img src={location} alt="location logo" className="w-6" />
              <p className="text-white">location</p>
            </div>
            <div className="px-5 py-1 bg-sky-500 border rounded-2xl">
              <p className="font-semibold text-white">price</p>
            </div>
          </div>
        </div>
        <div className="px-2 py-2">
          <div className="flex items-center justify-start gap-4">
            <p>event date</p> |<p>event time</p>
          </div>
          <p className="font-bold">Event Name</p>
          <p className="text-gray-500 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sollicitudin a odio ac ornare. Nulla ut augue posuere tellus
            sollicitudin tincidunt et id orci. Duis consectetur, orci eu
            ultricies tincidunt, nulla justo placerat tortor, sit amet dapibus
            tellus libero at magna. Donec in nunc at sem ultrices luctus eget
            interdum.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:-translate-y-2 ease-linear duration-100">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src={images}
            alt="Sunset in the mountains"
          />
          <div className="absolute bottom-0 w-full px-3 py-2 items-center flex justify-between bg-black bg-opacity-75">
            <div className="flex">
              <img src={location} alt="location logo" className="w-6" />
              <p className="text-white">location</p>
            </div>
            <div className="px-5 py-1 bg-sky-500 border rounded-2xl">
              <p className="font-semibold text-white">price</p>
            </div>
          </div>
        </div>
        <div className="px-2 py-2">
          <div className="flex items-center justify-start gap-4">
            <p>event date</p> |<p>event time</p>
          </div>
          <p className="font-bold">Event Name</p>
          <p className="text-gray-500 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sollicitudin a odio ac ornare. Nulla ut augue posuere tellus
            sollicitudin tincidunt et id orci. Duis consectetur, orci eu
            ultricies tincidunt, nulla justo placerat tortor, sit amet dapibus
            tellus libero at magna. Donec in nunc at sem ultrices luctus eget
            interdum.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:-translate-y-2 ease-linear duration-100">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src={images}
            alt="Sunset in the mountains"
          />
          <div className="absolute bottom-0 w-full px-3 py-2 items-center flex justify-between bg-black bg-opacity-75">
            <div className="flex">
              <img src={location} alt="location logo" className="w-6" />
              <p className="text-white">location</p>
            </div>
            <div className="px-5 py-1 bg-sky-500 border rounded-2xl">
              <p className="font-semibold text-white">price</p>
            </div>
          </div>
        </div>
        <div className="px-2 py-2">
          <div className="flex items-center justify-start gap-4">
            <p>event date</p> |<p>event time</p>
          </div>
          <p className="font-bold">Event Name</p>
          <p className="text-gray-500 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sollicitudin a odio ac ornare. Nulla ut augue posuere tellus
            sollicitudin tincidunt et id orci. Duis consectetur, orci eu
            ultricies tincidunt, nulla justo placerat tortor, sit amet dapibus
            tellus libero at magna. Donec in nunc at sem ultrices luctus eget
            interdum.
          </p>
        </div>
      </div>
    </div>
  );
}
