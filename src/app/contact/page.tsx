import Card from "../component/Card";

export default function Contact() {
    return (
        <div className="space-y-8 m-10">
            <h1 className="text-4xl font-bold text-center text-purple-800">Contact Us</h1>
            <Card>
                <p className="text-xl text-gray-700 mb-6 text-center">Get in touch with us for any inquiries or feedback.</p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-purple-600 font-semibold">Name:</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-purple-600 font-semibold">Email:</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-purple-600 font-semibold">Message:</label>
                        <textarea id="message" name="message" required className="w-full px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" rows={4}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-purple-600 text-white px-6 py-3 rounded font-semibold hover:bg-pink-500 transition duration-300">Send Message</button>
                </form>
            </Card>
        </div>
    )
}

