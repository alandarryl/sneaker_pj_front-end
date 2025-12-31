

import './filterSetting.css';



function FilterSetting(){

    return(
        <div className='filter-setting' >
            <div className='filter-search-bar' >
                <input/>
                <button>Search</button>
            </div>
            <select className='filter-select' >
                <option value={none} >first</option>
                <option value={h} >Male</option>
                <option value={f} >Female</option>
            </select>
        </div>
    )

}


export default FilterSetting;

