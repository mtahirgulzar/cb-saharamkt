import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { imageResolver } from "@/utils/helpers";

const ContactForm = ({ data }) => {
  const [dis, setDis] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
    company: "",
  });
  const [btnDis, setBtnDis] = useState(false);
  useEffect(() => {
    if (
      dis.email.length &&
      dis.name.length &&
      dis.company.length &&
      dis.phone.length &&
      dis.message.length
    ) {
      setBtnDis(true);
      document.getElementById("mySubmit").disabled = false;
    } else {
      setBtnDis(false);
      document.getElementById("mySubmit").disabled = true;
    }
  }, [dis]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.name.trim().length === 0) {
      toast.error("Please Enter a correct Name");
      return;
    }
    if (data.phone.length > 20) {
      toast.error("Please Enter a correct phone number");
    } else if (data.message.length > 800) {
      toast.error("write a correct message");
    } else {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // console.log("Response received", res);
          if (res.status === 200) {
            // console.log("Response succeeded!");
            toast.success("Thank you for contacting us!");
          } else {
            // console.log("Email/Password is invalid.");
            toast.error("Something is wrong.");
          }
          setBtnDis(false);
          document.getElementById("mySubmit").disabled = true;
        })
        .catch((e) => console.log(e));
      reset();
    }
  };
  return (
    <div className="max-w-[1140px] mx-auto px-4" id="contactform">
      <div className="  mt-12 mb-[80px]">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="w-full lg:w-[37%] mt-8">
            <div className="max-w-[280px] h-[76px]">
              <img
                className="w-full h-full"
                src={imageResolver(data?.logoimg).path}
                alt="contact form logo"
                loading="lazy"
              />
            </div>
            <div className="mt-[30px] md:mt-[40px] lg:mt-[50px]">
              <Link href={`${data?.contactlink?.addresslink}`} legacyBehavior>
                <a
                  href={`${data?.contactlink?.addresslink}`}
                  target="_blank"
                  rel="noopener"
                >
                  <h3 className="text-[#6a0000] text-[16px] md:text-[17px] lg:text-[18px] lg:leading-[30px] font-[400] mb-[14px]">
                    {data?.contactlink?.addressname}
                  </h3>
                </a>
              </Link>
              <p className="text-[#6a0000] text-[16px] md:text-[17px] lg:text-[18px] lg:leading-[30px] font-[700] mb-[14px]">
                Tel:
                <Link
                  href={`tel:+${data?.contactlink?.tellink}`}
                  legacyBehavior
                >
                  <span className=" font-[400]">
                    <a href={`tel:+${data?.contactlink?.tellink}`}>
                      {" "}
                      {data?.contactlink?.telname}
                    </a>
                  </span>
                </Link>
              </p>
              <p className="text-[#6a0000] text-[16px] md:text-[17px] lg:text-[18px] lg:leading-[30px] font-[700] mb-[14px]">
                Fax:
                <span className=" font-[400]"> (925) 999-8242 </span>
              </p>
              <p className="text-[#6a0000] text-[16px] md:text-[17px] lg:text-[18px] lg:leading-[30px] font-[700] mb-[14px]">
                Email:
                <Link
                  href={`mailto:+${data?.contactlink?.emaillink}`}
                  legacyBehavior
                >
                  <span className=" font-[400]">
                    <a href={`mailto:+${data?.contactlink?.emaillink}`}>
                      {data?.contactlink?.emailname}{" "}
                    </a>
                  </span>
                </Link>
              </p>
              <p className="text-[#6a0000] text-[16px] md:text-[17px] lg:text-[18px] lg:leading-[30px] font-[700] mb-[14px]">
                Web:
                <Link href={`${data?.contactlink?.weblink}`} legacyBehavior>
                  <span className=" font-[400]">
                    <a href={`${data?.contactlink?.weblink}`}>
                      {data?.contactlink?.webname}{" "}
                    </a>
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="md:py-4 w-full  lg:w-[62%]">
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
              <div className="items-center mt-4 gap-x-3 sm:flex">
                <div className="sm:w-[50%] flex flex-col">
                  <label className="text-[#6a0000] leading-[16px] font-normal">
                    Name <span className="text-[#6a0000]">*</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    tabIndex={0}
                    placeholder="Name"
                    id="name"
                    name="name"
                    onChange={(e) => setDis({ ...dis, name: e.target.value })}
                    required
                    role="input"
                    arial-label="Please input your name"
                    type="name"
                    className="outline-[#6a0000]. text-[#6a0000]  p-3  mt-2 text-base leading-none  border border-[#6a0000] rounded focus:oultine-none"
                  />
                </div>
                <div className="sm:w-[50%] flex flex-col md:ml-6 sm:mt-0 mt-4">
                  <label className="text-[#6a0000] leading-[16px] font-normal">
                    Phone <span className="text-[#6a0000]">*</span>
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    id="phone"
                    placeholder="Phone"
                    name="phone"
                    required
                    onChange={(e) => setDis({ ...dis, phone: e.target.value })}
                    type="number"
                    onKeyDown={(e) =>
                      ["e", "E", "+", "-", "."].includes(e.key) &&
                      e.preventDefault()
                    }
                    pattern="[0-9]{1,15}"
                    className="outline-[#6a0000]. text-[#6a0000]  p-3  mt-2 text-base leading-none  border border-[#6a0000] rounded focus:oultine-none"
                  />
                </div>
              </div>
              <div className="items-center mt-4 gap-x-3 sm:flex">
                <div className="sm:w-[50%] flex flex-col">
                  <label className="text-[#6a0000] leading-[16px] font-normal">
                    Email <span className="text-[#6a0000]">*</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    tabIndex={0}
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={(e) => setDis({ ...dis, email: e.target.value })}
                    required
                    role="input"
                    arial-label="Please input your email"
                    type="email"
                    className="outline-[#6a0000]. text-[#6a0000]  p-3  mt-2 text-base leading-none  border border-[#6a0000] rounded focus:oultine-none"
                  />
                </div>
                
                <div className="sm:w-[50%] flex flex-col md:ml-6 sm:mt-0 mt-4">
                  <label className="text-[#6a0000] leading-[16px] font-normal">
                    Company Name <span className="text-[#6a0000]">*</span>
                  </label>
                  <input
                    {...register("company", { required: true })}
                    tabIndex={0}
                    placeholder="Company Name"
                    id="company"
                    name="company"
                    onChange={(e) =>
                      setDis({ ...dis, company: e.target.value })
                    }
                    required
                    role="input"
                    arial-label="Please input your Company Name"
                    type="company"
                    className="outline-[#6a0000]. text-[#6a0000]  p-3  mt-2 text-base leading-none  border border-[#6a0000] rounded focus:oultine-none"
                  />
                </div>
              </div>
              <div className="mt-4 mb-2">
              <label className="text-[#6a0000]">Inquiries</label>
                <div className="flex items-center gap-3 flex-wrap text-[#6a0000]">
                  <input
                    type="checkbox"
                    id="Catering"
                    name="Catering"
                    value="Catering"
                  />
                  <label htmlFor="Inquiries1">Catering</label>
                  <input
                    type="checkbox"
                    id="Restaurant"
                    name="Restaurant"
                    value="Restaurant"
                  />
                  <label htmlFor="Inquiries2">Restaurant</label>
                  <input
                    type="checkbox"
                    id="Meat & Chicken"
                    name="Meat & Chicken"
                    value="Meat & Chicken"
                  />
                  <label htmlFor="Inquiries3">Meat & Chicken</label>
                  <input
                    type="checkbox"
                    id="Grocery"
                    name="Grocery"
                    value="Grocery"
                  />
                  <label htmlFor="Inquiries4">Grocery</label>
                  <input
                    type="checkbox"
                    id="Bakery"
                    name="Bakery"
                    value="Bakery"
                  />
                  <label htmlFor="Inquiries5">Bakery</label>
                  <input
                    type="checkbox"
                    id="Fresh Produce"
                    name="Fresh Produce"
                    value="Fresh Produce"
                  />
                  <label htmlFor="Inquiries6">Fresh Produce</label>
                </div>
              </div>
              <div>
                <div className="flex flex-col w-full mt-4">
                  <label className="text-[#6a0000] leading-[16px] font-normal">
                    Message <span className="text-[#6a0000]">*</span>
                  </label>
                  <textarea
                    defaultValue={""}
                    {...register("message", { required: true })}
                    placeholder="Message"
                    id="message"
                    name="message"
                    tabIndex={0}
                    required
                    onChange={(e) =>
                      setDis({ ...dis, message: e.target.value })
                    }
                    aria-label="leave a message"
                    role="textbox"
                    type="name"
                    className="outline-[#6a0000]. text-[#6a0000] p-3 mt-2 text-base leading-none border border-[#6a0000] rounded resize-none h-28 focus:oultine-none "
                  />
                </div>
              </div>
              <div className="flex items-center justify-end w-full">
                <button
                  id="mySubmit"
                  type="submit"
                  className={`w-full py-3 text-base text-[17px] md:text-[19px] lg:text-[21px] leading-[20px] font-[500] text-white bg-[#6a0000] rounded transition mt-9 hover:bg-[#FFB400]  duration-300 focus:outline-none ${
                    !btnDis && "cursor-not-allowed"
                  }`}
                >
                  Send
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
