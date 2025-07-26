let atual_page = 0
const articles = document.querySelectorAll('.page')
const inputs = document.querySelectorAll('.input')
const btns = document.querySelectorAll('.btn')
const navs = document.querySelectorAll('.nav-link')
const finish_btn = document.getElementById('finish')
const ficha = document.getElementById('ficha')

ArticleAtt();

function ArticleAtt(){
    articles.forEach((art, i) => {
        art.style.display = i === atual_page ? "block" : "none";
    });
}

navs.forEach(link => {
    link.addEventListener("click", ()=> {
        const i = parseInt(link.dataset.index);
        if (i != atual_page){
            atual_page = i;
            ArticleAtt();
        }
    })
})


function save(){
    inputs.forEach((input) => {
        localStorage.setItem(input.id, input.value)            
    });
}


function clearAll(){
    localStorage.clear();
}

function finish(){
    save()
    btns.forEach((bnt) => {
        bnt.classList.add('hidden')
    });
    articles.forEach((article) => {
        article.classList.add('hidden')
    });
    ficha.classList.remove('hidden')

    const name_ficha = document.getElementById("name_ficha")
    let name = localStorage.getItem("name")
    const age_ficha = document.getElementById("age_ficha")
    let age = localStorage.getItem("age")
    const race_ficha = document.getElementById("race_ficha")
    let race = localStorage.getItem("race")
    const job_ficha = document.getElementById("job_ficha")
    let job = localStorage.getItem("job")
    
    
    name_ficha.innerHTML= name
    age_ficha.innerHTML= age
    race_ficha.innerHTML= race
    job_ficha.innerHTML = job
}

function Roll(max, botao){
    let ramdom = Math.floor(Math.random() * (max - 1 + 1)) + 1;

    botao.innerHTML = `Result: ${ramdom}`
}



// race text

const race_text = document.getElementById('race_name_text')
const race_sel = document.getElementById('race_name')

const race_desc = {
    none: `
    Escolha uma raça para ver mais informações.`,
    humanos: `
    <strong>Nomes comuns:</strong><br><br>
    <em>Masculinos:</em> Ana, João, Lucas, Miguel, Pedro, Gabriel, Rafael, Bruno, Diego, Carlos.<br><br>
    <em>Femininos:</em> Maria, Sofia, Júlia, Beatriz, Laura, Ana, Camila, Fernanda, Lara, Isabela.<br><br><br>

    <strong>Sobrenomes comuns:</strong><br><br>
    <em>Tradicionais:</em> Silva, Souza, Oliveira, Santos, Pereira, Lima, Almeida, Costa, Carvalho, Ribeiro.<br><br>
    <em>Específicos:</em> Brightfield, Stoneward, Ironbrook, Dawnfire, Frosthill, Stormwell, Blackwood, Silvergate, Windholm, Ashridge.<br><br><br>

    <strong>Exemplos de nomes completos:</strong><br><br>
    Lucas Silva, Sofia Brightfield, Miguel Stoneward, Ana Dawnfire, Pedro Frosthill, Beatriz Blackwood, Gabriel Silvergate, Laura Windholm.
    `,
    nortanos: `
    <strong>Nomes comuns:</strong><br><br>
    <em>Masculinos:</em> Kaelr, Thurik, Eirik, Druvann, Fenrik, Lodren, Varnak, Skoril, Halgrym, Turog.<br><br>
    <em>Femininos:</em> Yrla, Skada, Vireth, Kjora, Myrun, Elda, Thirna, Syllen, Drika, Alvyn.<br><br><br>

    <strong>Sobrenomes comuns:</strong><br><br>
    <em>Tradicionais:</em> da Neve Eterna, do Gelo Quebrado, dos Ossos Brancos, da Tempestade Silente, do Vento Cortante, da Montanha Oca.<br><br>
    <em>Específicos:</em> Skalvyrn, Drenvak, Valkreth, Ormathal, Thryssal, Kraemund, Nyrvokk, Velgryn, Eylgor, Trakvyr, Frostborn, Icevein, Snowmourne, Winterbound, Coldshade, Blightfrost, Stormhollow, Whitehowl.<br><br><br>

    <strong>Exemplos de nomes completos:</strong><br><br>
    Eirik Frostborn, Yrla da Neve Eterna, Thurik Skalvyrn, Skada Ironfreeze, Druvann do Vento Cortante, Kjora Snowmourne, Fenrik Valkreth, Myrun da Tempestade Silente.
 `,
    flutterianos: `
    <strong>Nomes comuns:</strong><br><br>
    <em>Masculinos:</em> Brom, Garun, Drek, Morik, Thal, Vorn, Kral, Dorn, Ulrik, Fenar.<br><br>
    <em>Femininos:</em> Lira, Vena, Mira, Thala, Kira, Sira, Dela, Nira, Orla, Vela.<br><br><br>

    <strong>Sobrenomes comuns:</strong><br><br>
    <em>Tradicionais:</em> do Cristal Brilhante, da Rocha Dura, do Eco Profundo, da Mina Oculta, do Coração da Caverna, do Chifre Quebrado.<br><br>
    <em>Específicos:</em> Brightstone, Deepvein, Rockshield, Glitterforge, Darkcore, Minefall, Orebound, Gemshade, Flintrock, Crystalbane, Gralvok, Dremnar, Valdrik, Korvath, Thremis, Bralnok, Veldrak, Ormrik, Kralveth, Dornak.<br><br><br>

    <strong>Exemplos de nomes completos:</strong><br><br>
    Brom Brightstone, Mira do Cristal Brilhante, Garun Gralvok, Lira Glitterforge, Morik do Eco Profundo, Vena Darkcore, Kralveth da Mina Oculta, Thala Minefall.
`,
    klumma: `
    <strong>Nomes comuns:</strong><br><br>
    <em>Masculinos:</em> Rykor, Thalor, Vekran, Jorvik, Kalren, Fenar, Drax, Orlin, Sylvan, Kalen.<br><br>
    <em>Femininos:</em> Lyra, Kaela, Syllin, Oria, Venna, Myra, Thira, Elka, Nira, Vela.<br><br><br>

    <strong>Sobrenomes comuns:</strong><br><br>
    <em>Tradicionais:</em> da Floresta Serena, do Rio Sussurrante, da Montanha Sombria, do Vale Silencioso, da Lua Prateada, da Terra Antiga.<br><br>
    <em>Específicos:</em> Wildpaw, Swiftclaw, Shadowfur, Moonstride, Ironfang, Stormtail, Frostmane, Brightfang, Duskhowl, Emberhide, Varkel, Thryssan, Krelgor, Sylvrek, Ormryl, Drelthar, Vynrok, Kraylen, Zelvor, Gryndal.<br><br><br>

    <strong>Exemplos de nomes completos:</strong><br><br>
    Rykor Wildpaw, Lyra da Floresta Serena, Thalor Varkel, Kaela Moonstride, Fenar do Rio Sussurrante, Syllin Shadowfur, Jorvik Brightfang, Venna da Lua Prateada.
`,
    nari: `
    <strong>Nomes comuns:</strong><br><br>
    <em>Masculinos:</em> Thalor, Miren, Zarek, Kael, Orin, Vyran, Nelor, Tyren, Corin, Salek.<br><br>
    <em>Femininos:</em> Thalia, Mira, Nyra, Selin, Vela, Lira, Oria, Syla, Kira, Nira.<br><br><br>

    <strong>Sobrenomes comuns:</strong><br><br>
    <em>Tradicionais:</em> das Profundezas Azuis, do Abismo Silencioso, da Maré Serena, do Coral Antigo, da Água Sombria, do Reino Submerso.<br><br>
    <em>Específicos:</em> Deepwave, Coralshade, Stormfin, Bluecrest, Tidewalker, Seaborn, Wavecrest, Saltfang, Oceanveil, Frostfin, Varkel, Thryssan, Krelgor, Sylvrek, Ormryl, Drelthar, Vynrok, Kraylen, Zelvor, Gryndal.<br><br><br>

    <strong>Exemplos de nomes completos:</strong><br><br>
    Thalor Deepwave, Mira das Profundezas Azuis, Zarek Varkel, Thalia Coralshade, Nelor do Abismo Silencioso, Nyra Stormfin, Orin Bluecrest, Vela da Maré Serena.
`,
    celestes: `
    <strong>Nomes comuns:</strong><br><br>
    <em>Masculinos:</em> Cael, Lior, Aziel, Serin, Thalen, Orin, Valen, Elyon, Mael, Zephyr.<br><br>
    <em>Femininos:</em> Seraph, Lyra, Elara, Thalia, Mira, Selene, Aelina, Vira, Kaela, Lyria.<br><br><br>

    <strong>Sobrenomes comuns:</strong><br><br>
    <em>Tradicionais:</em> do Céu Claro, da Luz Serena, do Vento Suave, da Asa Branca, do Luar Radiante, da Nuvem Pálida.<br><br>
    <em>Específicos:</em> Skyward, Lightborne, Starveil, Cloudcrest, Dawnflame, Brightwing, Silverlight, Moonshade, Windspire, Halcyon, Aerelis, Varyn, Zephral, Caelith, Elyndor, Thalryn, Orvel, Sylrien, Valeth, Myrion.<br><br><br>

    <strong>Exemplos de nomes completos:</strong><br><br>
    Cael Skyward, Lyra do Céu Claro, Aziel Aerelis, Seraph Lightborne, Thalen do Luar Radiante, Mira Starveil, Elyon Dawnflame, Kaela da Asa Branca.
`,
    demonios: `
    <strong>Nomes comuns:</strong><br><br>
    <em>Masculinos:</em> Kaelth, Zarek, Malgor, Draven, Vornak, Azrak, Theron, Kharos, Drael, Vexar.<br><br>
    <em>Femininos:</em> Lilith, Zyra, Morrin, Vexa, Shaela, Drina, Azara, Selis, Thara, Kalyra.<br><br><br>

    <strong>Sobrenomes comuns:</strong><br><br>
    <em>Tradicionais:</em> do Fogo Infernal, da Chama Negra, do Abismo Profundo, do Vulcão Sangrento, da Cinza Ardente, da Sombra Flamejante.<br><br>
    <em>Específicos (inglês e inventados):</em> Hellfire, Ashbane, Flameborn, Darkflame, Emberfall, Shadowflame, Infernos, Blazewind, Cinderfang, Doomscar, Varkel, Thryssan, Krelgor, Sylvrek, Ormryl, Drelthar, Vynrok, Kraylen, Zelvor, Gryndal.<br><br><br>

    <strong>Exemplos de nomes completos:</strong><br><br>
    Kaelth Hellfire, Lilith do Fogo Infernal, Zarek Varkel, Zyra Ashbane, Malgor do Vulcão Sangrento, Morrin Darkflame, Draven Emberfall, Vexa da Chama Negra.
`
};

race_sel.addEventListener('change', () => {
    const valor = race_sel.value;
    race_text.innerHTML = race_desc[valor]
})