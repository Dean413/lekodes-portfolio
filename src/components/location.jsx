import { SectionWrapper } from "../hoc";

const Location = () => {
    return ( 
       <div className="mt-10">
      <h3 className="text-white text-[24px] font-bold mb-4">My Location</h3>
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Trekarios Veterinary Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.791604798412!2d5.218498475107845!3d7.597645292417207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047fb23caacb40b%3A0xecc7552f1ff2caa1!2sABC%20Capital%20Limited!5e0!3m2!1sen!2sng!4v1751548464554!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <a
        href="https://www.google.com/maps/place/ABC+Capital+Limited"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mt-3 block"
      >
        Open in Google Maps
      </a>
    </div>

     );
}
 
export default SectionWrapper (Location, "location")