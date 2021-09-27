var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'storicard.challenge@gmail.com', // generated ethereal user
        pass: 'udrhbdtlmaklbotj', // generated ethereal password
    },
});

transporter.verify()
    .then(() => {
        console.log('Ready for send emails mailing')
    })


const enviarMail = async (email, subject, data, cantidad_filtrada) => {
    try {
        await transporter.sendMail({
            from: '"StoriCard Administración" <storicard.challenge@gmail.com>', // sender address
            to: email, // list of receivers
            subject, // Subject line
            // text: "Hello world?", // plain text body
            // html: "<b>Hello world?</b>", // html body
            html: await mailDetail(data, cantidad_filtrada)
        });
    } catch (error) {
        console.log('Error al enviar el email');
    }
}


const mailDetail = (data, cantidad_filtrada) => {
    let meses = ``;
    let tabla = ``;

    for(key in cantidad_filtrada) {
        meses += `
            <tr>
                <td style="border: 1px solid black; padding: 5px; text-align: center;">Transacciones en ${key}</td>
                <td style="border: 1px solid black; padding: 5px; text-align: center;">${cantidad_filtrada[key]} </td>
            </tr>
        `
    }

    tabla = `
        <tr>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">Saldo total</td>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">$${data.saldo_total}</td>        
        </tr>
        <tr>
            ${meses}
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">Débito medio</td>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">$${data.debito_medio}</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">Crédito medio</td>
            <td style="border: 1px solid black; padding: 5px; text-align: center;">$${data.credito_medio}</td>
        </tr>
    `

    let template =
        `
        <div>            
            <div style=
                "background-image: repeating-linear-gradient(
                    45deg,
                    rgba(97, 97, 97, 0.1) 0px,
                    rgba(97, 97, 97, 0.1) 2px,
                    transparent 2px,
                    transparent 4px
                ),
                linear-gradient(90deg, rgb(43, 43, 43), rgb(43, 43, 43));
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                height: 87px;
                margin-top: 0px;"
            >
                <section style=
                    "margin: 0px auto;"
                >
                    <img style=
                        "margin: 0px auto;
                        border-radius: 20px;
                        width: 100%;
                        height: 87px;
                        border-bottom-left-radius: 0px;
                        border-bottom-right-radius: 0px;"
                        src="https://i.imgur.com/drXKxHj.png"
                    />
                </section>
                
            </div>
            
            <div>
                <section style=
                    "background-color: rgb(3, 110, 132);
                    padding: 10px;
                    padding-left: 50px;
                    border-bottom-left-radius: 20px;
                    border-bottom-right-radius: 20px;">

                    <h2 style="color: white; text-decoration: underline;">Resúmen de Cuenta</h2>
                    <h3 style="color: white;">Hola! A continuación te dejamos el resúmen de cuenta que nos solicitaste.</h3>
                    <h3 style="color: white;">
                        Para mayor información visitanos en 
                        <a href="https://www.storicard.com" target="_blank" style="color: white; text-decoration: none;">https://www.storicard.com/</a>
                    </h3>
                    
                    <table style=
                        "border-collapse: collapse;
                        margin-top: 40px;
                        background-color: lightblue;">
                        <thead>
                            <tr>
                                <th style="border: 1px solid black; padding: 5px; width: 13rem;">Concepto</th>
                                <th style="border: 1px solid black; padding: 5px; width: 6rem;">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tabla}
                        </tbody>
                    </table>

                    
                    <h3 style=
                        "margin-top: 80px;
                        text-decoration: underline;
                        color: white;
                        font-style: italic;">
                        Atte. Administración Stori Card.
                    </h3>

                </section>
            </div>
        </div>
        `

    return template;
}


// <section style=
//     "
//     padding: 8px">
//         <h3>Saldo total: $${data.saldo_total}</h3>
//         ${meses}
//         <h3>Promedio Débitos: $${data.debito_medio}</h3>
//         <h3>Promedio Créditos: $${data.credito_medio}</h3>
// </section>

module.exports = enviarMail;
