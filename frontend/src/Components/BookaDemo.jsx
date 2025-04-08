


import { useState } from "react";
import "react-phone-input-2/lib/style.css";

const DemoInfo = () => {
  return (
    <div className="flex-1 flex flex-col justify-center p-6 md:p-12 text-left mt-5">
      {/* Heading - larger on desktop, smaller on mobile */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-5">
        Book Your Personalized Demo
      </h1>

      {/* Subheading - slightly smaller on mobile */}
      <p className="text-base md:text-lg mb-6">
        Discover how Dollar Ducks can help your business soar.
      </p>

      {/* Benefits list - stack vertically on all devices */}
      <div className="space-y-2">
        <p className="flex items-start">
          <span className="hidden md:inline mr-2">•</span>
          Schedule a call with our experts to dive deep into your business
          goals.
        </p>
        <p className="flex items-start">
          <span className="hidden md:inline mr-2">•</span>
          Experience a tailored demo focused on your specific growth
          opportunities.
        </p>
        <p className="flex items-start">
          <span className="hidden md:inline mr-2">•</span>
          Learn how our SEO, Social Media, Website Development, and Google Ads
          services can drive real results.
        </p>
      </div>

      {/* Trusted partners section - full width on mobile, auto width on desktop */}
      <h3 className="text-lg md:text-xl font-semibold mt-6 md:mt-6">
        Trusted & Certified by Leading Platforms & Awards
      </h3>
      <div className="flex flex-wrap mt-4 md:mt-6 gap-4 md:gap-6 justify-center items-center">
        <img
          src="https://images.seeklogo.com/logo-png/46/1/meta-business-partner-logo-png_seeklogo-466474.png"
          alt="Meta Business Partner"
          className="h-20 md:h-30" // Smaller on mobile
        />
        <img
          src="data:image/jpeg;base64,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5RlItbXnqoXup3bSV0rKuqY5tE05/FcGc3uAAebO7uvIdSAn24bZI01K6ulZaapAyX5th0I9Mx8XoGq1F8a0AAAAAaADp6L6grzfjUP/AMMZTxgmSpnjp2t/eJJdYnscoHxWODbjEmMETtn6rjABoyuBj0FvftYBZttjx8awOkHJjn1jh2yCzDb+IH6qwUFe7MbJ1c9aMWxVzeO0Wp6ZpuynB6k8i/0vrrc6W7+87Z6oqoKeekt7ZSSioiaTYPtzZr3sOo5W0upmiCtZ9rsYqYxBTYNLT1DtHTTm0UfdzdPF5fgVg2Y2LkosWpDlfK1tNLJNVEftKiR/izO9OQ7epVoogg+I4bNNtDRzGF/s1NTyOEhHgMj7syg98pv8FOERBAN4OFVYr8MxOlp/aPZeI18IcGuIe3LmZfQ8z8h8JThuJTS0hnfSyQy2eRC4hztCcvu9TYaea2yIIbulwmWmwuFlQxzJ3uklka4WcC6R1s3nlsu/vDbMcLrWU8b5JnxmNrWC7jmIabDyBJ+CkaINNs/hDYsOp6N7fC2BsLx38GV1/XVQjZ+LFMGDqIUTq6ia4mCSN7RIxpJOSRrvM9PP0FoIgi2z+K4nUVAdNQMpaQNNw+QPmc7TKQGaNbzuCujNh00u0UVQ6JwpqekLWyEHKZXP1DT1OU/RTdEBERAREQF8svqIOJauJiCyIg11Tg0EnvwxuPctF/nzXQ/8Po82fgC9re861r35XUgRRuON8xyyV0aXCoo9GRtb6AD8F3AxckUnRERAREQEREBERAWGalY83cxjj3LQfxWZEGOGFrBZrWtHOwAA+iyIiAiIgIiIOjiWEU9Rw+PBHLw3Z2Z2h2V1rXAK7rRYWHJfUQEREGA0kZkExjZxQMoflGYN55Q7nbyWdEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z"
          alt="Shopify Partner"
          className="h-20"
        />
        <img
          src="data:image/png;base64,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"
          alt="Clutch Top Agency Award"
          className="h-20"
        />
        <img
          src="data:image/png;base64,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"
          alt="SEMrush Agency Partner"
          className="h-20"
        />
        <img
          src="https://mma.prnewswire.com/media/1864509/Goodfirms_Logo.jpg?p=facebook"
          alt="GoodFirms"
          className="h-20"
        />
      </div>
    </div>
  );
};

const DemoForm = ({ formData, setFormData, handleSubmit, isSubmitted }) => {
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-around items-center min-h-screen">
      {isSubmitted ? (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 w-full max-w-md text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-4">
              Thank you for contacting us. We will get back to you shortly.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white border text-black border-black shadow-xl   rounded-lg p-4 md:p-8 w-screen max-w-xs sm:max-w-sm mx-4 transition-all duration-300 ease-in-out transform hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
          {/* Form title - smaller on mobile */}
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 text-center">
            Please enter your details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            {/* Form inputs - smaller padding on mobile */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
            />
            <input
              type="text"
              name="Business Name"
              placeholder="Business Name"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
              list="business-name-suggestions"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
            />
            <input
              type="tel" // Changed from "phone number" to "tel" for better mobile support
              name="Number"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
            />
            <select
              name="service"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-bright text-sm md:text-base"
            >
              <option value="" disabled selected>
                I have a...
              </option>
              <option value="HVAC">HVAC</option>
              <option value="Solar">Solar</option>
              <option value="Electrical">Electrical</option>
              <option value="Roofing">Roofing</option>
              <option value="Remodeling">Remodeling</option>
              <option value="Construction">Construction</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Concrete">Concrete</option>
              <option value="Hauling">Hauling</option>
              <option value="Home Appliance Repair">
                Home Appliance Repair
              </option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-2 rounded-md hover:bg-yellow-600 transition text-sm md:text-base cursor-pointer"
            >
              Schedule My Call
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const BookaDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      businessName: e.target["Business Name"].value,
      email: e.target.email.value,
      number: e.target.Number.value,
      service: e.target.service.value,
    };

    console.log("Form Data Before Sending:", formData);

    try {
      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        setIsSubmitted(true);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    // Container - stacks vertically on mobile, flex row on desktop
    <div className="flex flex-col md:flex-row bg-light-yellow border-black p-4 md:p-8 justify-around items-center md:items-stretch">
      {/* Info section - full width on mobile, half on desktop */}
      <DemoInfo />

      {/* Form section - full width on mobile, half on desktop */}
      <DemoForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      />
    </div>
  );
};

export default BookaDemo;
