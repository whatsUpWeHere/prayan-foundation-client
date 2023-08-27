const SectionWrapper = (Component) => {
    function HOC() {
        return (
             
            <section className="sm:px-[12rem] px-[2rem] sm:py-16 py-10  mx-auto relative z-0">
                <span className="hash-span" >
                    &nbsp;
                </span>
                <Component />
            </section>
        );
    }
    return HOC;
};

export default SectionWrapper;