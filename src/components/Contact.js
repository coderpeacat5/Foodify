const Contact = () => {
    const handleSubmit = () => {
        alert("Feedback submitted succesfully!")
    }
    return (
        <div className="flex flex-col justify-center justify-items-center items-center">
            <div
                className="bg-[url('https://www.popina.themeseason.com/assets/images/others/contact.jpg')] 
            bg-cover bg-no-repeat bg-center h-80 flex flex-col justify-center items-center  backdrop-brightness-100 w-full"
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="font-bold text-center mt-9 mb-2 p-2 text-5xl italic text-white brightness-100">Contact Us</h1>
                <p className="font-stretch-50% text-center m-2 p-2 text-lg text-white uppercase brightness-100">Got a question? We'll give you a straight answer</p>
            </div>
            <div className="flex flex-row justify-evenly p-4 w-full">
                <div>
                    <p className="text-center text-2xl m-1 font-bold text-green-900">🏠︎</p>
                    <h5 className="text-center font-semibold text-green-900">ADDRESS :</h5>
                    <p className="text-center">2903 Avenue Z, Brooklyn,<br /> New York City</p>
                </div>
                <div>
                    <p className="text-center text-2xl m-1 text-green-900">✉</p>
                    <h5 className="text-center font-semibold text-green-900">E-MAIL :</h5>
                    <p className="text-center">contact@foodify.com <br />
                        info@foodify.com</p>
                </div>
                <div>
                    <p className="text-center text-2xl m-1 text-green-900">☎︎</p>
                    <h5 className="text-center font-semibold text-green-900">PHONE :</h5>
                    <p className="text-center">(212) 457-2308 <br></br>
                        (212) 457-2309</p>
                </div>

            </div>
            <div className=" w-full flex justify-center items-center bg-[#E9EED9] p-6">
                <div className="bg-white flex w-8/12 justify-between shadow-lg rounded-lg">
                    <form className="flex flex-col w-6/12 m-6 px-4">
                        <h4 className="text-center m-3 text-[#303929] font-bold text-lg">Get In Touch</h4>
                        <input type="text" placeholder="Name*" required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#647554] m-2"></input>
                        <input type="text" placeholder="Email*" required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#647554] m-2"></input>
                        <input type="number" placeholder="Phone*" required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#647554] m-2"></input>
                        <textarea type="textbox" placeholder="Message*" rows="4" required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#647554] m-2"></textarea>
                        <button type="submit"
                        className="w-full p-2 border border-gray-300 rounded-md bg-[#889E73] m-3 cursor-pointer"
                        onClick={handleSubmit}>SUBMIT</button>
                    </form>
                    <img src="https://www.popina.themeseason.com/assets/images/others/about-1.jpg" className="w-6/12 rounded-r-lg"></img>
                </div>
            </div>
        </div>
    )
}

export default Contact;

