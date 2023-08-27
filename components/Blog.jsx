import React from "react";
import BlogCard from "./cards/BlogCard";
import { blog_data } from "@/constants";
import BlogPagination from "./BlogPagination";

const Blog = () => {
    let counter = 0;
    return (
        <>
            <div className=" flex items-center justify-center flex-col mx-auto">
                <h3 className="font-bold text-xl text-[#fdbe33]"> Our Blog</h3>
                <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold py-2 ">
                    Latest news & articles directly from our Newsletter
                </p>
            </div>
            <section className="mx-auto w-screen lg:w-[80vw] px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-2">
                {blog_data.map((blog, index)=>(
                    <BlogCard key={counter++} {...blog} />
                ))}
            </section>
            <div className="pagination">
                <BlogPagination />
            </div>
        </>
    );
};

export default Blog;