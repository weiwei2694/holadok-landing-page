import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex">
        <div className="flex flex-col justify-center max-w-[400px] w-full me-24">
          <h1 className="font-bold text-5xl text-blue-2 stroke-dark-1 leading-[60px]">
            Get the healthcare you need, when you need it.
          </h1>
          <p className="mt-4 text-lg font-normal text-blue-2">
            Manage all of your healthcare needs in one convenient place – from
            booking appointments to tracking your health history.
          </p>

          <button
            className="mt-8 bg-blue-1 text-light-1 px-12 py-4 w-fit font-normal text-lg"
            type="button"
          >
            Book an Appointment
          </button>
        </div>

        <div className="relative flex-1 flex justify-end">
          <div className="">
            <Image
              src="/assets/image 1.svg"
              alt="Jane Doe"
              width={400}
              height={0}
              className="object-contain"
            />
          </div>

          <div className="absolute top-12 left-0">
            <div className="w-[250px] bg-light-1 rounded-xl shadow-xl flex flex-col p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/Ellipse 1.svg"
                    alt="John Doe"
                    width={20}
                    height={20}
                    className="rounded-full object-contain"
                  />
                  <h6 className="text-blue-2 font-bold text-sm tracking-wider">
                    John Doe
                  </h6>
                </div>
                <p className="text-5xl text-dark-1 text-opacity-50">"</p>
              </div>

              <div className="text-xs font-normal text-blue-2">
                <p>
                  “The doctor appointment app has been great for me. Scheduling
                  appointments and getting medication reminders is much easier,
                  and I love the option for virtual consultations. I'd recommend
                  this app to others.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-blue-1 w-full">
        <div className="flex gap-10">
          <div className="flex gap-3">
            <div className="relative">
              <Image
                src="/assets/Frame.svg"
                alt="Date"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-lg text-light-1">
                Online appointment scheduling
              </h4>
              <p className="font-normal text-base text-light-1">
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <Image
                src="/assets/Frame (1).svg"
                alt="Date"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-lg text-light-1">
                Online appointment scheduling
              </h4>
              <p className="font-normal text-base text-light-1">
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <Image
                src="/assets/Frame (2).svg"
                alt="Date"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-lg text-light-1">
                Online appointment scheduling
              </h4>
              <p className="font-normal text-base text-light-1">
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
