const fs = require('fs');
const path = require('path');

const generateComponent = componentName => {
    const componentDirectory = path.join(__dirname, '..', 'src', 'components', componentName);

    if (fs.existsSync(componentDirectory)) {
        console.error(`El componente ${componentName} ya existe.`);
        return;
    }

    fs.mkdirSync(componentDirectory);

    const componentCode = `
    const ${componentName} = () => {
        return (
            <div>
                <h2>${componentName} Component</h2>
            </div>
        );
    };

    export default ${componentName};
    `;

    fs.writeFileSync(path.join(componentDirectory, `${componentName}.js`), componentCode);

    console.log(`Componente ${componentName} creado exitosamente.`);
}

const componentName = process.argv[2];

if (!componentName) {
    console.error(`Por favor, proporciona un nombre para el componente.`);
} else {
    generateComponent(componentName);
}
