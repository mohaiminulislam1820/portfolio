import { toast } from "react-hot-toast";

const Contact = () => {

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const res = await fetch('https://getform.io/f/7b55cefc-9b76-4923-a56b-f74a32f3b232', {
            method: "POST",
            headers: { 'Accept': 'application/json' },
            body: formData
        });

        if (res.status == 200) {
            toast.success('Your Message has been sent.')
            e.target.reset();
        }
        else toast.error('Sorry an error occurred. Please try again.');
            
    }


    return (
        <section className="py-20" id="contact">
            <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center mb-6">Contact Me</h2>
                <p className="mb-16">
                    Interested in working together or have a question? Feel free to reach out to me using the contact information below or by filling out the form. I&apos;ll get back to you as soon as possible!
                </p>

                <div className=" shadow-md rounded-lg p-6 max-w-4xl mx-auto bg-white text-[var(--primary)]">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <p>
                                <a href="mailto:yourname@example.com" className="underline">mohaiminulislam321@gmail.com</a>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                            <p>+8801850867586</p>
                        </div>
                    </div>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 p-2 border-2 rounded-md w-full"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 p-2 border-2 rounded-md w-full"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="message" className="block text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="mt-1 p-2 border-2 rounded-md w-full"
                            ></textarea>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold bg-[var(--tertiary)] text-white rounded-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
