import React, { useState, ChangeEvent, FormEvent } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IForm {
	name: string;
	email: string;
	message: string;
}

interface IFormData extends IForm {
	"form-name": string;
}

interface IErrors {
	name?: string;
	email?: string;
	message?: string;
}

type SubmitStatus = "idle" | "success" | "error";

const Form: React.FC = () => {
	const [formData, setFormData] = useState<IForm>({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState<IErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		if (errors[name as keyof IErrors]) {
			setErrors({ ...errors, [name]: undefined });
		}
	};

	const validate = (data: IForm): IErrors => {
		const formErrors: IErrors = {};
		if (!data.name.trim()) {
			formErrors.name = "Name is required";
		}
		if (!data.email.trim()) {
			formErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
			formErrors.email = "Please enter a valid email address";
		}
		if (!data.message.trim()) {
			formErrors.message = "Message is required";
		}
		return formErrors;
	};

	const encode = (data: IFormData): string =>
		Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					"=" +
					encodeURIComponent(data[key as keyof IFormData])
			)
			.join("&");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const formErrors = validate(formData);
		setErrors(formErrors);
		if (Object.keys(formErrors).length > 0) return;

		setIsSubmitting(true);
		setSubmitStatus("idle");
		try {
			await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact-form", ...formData }),
			});
			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (_err) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="flex flex-col items-center">
			{submitStatus === "success" && (
				<div className="w-full mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-lg">
					Message sent! I'll get back to you soon. 💜
				</div>
			)}
			{submitStatus === "error" && (
				<div className="w-full mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-lg text-lg">
					Something went wrong. Please try again or email me directly.
				</div>
			)}
			<form
				onSubmit={handleSubmit}
				id="contact-form"
				name="contact-form"
				className="flex flex-col space-y-4 w-full"
			>
				<input type="hidden" name="form-name" value="contact-form" />
				<div>
					<label className="text-black block text-xl" htmlFor="name">
						Full Name:
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="w-full rounded shadow-lg mt-2 p-2"
						value={formData.name}
						onChange={handleChange}
					/>
					{errors.name && (
						<p className="text-red-600 mt-1 text-sm font-medium">{errors.name}</p>
					)}
				</div>
				<div>
					<label className="text-black block text-xl" htmlFor="email">
						Email Address:
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="w-full rounded shadow-lg mt-2 p-2"
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email && (
						<p className="text-red-600 mt-1 text-sm font-medium">{errors.email}</p>
					)}
				</div>
				<div>
					<label className="text-black block text-xl" htmlFor="message">
						Message:
					</label>
					<textarea
						name="message"
						id="message"
						rows={5}
						className="w-full rounded shadow-lg mt-2 p-3"
						value={formData.message}
						onChange={handleChange}
					/>
					{errors.message && (
						<p className="text-red-600 mt-1 text-sm font-medium">{errors.message}</p>
					)}
				</div>
				<div className="w-full text-center">
					<button
						type="submit"
						id="form-btn"
						disabled={isSubmitting}
						className="btn text-xl bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish py-2 mt-4 flex justify-center items-center mx-auto max-w-xs w-full disabled:opacity-60 disabled:cursor-not-allowed"
					>
						{isSubmitting ? (
							"Sending..."
						) : (
							<>
								Send <FontAwesomeIcon className="pl-2" icon={faPaperPlane} />
							</>
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
