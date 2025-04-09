// import { useState } from "react";
// import { CheckCircle } from "lucide-react";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// const pricingPlans = {
//   monthly: [
//     {
//       title: "Visibility & Local Search Optimization",
//       price: 295,
//       features: [
//         "Google Business Profile Optimization",
//         "Local SEO & Keyword Targeting",
//         "Customer Reviews & Reputation Management",
//         "NAP Consistency & Local Citations",
//       ],
//     },
//     {
//       title: "Social Media Growth & Engagement",
//       price: 695,
//       features: [
//         "Content Strategy & Consistency",
//         "Audience Interaction & Community Building",
//         "Hashtag & SEO Optimization",
//         "Analytics & Performance Tracking",
//       ],
//     },
//     {
//       title: "360° Digital Marketing Services",
//       price: 995,
//       features: [
//         "Strategic Branding & Online Presence",
//         "Multi-Channel Marketing & Advertising",
//         "Data-Driven Optimization & Analytics",
//         "Customer Engagement & Retention",
//       ],
//     },
//   ],
//   quarterly: [
//     {
//       title: "Visibility & Local Search Optimization",
//       price: 395,
//       features: [
//         "Google Business Profile Optimization",
//         "Local SEO & Keyword Targeting",
//         "Customer Reviews & Reputation Management",
//         "NAP Consistency & Local Citations",
//       ],
//     },
//     {
//       title: "Social Media Growth & Engagement",
//       price: 995,
//       features: [
//         "Content Strategy & Consistency",
//         "Audience Interaction & Community Building",
//         "Hashtag & SEO Optimization",
//         "Analytics & Performance Tracking",
//       ],
//     },
//     {
//       title: "360° Digital Marketing Services",
//       price: 1495,
//       features: [
//         "Strategic Branding & Online Presence",
//         "Multi-Channel Marketing & Advertising",
//         "Data-Driven Optimization & Analytics",
//         "Customer Engagement & Retention",
//       ],
//     },
//   ],
// };

// const servicesPlans = [
//   {
//     title: "End-to-End Web Solutions",
//     price: 795,
//     features: [
//       "Custom Web Design & Development",
//       "UI/UX Optimization & Mobile Responsiveness",
//       "Backend Development & Database Integration",
//       "Website Security & Performance Enhancement",
//     ],
//   },
//   {
//     title: "Website Creation & Optimization",
//     price: 1195,
//     features: [
//       "Custom Website Design & Development",
//       "Performance & Speed Optimization",
//       "SEO & Mobile Responsiveness",
//       "Security & Maintenance Updates",
//     ],
//   },
// ];

// const addonsPlans = [
//   {
//     title: "Logo & Branding Kit",
//     price: 195,
//     features: [
//       "Custom Logo Design",
//       "Brand Color Palette",
//       "Typography Guidelines",
//       "Social Media Templates",
//     ],
//   },
//   {
//     title: "Holiday & Event Post",
//     price: 295,
//     features: [
//       "Seasonal Campaign Strategy",
//       "Event-Based Promotions",
//       "Festive Email Templates",
//       "Performance Analytics & Insights",
//     ],
//   },
//   {
//     title: "Link Building Services",
//     price: 250,
//     features: [
//       "High-Quality Backlinks",
//       "Guest Posting Outreach",
//       "Broken Link Building",
//       "Monthly Link Profile Report",
//     ],
//   },
// ];

// const PlansPricing = () => {
//   const [billingCycle, setBillingCycle] = useState("monthly");
//   const [selectedTab, setSelectedTab] = useState("software");

//   const handlePayment = async (plan) => {
//     const stripe = await stripePromise;
//     if (!stripe) {
//       console.error("Stripe failed to initialize.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/payments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           amount: plan.price * 100, // Convert to cents
//           email: "test@example.com",
//           product_name: plan.title
//         }),
//       });
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       if (!data.clientSecret) {
//         console.error("No client secret returned:", data);
//         return;
//       }
    
//       // Confirm payment
//       const result = await stripe.confirmCardPayment(data.clientSecret);
//       if (result.error) {
//         console.error("Payment failed:", result.error.message);
//         alert(`Payment failed: ${result.error.message}`);
//       } else {
//         console.log("Payment successful:", result.paymentIntent);
//         alert("Payment successful!");
//       }
//     } catch (error) {
//       console.error("Error during payment process:", error);
//       alert("An error occurred during payment. Please try again.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 md:p-6">
//       <h2 className="text-2xl md:text-4xl font-bold text-center mt-15 md:mt-18">
//         Flexible Plans & Pricing
//       </h2>
//       <p className="mt-2 text-center text-sm md:text-base">
//         Designed for Plumbers, Roofers, Electricians, HVAC, Construction, Home
//         Appliance Repair & More!
//       </p>

//       {/* Tab Switcher and Billing Cycle Toggle */}
//       <div className="flex flex-col md:flex-row justify-between items-center my-4 md:my-6">
//         {/* Tab Switcher */}
//         <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-0 w-full md:w-auto">
//           <button
//             onClick={() => setSelectedTab("software")}
//             className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border transition rounded-lg cursor-pointer ${
//               selectedTab === "software"
//                 ? "bg-black text-white shadow-lg"
//                 : "bg-white text-black border hover:bg-gray-100"
//             }`}
//           >
//             Services
//           </button>
//           <button
//             onClick={() => setSelectedTab("services")}
//             className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border transition rounded-lg cursor-pointer ${
//               selectedTab === "services"
//                 ? "bg-black text-white shadow-lg"
//                 : "bg-white text-black border hover:bg-gray-100"
//             }`}
//           >
//             Website
//           </button>
//           <button
//             onClick={() => setSelectedTab("addons")}
//             className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border transition rounded-lg cursor-pointer ${
//               selectedTab === "addons"
//                 ? "bg-black text-white shadow-lg"
//                 : "bg-white text-black border hover:bg-gray-100"
//             }`}
//           >
//             Exclusive Freebie
//           </button>
//         </div>

//         {/* Billing Cycle Toggle */}
//         {selectedTab === "software" && (
//           <div className="flex space-x-2">
//             <button
//               onClick={() => setBillingCycle("monthly")}
//               className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border transition rounded-lg cursor-pointer ${
//                 billingCycle === "monthly"
//                   ? "bg-black text-white shadow-lg"
//                   : "bg-white text-black border hover:bg-gray-100"
//               }`}
//             >
//               For Professionals
//             </button>
          
//             <button
//               onClick={() => setBillingCycle("quarterly")}
//               className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border transition rounded-lg cursor-pointer ${
//                 billingCycle === "quarterly"
//                   ? "bg-black text-white shadow-lg hover:bg-gray-800"
//                   : "bg-white text-black border hover:bg-gray-100"
//               }`}
//             >
//               For Small Businesses
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Pricing Cards */}
//       {selectedTab === "software" ? (
//         <div className="flex flex-wrap justify-center gap-6">
//           {pricingPlans[billingCycle].map((plan, index) => (
//             <div
//               key={index}
//               className="p-6 bg-yellow-400 hover:bg-yellow-300 shadow-xl rounded-lg transform transition hover:scale-105 w-full md:w-70"
//             >
//               <h3 className="text-2xl font-bold text-black">{plan.title}</h3>

//               <p className="text-3xl font-bold my-4 text-black">
//                 ${plan.price}
//               </p>

//               <button
//                 onClick={() => handlePayment(plan)}
//                 className="mt-4 px-6 py-3 bg-black text-white rounded-lg w-full transition hover:bg-gray-900 cursor-pointer"
//               >
//                 Start Your Free Trial
//               </button>

//               <ul className="mt-6 text-left space-y-3 text-black">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center space-x-3">
//                     <CheckCircle className="text-green-500 min-w-[20px] min-h-[20px]" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ) : selectedTab === "services" ? (
//         // Services Cards
//         <div className="flex flex-wrap justify-center gap-6">
//           {servicesPlans.map((service, index) => (
//             <div
//               key={index}
//               className="p-6 bg-yellow-400 shadow-xl rounded-lg transform transition hover:scale-105 w-full md:w-80"
//             >
//               <h3 className="text-2xl font-bold text-black">{service.title}</h3>

//               <div className="text-black text-3xl mt-3 font-semibold mb-2">
//                 ${service.price}{" "}
//                 <span className="text-sm"> {service.pricingUnit}</span>
//               </div>
//               <button 
//                 onClick={() => handlePayment(service)}
//                 className="mt-4 px-6 py-3 bg-black text-white rounded-lg w-full transition hover:bg-gray-900 cursor-pointer"
//               >
//                 Start Your Free Trial
//               </button>

//               <ul className="mt-6 text-left space-y-3 text-black">
//                 {service.features.map((feature, i) => (
//                   <li key={i} className="flex items-center space-x-3">
//                     <CheckCircle className="text-green-500 min-w-[20px] min-h-[20px]" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ) : (
//         // Add-ons Cards
//         <div className="flex flex-wrap justify-center gap-6">
//           {addonsPlans.map((addon, index) => (
//             <div
//               key={index}
//               className="p-6 bg-yellow-400 hover:bg-yellow-300 shadow-xl rounded-lg transform transition hover:scale-105 w-full md:w-80"
//             >
//               <h3 className="text-2xl font-bold mt-3 text-black">
//                 {addon.title}
//               </h3>

//               <button
//                 onClick={() =>
//                   window.open("https://ko-fi.com/dollarducks", "_blank")
//                 }
//                 className="mt-11 px-6 py-3 bg-black text-white rounded-lg w-full transition hover:bg-gray-900 cursor-pointer"
//               >
//                 Buy me a coffee
//               </button>

//               <ul className="mt-6 text-left space-y-3 text-black">
//                 {addon.features.map((feature, i) => (
//                   <li key={i} className="flex items-center space-x-3">
//                     <CheckCircle className="text-green-500 min-w-[20px] min-h-[20px]" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlansPricing;





import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const pricingPlans = {
  monthly: [
    {
      title: "Visibility & Local Search Optimization",
      price: 295,
      features: [
        "Google Business Profile Optimization",
        "Local SEO & Keyword Targeting",
        "Customer Reviews & Reputation Management",
        "NAP Consistency & Local Citations",
      ],
    },
    {
      title: "Social Media Growth & Engagement",
      price: 695,
      features: [
        "Content Strategy & Consistency",
        "Audience Interaction & Community Building",
        "Hashtag & SEO Optimization",
        "Analytics & Performance Tracking",
      ],
    },
    {
      title: "360° Digital Marketing Services",
      price: 995,
      features: [
        "Strategic Branding & Online Presence",
        "Multi-Channel Marketing & Advertising",
        "Data-Driven Optimization & Analytics",
        "Customer Engagement & Retention",
      ],
    },
  ],
  quarterly: [
    {
      title: "Visibility & Local Search Optimization",
      price: 395,
      features: [
        "Google Business Profile Optimization",
        "Local SEO & Keyword Targeting",
        "Customer Reviews & Reputation Management",
        "NAP Consistency & Local Citations",
      ],
    },
    {
      title: "Social Media Growth & Engagement",
      price: 995,
      features: [
        "Content Strategy & Consistency",
        "Audience Interaction & Community Building",
        "Hashtag & SEO Optimization",
        "Analytics & Performance Tracking",
      ],
    },
    {
      title: "360° Digital Marketing Services",
      price: 1495,
      features: [
        "Strategic Branding & Online Presence",
        "Multi-Channel Marketing & Advertising",
        "Data-Driven Optimization & Analytics",
        "Customer Engagement & Retention",
      ],
    },
  ],
};

const servicesPlans = [
  {
    title: "End-to-End Web Solutions",
    price: 795,
    features: [
      "Custom Web Design & Development",
      "UI/UX Optimization & Mobile Responsiveness",
      "Backend Development & Database Integration",
      "Website Security & Performance Enhancement",
    ],
  },
  {
    title: "Website Creation & Optimization",
    price: 1195,
    features: [
      "Custom Website Design & Development",
      "Performance & Speed Optimization",
      "SEO & Mobile Responsiveness",
      "Security & Maintenance Updates",
    ],
  },
];

const addonsPlans = [
  {
    title: "Logo & Branding Kit",
    price: 195,
    features: [
      "Custom Logo Design",
      "Brand Color Palette",
      "Typography Guidelines",
      "Social Media Templates",
    ],
  },
  {
    title: "Holiday & Event Post",
    price: 295,
    features: [
      "Seasonal Campaign Strategy",
      "Event-Based Promotions",
      "Festive Email Templates",
      "Performance Analytics & Insights",
    ],
  },
  {
    title: "Link Building Services",
    price: 250,
    features: [
      "High-Quality Backlinks",
      "Guest Posting Outreach",
      "Broken Link Building",
      "Monthly Link Profile Report",
    ],
  },
];

const PlansPricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedTab, setSelectedTab] = useState("software");

  const handlePayment = async (plan) => {
    const stripe = await stripePromise;
    try {
      const response = await fetch("http://localhost:5000/api/payments/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: plan.title,
          price: plan.price,
          email: "customer@example.com", // replace with dynamic user email if available
        }),
      });

      const session = await response.json();
      if (session.id) {
        stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error("Checkout session creation failed:", session);
        alert("Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Stripe checkout error:", err);
      alert("Unable to process payment.");
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-15 md:mt-18">
        Flexible Plans & Pricing
      </h2>
      <p className="mt-2 text-center text-sm md:text-base">
        Designed for Plumbers, Roofers, Electricians, HVAC, Construction, Home Appliance Repair & More!
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center my-6">
        <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
          {["software", "services", "addons"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border rounded-lg transition ${
                selectedTab === tab ? "bg-black text-white shadow-lg" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {tab === "software" ? "Services" : tab === "services" ? "Website" : "Exclusive Freebie"}
            </button>
          ))}
        </div>

        {selectedTab === "software" && (
          <div className="flex space-x-2 mt-4 md:mt-0">
            {["monthly", "quarterly"].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border rounded-lg transition ${
                  billingCycle === cycle ? "bg-black text-white shadow-lg" : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {cycle === "monthly" ? "For Professionals" : "For Small Businesses"}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {(selectedTab === "software"
          ? pricingPlans[billingCycle]
          : selectedTab === "services"
          ? servicesPlans
          : addonsPlans
        ).map((plan, i) => (
          <div
            key={i}
            className="p-6 bg-yellow-400 hover:bg-yellow-300 shadow-xl rounded-lg transform transition hover:scale-105 w-full md:w-80"
          >
            <h3 className="text-2xl font-bold text-black">{plan.title}</h3>
            <p className="text-3xl font-bold my-4 text-black">${plan.price}</p>

            {selectedTab === "addons" ? (
              <button
                onClick={() => window.open("https://ko-fi.com/dollarducks", "_blank")}
                className="mt-11 px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-gray-900"
              >
                Buy me a coffee
              </button>
            ) : (
              <button
                onClick={() => handlePayment(plan)}
                className="mt-4 px-6 py-3 bg-black text-white rounded-lg w-full hover:bg-gray-900"
              >
                Start Your Free Trial
              </button>
            )}

            <ul className="mt-6 text-left space-y-3 text-black">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 min-w-[20px] min-h-[20px]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPricing;
