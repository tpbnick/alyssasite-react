import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
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

const Form: React.FC = () => {
	const [formData, setFormData] = useState<IForm>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const [errors, setErrors] = useState<IErrors>({});
	const validate = (formData: IForm): IErrors => {
		const formErrors: IErrors = {};
		if (!formData.name) {
			formErrors.name = "Name required";
		}
		if (!formData.email) {
			formErrors.email = "Email required";
		}
		if (!formData.message) {
			formErrors.message = "Message is required";
		}
		return formErrors;
	};

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setErrors(validate(formData));
		setIsSubmitted(true);
	};

	const encode = (data: IFormData): string => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					"=" +
					encodeURIComponent(data[key as keyof IFormData])
			)
			.join("&");
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitted) {
			const data: IFormData = { "form-name": "contact-form", ...formData };
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode(data),
			})
				.then(() => alert("Success!"))
				.then(() => setIsSubmitted(false))
				.then(() => setFormData({ name: "", email: "", message: "" }))
				.catch((error) => alert(error));
		}
	}, [errors, formData, isSubmitted]);

	return (
		<div className="flex flex-col items-center">
			<form
				onSubmit={handleSubmit}
				id="contact-form"
				className="flex flex-col space-y-4 w-full"
			>
				<input type="hidden" name="form-name" value="contact" />
				<div className="form-inputs">
					<label className="text-black block text-xl">
						Full Name:
						<input
							type="text"
							name="name"
							id="name"
							className="w-full rounded shadow-lg mt-2 p-2"
							value={formData.name}
							onChange={handleChange}
						/>
					</label>
					{errors.name && <p>{errors.name}</p>}
				</div>
				<div className="form-inputs">
					<label className="text-black block text-xl">
						Email Address:
						<input
							type="email"
							name="email"
							id="email"
							className="w-full rounded shadow-lg mt-2 p-2"
							value={formData.email}
							onChange={handleChange}
						/>
					</label>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form-inputs">
					<label className="text-black block text-xl">
						Message:
						<textarea
							name="message"
							id="message"
							className="w-full rounded shadow-lg mt-2 p-3"
							value={formData.message}
							onChange={handleChange}
						></textarea>
					</label>
					{errors.message && <p>{errors.message}</p>}
				</div>
				<div className="w-full text-center">
					<button
						type="submit"
						id="form-btn"
						className="btn text-xl bg-pinkish drop-shadow-md border-none text-purple-950 font-normal hover:bg-orangeish py-2 mt-4 flex justify-center items-center mx-auto max-w-xs w-full"
					>
						Send <FontAwesomeIcon className="pl-2" icon={faPaperPlane} />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
