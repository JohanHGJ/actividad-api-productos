import prisma from '../src/prisma.js'; // Asegúrate de que el path esté correcto

async function main() {
    await prisma.marca.createMany({
    data: [
        { nombre: 'Apple' },
        { nombre: 'Samsung' },
        { nombre: 'Nvidia' }
    ]
    });

    await prisma.categoria.createMany({
    data: [
        { nombre: 'Teléfonos' },
        { nombre: 'Celulares' },
        { nombre: 'Computadoras' }
    ]
    });

    console.log('Datos de prueba insertados correctamente');
}

main()
    .catch(e => {
    console.error(e);
    process.exit(1);
    })
    .finally(() => prisma.$disconnect());
