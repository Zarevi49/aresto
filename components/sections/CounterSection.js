import Counter from "@/components/Counter";

const CounterSection = () => {
    return (
        <div className="w-full max-w-[1215px] mx-auto mt-[76px] md:mt-[153px] flex flex-col md:flex-row align-center justify-around md:space-y-0 space-y-[29px]">
            <Counter value=">34" text="years of experience" />
            <Counter value=">10.320" text="meals per day" />
            <Counter value="620" text="employees" />
            <Counter value="40" text="lorem ipsum" />
        </div>
    )
}

export default CounterSection