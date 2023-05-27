import { forwardRef } from "react";
import Form from "./ContactForm";

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
	return (
		<div ref={ref} className="px-10 lg:px-60 pb-40">
			<p className="py-10 text-black font-bold text-4xl">Contact 💜</p>
			<p className="text-black text-xl lg:text-2xl pb-10">
				Let's work together! Contact me below to add some magic to your online
				presence!
			</p>
			<Form />
		</div>
	);
});

export default Contact;
