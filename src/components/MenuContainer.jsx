import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-lg" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-4xl lg:text-5xl font-semibold text-white mb-6">
          Discover Our Hot Dishes
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.95 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-white" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-white hover:text-textColor transition-all ease-in-out duration-300`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-14 h-14 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-gradient-to-br from-orange-400 to-orange-600"
                      : "bg-card"
                  } group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-orange-600 flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-white"
                        : "text-textColor"
                    } group-hover:text-white text-3xl`}
                  />
                </div>
                <p
                  className={`text-base ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
