import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
	return (
		<div ref={ref} className="px-10 lg:px-60 pb-40">
			<p className="py-10 text-black font-bold text-4xl">Contact 💜</p>
			<p className="text-black text-xl lg:text-2xl pb-10">
				Let's work together! Contact me below to add some magic to your online
				presence!
			</p>
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				id="contact-form"
				data-netlify-recaptcha="true"
				className="flex flex-col items-center"
				data-netlify-honeypot="bot-field"
			>
				<div className="flex flex-col space-y-4 w-full">
					<label className="text-black block text-xl">
						Full Name:
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							className="w-full rounded shadow-lg mt-2 p-2"
						/>
					</label>
					<label className="text-black block text-xl">
						Email Address:
						<input
							type="email"
							name="email"
							placeholder="your_email@domain.com"
							className="w-full rounded shadow-lg mt-2 p-2"
						/>
					</label>
					<label className="text-black block text-xl">
						Message:
						<textarea
							name="message"
							placeholder="Message..."
							className="w-full rounded shadow-lg mt-2 p-3"
						></textarea>
					</label>
				</div>
				{/* Required input for netlify forms */}
				<input type="hidden" name="form-name" value="contact" />
				<div className="py-2" data-netlify-recaptcha="true"></div>
				<div className="w-full text-center">
					<button
						className="btn text-xl bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish py-2 mt-4 flex justify-center items-center mx-auto max-w-xs w-full"
						type="submit"
						id="form-btn"
					>
						Send <FontAwesomeIcon className="pl-2" icon={faPaperPlane} />
					</button>
				</div>
			</form>
		</div>
	);
});

export default Contact;
