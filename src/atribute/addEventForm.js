import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNewEvent() {
  const EventForm = () => {
    const [eventData, setEventData] = useState({
      event_nama: "",
      event_lokasi: "",
      event_tanggal: "",
      event_jam: "",
      event_harga: 0,
      event_deskripsi: "",
      event_image: null, // Use null for the file
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEventData({
        ...eventData,
        [name]: value,
      });
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setEventData({
          ...eventData,
          event_image: file,
        });
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      // Check if all required fields are filled
      if (
        !eventData.event_nama ||
        !eventData.event_lokasi ||
        !eventData.event_tanggal ||
        !eventData.event_jam ||
        !eventData.event_deskripsi ||
        !eventData.event_image
      ) {
        alert("Please fill out all fields.");
        return;
      }

      const url = "http://localhost:80/api/server.php";
      const formData = new FormData(); // Use FormData for file uploads

      // Append all data to formData
      formData.append("event_nama", eventData.event_nama);
      formData.append("event_lokasi", eventData.event_lokasi);
      formData.append("event_tanggal", eventData.event_tanggal);
      formData.append("event_jam", eventData.event_jam);
      formData.append("event_harga", eventData.event_harga);
      formData.append("event_deskripsi", eventData.event_deskripsi);
      formData.append("event_image", eventData.event_image); // Image file

      fetch(url, {
        method: "POST",
        body: formData, // Send formData instead of JSON
      })
        .then((response) => response.json())
        .then((data) => alert("Event created successfully"))
        .catch((error) => alert("Error creating event: " + error));
    };

    return (
      <div className="min-w-screen min-h-screen flex items-center justify-center">
        <div className="w-full max-w-xs">
          <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-light-teal"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-white text-lg font-bold">
              Add New Event
            </p>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nama Event<sup className="text-red-500">*</sup>
              </label>
              <input
                className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event_nama"
                type="text"
                placeholder="Nama Event"
                name="event_nama"
                value={eventData.event_nama}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Lokasi Event<sup className="text-red-500">*</sup>
              </label>
              <input
                className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event_lokasi"
                type="text"
                placeholder="Lokasi Event"
                name="event_lokasi"
                value={eventData.event_lokasi}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tanggal Event<sup className="text-red-500">*</sup>
              </label>
              <input
                className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event_tanggal"
                type="date"
                name="event_tanggal"
                value={eventData.event_tanggal}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Jam Event<sup className="text-red-500">*</sup>
              </label>
              <input
                className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event_jam"
                type="time"
                name="event_jam"
                value={eventData.event_jam}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Harga Event<sup className="text-red-500">*</sup>
              </label>
              <input
                className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event_harga"
                type="number"
                placeholder="Harga Event"
                name="event_harga"
                value={eventData.event_harga}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Deskripsi Event<sup className="text-red-500">*</sup>
              </label>
              <input
                className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="event_deskripsi"
                type="text"
                placeholder="Deskripsi Event"
                name="event_deskripsi"
                value={eventData.event_deskripsi}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Poster Event<sup className="text-red-500">*</sup>
              </label>
              <input
                className="focus:border-sky-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="event_image"
                type="file"
                name="event_image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-lm-teal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2024 Kelompok Bahagia
          </p>
        </div>
      </div>
    );
  };

  return <EventForm />;
}
