import prisma from "../src/database/db.js";

async function main(){
    await prisma.streaming_services.create({
        data:{
            name: "Disney+"
        }
    })

    await prisma.genres.create({
        data:{
            name: "Sci-Fi"
        }
    })
}

main()
    .then(
        () => {
            console.log("Registro feito com sucesso!")
        }
    )
    .catch(
        e => {
            console.error(e);
            process.exit(1);
        }
    )
    .finally(
        async () =>{
            await prisma.$disconnect();
        }
    )