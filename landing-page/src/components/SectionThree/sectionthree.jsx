'use client';

import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer/footer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { IoMail } from 'react-icons/io5';
import { MdCall } from 'react-icons/md';
import 'aos/dist/aos.css'; // import AOS CSS
import AOS from 'aos';

const Sectionthree = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for button

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true); // Start loading immediately
    setSubmitting(true); // Disable button immediately
    
    // Display success message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(true);
    }, 3000);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      resetForm(); // Reset the form after submission
    } catch (error) {
      console.error('Error sending email:', error.message);
    } finally {
      setLoading(false); // Stop loading
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black">
     
        <div
          className="flex flex-col gap-y-8 lg:flex-row max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-10 text-white"
          data-aos="fade-left"
        >
          <div className="flex-1">
            <div className="py-2 md:py-4">
              <p className="text-xl md:text-4xl lg:text-3xl xl:text-4xl font-josefin tracking-wider">
                Contact Us <span className="text-orange-500">Today!</span>
              </p>
            </div>
            <div className="py-2 md:py-4 w-[100%] lg:w-[92%] xl:w-[85%]">
              <p className="text-xs md:text-xl lg:text-base xl:text-lg font-josefin tracking-wider leading-relaxed md:leading-8 lg:leading-relaxed">
                Your satisfaction is guaranteed with Toprofile! Our multimedia enterprise cuts across equipment rental, audiovisual production, videography, TV programming, photography, animation, AI, music, live-streaming, graphics, and more.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 py-4">
              <div>
                <Link href="tel:+2349047068433">
                  <div className="flex justify-start items-center gap-2 md:gap-4">
                    <MdCall className="h-4 w-4 md:h-6 md:w-6" />
                    <p className="text-xs md:text-lg xl:text-base font-normal">09047068433</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="mailto:info@toprofile.com">
                  <div className="flex justify-start items-center gap-2 md:gap-4">
                    <IoMail className="h-4 w-4 md:h-6 md:w-6" />
                    <p className="text-xs md:text-lg xl:text-base font-normal">toprofilemultimedia@gmail.com</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1">
          {formSubmitted ? (
        <div className="flex justify-center items-center text-center h-[30vh] md:h-[50vh] rounded-3xl shadow-2xl ">
          <p className="text-orange-600 text-sm md:text-3xl lg:text-lg xl:text-xl text-orange">
            Message sent successfully!
          </p>
        </div>
      ) : (
        <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().required('Email is required'),
          message: Yup.string().required('Service needed is required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-2 md:gap-6 py-5" autoComplete="off">
            <div className="flex flex-col custom-sm:flex-row justify-between items-center gap-y-0 gap-x-2 md:gap-x-10 lg:gap-x-8">
              <div className="flex flex-col gap-2 w-[100%] lg:w-[80%]">
                <label htmlFor="name" className="text-xs md:text-2xl lg:text-base">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  className="outline-none rounded-xl bg-gray text-slate-600 px-2 py-2 md:py-4 lg:py-4 text-xs md:text-2xl lg:text-base focus-visible:border-slate-900"
                />
                <div className="min-h-[1rem]">
                  <ErrorMessage name="name" component="div" className="text-red-600 text-xs md:text-xl lg:text-sm" />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-[100%] lg:w-[80%]">
                <label htmlFor="email" className="text-xs md:text-2xl lg:text-base">
                  Email<span className="text-red-500">*</span>
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className="outline-none rounded-xl bg-gray text-slate-600 px-2 py-2 md:py-4 lg:py-4 text-xs md:text-2xl lg:text-base focus-visible:border-slate-900"
                />
                <div className="min-h-[1rem]">
                  <ErrorMessage name="email" component="div" className="text-red-600 text-xs md:text-xl lg:text-sm" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs md:text-2xl lg:text-base">
                Message<span className="text-red-500">*</span>
              </label>
              <Field
                as="textarea"
                rows="4"
                cols="50"
                name="message"
                className="text-gray-600 text-xs md:text-2xl rounded-xl lg:text-base bg-gray px-2 py-2 md:py-4 lg:py-2 outline-none w-full"
              />
              <div className="min-h-[1rem]">
                <ErrorMessage name="message" component="div" className="text-red-600 text-xs md:text-xl lg:text-sm" />
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <button
                type="submit"
                disabled={loading || isSubmitting}
                style={{ background: 'linear-gradient(90deg, #FF4D03 5.56%, #722B90 96.58%)' }}
                className={`bg-lite text-white px-8 py-2 lg:py-3 w-full rounded-xl text-xs md:text-2xl lg:text-base ${
                  loading || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      )}
        
          </div>
        </div>
      
      <Footer />
    </div>
  );
};

export default Sectionthree;
