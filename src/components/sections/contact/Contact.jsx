import {useRef, useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../../../styles.js";
import SpaceMan from "../../../assets/spaceman.svg";
import {SectionWrapper} from "../../../hoc/index.js";
import {slideIn} from "../../../utils/motion.js";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });

        // Clear error message when the user starts typing
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!form.name) {
            newErrors.name = "Please enter your name.";
        }

        if (!form.email) {
            newErrors.email = "Please enter your email.";
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(form.email)) {
                newErrors.email = "Please enter a valid email address.";
            }
        }

        if (!form.message) {
            newErrors.message = "Please enter your message.";
        }

        setErrors(newErrors);

        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        emailjs
            .send(
                'service_7utxvdl',
                'template_4sw3e8h',
                {
                    from_name: form.name,
                    to_name: "Donovan de Klerk",
                    from_email: form.email,
                    to_email: "jddeklerk0@gmail.com",
                    message: form.message,
                },
                'kafg9Ph_3bSLNOU4B'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className={`xl:mt-10 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-5'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                        {errors.name && (
                            <motion.span
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3}}
                                className='text-red-500 mt-2'
                            >
                                {errors.name}
                            </motion.span>
                        )}
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                        {errors.email && (
                            <motion.span
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3}}
                                className='text-red-500 mt-2'
                            >
                                {errors.email}
                            </motion.span>
                        )}
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What do you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                        {errors.message && (
                            <motion.span
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3}}
                                className='text-red-500 mt-2'
                            >
                                {errors.message}
                            </motion.span>
                        )}
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto flex justify-center items-center object-fill'
            >
                <img
                    src={SpaceMan}
                    alt="SpaceMan"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: '700px',
                        height: '100%',
                        objectFit: 'contain' // Ensures the image scales correctly within the div
                    }}
                />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
