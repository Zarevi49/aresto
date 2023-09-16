import React from 'react';
import CustomSelect from "@/components/CustomSelect";

function FormComponent(props) {
    return (
        <form
            className="flex flex-col w-full max-w-[520px] md:w-1/2"
            onSubmit={props.onFormSubmit}
        >
            <div className="mb-[9px]">
                <CustomSelect
                    options={props.options}
                    onChange={(selected) => console.log(selected)}
                />
            </div>
            {/* ... остальные элементы формы ... */}
        </form>
    );
}

export default FormComponent;
