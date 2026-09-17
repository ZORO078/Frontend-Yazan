const dispaly = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button"); 
const operators = ['+', '-', '*', '/'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        const action = button.dataset.action;
        
        if((dispaly.value === "Error" || dispaly.value === "undefined")&& value) {

            dispaly.value = "";
        }

            if(value) {
            
            if(value === '%') {
                try {
                    if(display.value !== "") {
                        display.value = eval(display.value) / 100;
                    }
                } catch (error) {
                    display.value = "Error";
                }
                return; 
            }
        }
        if(value) {
            const lastChar = dispaly.value.slice(-1);
            
            if(operators.includes(value) && dispaly.value === "") return;

            if(operators.includes(value) && operators.includes(lastChar)) return;

            dispaly.value += value; return;
        }

        if(action === 'clear') {
            dispaly.value = "";
            return;
        } 

        if(action === 'backspace') {
            dispaly.value = dispaly.value.slice(0, -1);
            return;
        }

        if(action === 'calculate') {
            try {
                if(dispaly.value === "") return;

                const lastChar = dispaly.value.slice(-1);
                if(operators.includes(lastChar)) return;
                dispaly.value = eval(dispaly.value);
            } catch (error) {
                dispaly.value = "Error";
            }       
        }
    
    });
});