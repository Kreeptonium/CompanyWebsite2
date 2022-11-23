import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h2 className="text-6xl font-semibold mb-24 capitalize text-center">
        Feel free to cotact us
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d120627.09941322007!2d72.85047284362801!3d19.125333848088545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d19.1984553!2d72.98148739999999!4m5!1s0x3be7cf2f651bffff%3A0x3577721ee462e107!2swework%20bkc!3m2!1d19.0579879!2d72.86508599999999!5e0!3m2!1sen!2sin!4v1668342436143!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className=" mt-10 sm:mt-24 lg:mt-24 mb-20 pl-5 grid  md:grid-cols-[400px_minmax(500px,_1fr)_100px]">
        <div className="">
          <p>
            <b>Web3Magix Private Limited</b> <br />
            <br />
            <b>Address</b>: <br />
            C - 20, G Block BKC, G Block, <br />Bandra Kurla Complex,
            <br /> Bandra(E.), Mumbai,<br /> Maharashtra -400051 <br /> <br />
            <b>Email:</b><br />
            info@web3magix.com <br /><br />
            <b>Phone:</b> <br />+919820838617
          </p><br />
        </div>
        <div className="  sm:max-w[10%] items-center sm:-pl-96 max-w-[80%] sm:max-w-[80%]  md:max-w-[65%] lg:max-w-[70%] xl:max-w-[70%] 2xl:max-w-[80%]">
          <form
            action="https://formspree.io/f/mgeqrgqq"
            method="POST"
            className="flex flex-col gap-12 "
          >
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0
   border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
              ></span>
              <input
                type="text"
                id="website-admin"
                class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300
   text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 
    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
     dark:focus:border-blue-500"
                placeholder="Username"
              />
            </div>
            <div class="mb-6">
              <input
                name="Email"
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              REQUEST A FREE CONSULTATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// const theme = {
//     colors: {
//       heading: "rgb(24 24 29)",
//       text: "rgb(24 24 29)",
//       white: "#fff",
//       black: " #212529",
//       helper: "#8490ff",
//       bg: "rgb(249 249 255)",
//       footer_bg: "#0a1435",
//       btn: "rgb(98 84 243)",
//       border: "rgba(98, 84, 243, 0.5)",
//       hr: "#ffffff",
//       gradient:
//         "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
//       shadow:
//         "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
//       shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
//     },
//     media: { mobile: "768px", tab: "998px" },
//   }
