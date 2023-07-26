import Radio from '@mui/material/Radio';

import './style.css';

function RadioButton( { selectedValue, handleChange } ) {
    return (
        <div className="radioOptions">
            <div>
                <Radio
                    checked = {selectedValue === 'all'}
                    onChange = {e => handleChange(e.target)}
                    value = 'all'
                    sx={{
                        color: "#FFD3CA",
                        '&.Mui-checked': {
                            color: "#EB8F7A",
                        },
                    }}
                />
                <span>Todos</span>
            </div>
            <div>
                <Radio
                    checked = {selectedValue === 'true'}
                    onChange = {e => handleChange(e.target)}
                    value = 'true'
                    sx={{
                        color: "#FFD3CA",
                        '&.Mui-checked': {
                            color: "#EB8F7A",
                        },
                    }}
                />
                <span>Prioridade</span>
            </div>
            <div>
                <Radio
                    checked = {selectedValue === 'false'}
                    onChange = {e => handleChange(e.target)}
                    value = 'false'
                    sx={{
                        color: "#FFD3CA",
                        '&.Mui-checked': {
                            color: "#EB8F7A",
                        },
                    }}
                />
                <span>Normal</span>
            </div>
        </div>
    )
}

export default RadioButton;