import Counter from "@/components/Counter";

const CounterSection = ({data}) => {
    const counters = data.number_item
    return (
        <div className="w-full max-w-[1215px] mx-auto mt-[76px] md:mt-[153px] flex flex-col md:flex-row align-center justify-around md:space-y-0 space-y-[29px]">
            {
                counters.length && counters.map((counter, index) => (
                    <Counter key={index} value={counter.title} text={counter.subtitle} />
                ))
            }
        </div>
    )
}

export default CounterSection
