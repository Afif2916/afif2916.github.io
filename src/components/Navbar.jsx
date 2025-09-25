import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <nav className="flex justify-center items-center fixed top-[2vh] z-[999] w-full">
        <div
          className="
            w-[325px]       /* layar kecil lebih ramping */
            sm:w-[300px]  /* layar >=640px */
            md:w-[500px]  /* layar >=768px */
            h-[36px]
            md:h-[50px] 
            bg-white rounded-[36px] 
            dark:bg-gray-800
            shadow-[0px_2px_10px_rgba(0,0,0,0.3)]
          "
        >
          <ul className="flex justify-between items-center px-4 h-full list-none">
            {["Home", "About", "Projects", "Articles", "Contact"].map((item) => (
              <li key={item} className="font-semibold text-sm md:text-lg">
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `no-underline transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "text-[#14b8a6]"
                        : "text-[#27272a] hover:text-[#14b8a6] dark:text-gray-300"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
