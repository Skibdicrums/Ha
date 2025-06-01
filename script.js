document.addEventListener('DOMContentLoaded', () => {
    const elementsData = [
        { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, category: 'Nonmetal', temperatureValue: '20.28 K' },
        { symbol: 'He', name: 'Helium', atomicNumber: 2, category: 'Noble Gas', temperatureValue: '4.22 K' },
        { symbol: 'Li', name: 'Lithium', atomicNumber: 3, category: 'Alkali Metal', temperatureValue: '453.69 K' },
        { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, category: 'Alkaline Earth Metal', temperatureValue: '1551 K' },
        { symbol: 'B', name: 'Boron', atomicNumber: 5, category: 'Metalloid', temperatureValue: '2349 K' },
        { symbol: 'C', name: 'Carbon', atomicNumber: 6, category: 'Nonmetal', temperatureValue: '4700 K' },
        { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, category: 'Nonmetal', temperatureValue: '77.36 K' },
        { symbol: 'O', name: 'Oxygen', atomicNumber: 8, category: 'Nonmetal', temperatureValue: '90.19 K' },
        { symbol: 'F', name: 'Fluorine', atomicNumber: 9, category: 'Halogen', temperatureValue: '85.03 K' },
        { symbol: 'Ne', name: 'Neon', atomicNumber: 10, category: 'Noble Gas', temperatureValue: '27.10 K' },
        { symbol: 'Na', name: 'Sodium', atomicNumber: 11, category: 'Alkali Metal', temperatureValue: '370.95 K' },
        { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, category: 'Alkaline Earth Metal', temperatureValue: '923 K' },
        // ... add more elements as needed
        { symbol: 'Fe', name: 'Iron', atomicNumber: 26, category: 'Transition Metal', temperatureValue: '1811 K' }, // Example for a transition metal
        { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, category: 'Lanthanide', temperatureValue: '1193 K' }, // Example for Lanthanide
        { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, category: 'Actinide', temperatureValue: '1323 K' }, // Example for Actinide
    ];

    const elements = document.querySelectorAll('.element');
    const infoBox = document.querySelector('.info-box');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            const elementSymbol = element.textContent.trim(); // Use .trim() to remove any whitespace
            const selectedElement = elementsData.find(el => el.symbol === elementSymbol);

            if (selectedElement) {
                infoBox.innerHTML = `
                    <p>Element: ${selectedElement.symbol}</p>
                    <p>Name: ${selectedElement.name}</p>
                    <p>Atomic No.: ${selectedElement.atomicNumber}</p>
                    <p>Category: ${selectedElement.category}</p>
                    <p>Temperature: ${selectedElement.temperatureValue}</p>
                `;
            } else {
                infoBox.innerHTML = `
                    <p>Element: ${elementSymbol}</p>
                    <p>Name: Information not found</p>
                    <p>Atomic No.: Information not found</p>
                    <p>Category: Information not found</p>
                    <p>Temperature: Information not found</p>
                `;
            }
        });
    });

    // Initialize info box with a default message or the first element's data
    if (elementsData.length > 0) {
        infoBox.innerHTML = `
            <p>Element: ${elementsData[0].symbol}</p>
            <p>Name: ${elementsData[0].name}</p>
            <p>Atomic No.: ${elementsData[0].atomicNumber}</p>
            <p>Category: ${elementsData[0].category}</p>
            <p>Temperature: ${elementsData[0].temperatureValue}</p>
        `;
    }
});
