import Select from 'react-select';
import { products } from '../utils/products';
import { useEffect, useState } from 'react';
import { getcategoriesAPI } from '../services/allAPI';

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
            backgroundColor: "#0f3460",
            color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({ setFilterList }) => {
    const [options, setOptions] = useState([]);

    const handleChange = (selectedOption) => {
        setFilterList(selectedOption.value)
    }

    useEffect(() => {
        const getcategories = async () => {
            const result = await getcategoriesAPI();
            const productItem = result.data;
            // Take only the first 5 items from productItem
            const firstItems = productItem.slice(0, 5);
            // Transform firstItems into an array of options
            const optionsArray = firstItems.map(item => ({
                value: item.id, // Change this to the appropriate value from your productItem object
                label: item.name // Change this to the appropriate label from your productItem object
            }));
            setOptions(optionsArray);
        }
        getcategories();
    }, []);

    return (
        <Select
            options={options}
            defaultValue={{ value: "", label: "Filter By Category" }}
            styles={customStyles}
            onChange={handleChange}
        />
    );
};

export default FilterSelect;
