import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-blue-500">
                Ride
              </span>
              Nest
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Premium car rental platform for luxury,
              sports, and family rides with smooth
              booking experience.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Useful Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link
                href="/"
                className="hover:text-blue-500 transition"
              >
                Home
              </Link>

              <Link
                href="/explore-cars"
                className="hover:text-blue-500 transition"
              >
                Explore Cars
              </Link>

              <Link
                href="/add-car"
                className="hover:text-blue-500 transition"
              >
                Add Car
              </Link>

              <Link
                href="/my-bookings"
                className="hover:text-blue-500 transition"
              >
                My Bookings
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-3 text-slate-400">
              <p>📍 Khulna, Bangladesh</p>
              <p>📞 +880 1234-567890</p>
              <p>✉️ support@ridenest.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <Link
                href="/"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="/"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="/"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
              >
                <FaXTwitter size={18} />
              </Link>

              <Link
                href="/"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-500 transition flex items-center justify-center"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
          <p>
            © 2026 RideNest. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;