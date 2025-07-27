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
        navs.forEach((el) => el.classList.remove('active'))
        link.classList.add('active')
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

function Dice(max, botao){
    let ramdom = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    botao.innerHTML = `Result: ${ramdom}`
}

inputs.forEach((inp) =>{
    inp.addEventListener("input", () => {
        if (inp.classList.contains("number_inp")){
            inp.value = inp.value.replace(/[^0-9]/gi, "")
        }
    })
})



// race text

const race_name_text = document.getElementById('race_name_text')
const race_name_sel = document.getElementById('race_name')
const race_age_text = document.getElementById('race_age_text')
const race_age_sel = document.getElementById('race_age')


const race_name_desc = {
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
const race_age_desc = {
    none: `
    Escolha uma raça para ver mais informações.`,
    humanos: `
    <strong>Faixas etárias:</strong><br><br>
    <em>Infância:</em> Criança jovem (4 a 8 anos).<br><br>
    <em>Pré-adolescente:</em> (9 a 13 anos).<br><br>
    <em>Adolescência:</em> Adolescente (14 a 18 anos).<br><br>
    <em>Jovem adulto:</em> (19 a 26 anos).<br><br>
    <em>Vida adulta:</em> Adulto (27 a 45 anos).<br><br>
    <em>Velhice:</em> Idoso (46 a 65 anos).<br><br>
    <em>Ancião:</em> (66 a 85 anos).<br><br>
    <em>Velhice Extrema:</em> (86 a 109 anos).
    `,
    nortanos: `
    <strong>Faixas etárias:</strong><br><br>
    <em>Infância:</em> Criança jovem (3 a 6 anos).<br><br>
    <em>Pré-adolescente:</em> (7 a 11 anos).<br><br>
    <em>Adolescência:</em> Adolescente (12 a 15 anos).<br><br>
    <em>Jovem adulto:</em> (16 a 21 anos).<br><br>
    <em>Vida adulta:</em> Adulto (22 a 88 anos).<br><br>
    <em>Velhice:</em> Idoso (89 a 132 anos).<br><br>
    <em>Ancião:</em> (133 a 211 anos).<br><br>
    <em>Velhice Extrema:</em> (212 a 246 anos).

 `,
    flutterianos: `
    <strong>Faixas etárias:</strong><br><br>
    <em>Infância:</em> Criança jovem (3 a 6 anos).<br><br>
    <em>Pré-adolescente:</em> (7 a 11 anos).<br><br>
    <em>Adolescência:</em> Adolescente (12 a 15 anos).<br><br>
    <em>Jovem adulto:</em> (16 a 21 anos).<br><br>
    <em>Vida adulta:</em> Adulto (22 a 88 anos).<br><br>
    <em>Velhice:</em> Idoso (89 a 132 anos).<br><br>
    <em>Ancião:</em> (133 a 211 anos).<br><br>
    <em>Velhice Extrema:</em> (212 a 328 anos).

`,
    klumma: `
    <strong>Faixas etárias:</strong><br><br>
    <em>Infância:</em> Criança jovem (6 a 9 anos).<br><br>
    <em>Pré-adolescente:</em> (10 a 16 anos).<br><br>
    <em>Adolescência:</em> Adolescente (17 a 21 anos).<br><br>
    <em>Jovem adulto:</em> (22 a 28 anos).<br><br>
    <em>Vida adulta:</em> Adulto (29 a 36 anos).<br><br>
    <em>Velhice:</em> Idoso (37 a 48 anos).<br><br>
    <em>Ancião:</em> (49 a 60 anos).<br><br>
    <em>Velhice Extrema:</em> (61 a 88 anos).
`,
    nari: `
    <strong>Faixas etárias:</strong><br><br>
    <em>Infância:</em> Criança jovem (2 a 5 anos).<br><br>
    <em>Pré-adolescente:</em> (6 a 9 anos).<br><br>
    <em>Adolescência:</em> Adolescente (10 a 14 anos).<br><br>
    <em>Jovem adulto:</em> (15 a 19 anos).<br><br>
    <em>Vida adulta:</em> Adulto (20 a 27 anos).<br><br>
    <em>Velhice:</em> Idoso (28 a 32 anos).<br><br>
    <em>Ancião:</em> (33 a 38 anos).<br><br>
    <em>Velhice Extrema:</em> (39 a 50 anos).
`,
    celestes: `
    <strong>Faixas etárias:</strong><br><br>
    <em>Infância:</em> Criança jovem (4 a 8 anos).<br><br>
    <em>Pré-adolescente:</em> (9 a 13 anos).<br><br>
    <em>Adolescência:</em> Adolescente (14 a 18 anos).<br><br>
    <em>Jovem adulto:</em> (19 a 26 anos).<br><br>
    <em>Vida adulta:</em> Adulto (27 a 45 anos).<br><br>
    <em>Velhice:</em> Idoso (46 a 65 anos).<br><br>
    <em>Ancião:</em> (66 a 85 anos).<br><br>
    <em>Velhice Extrema:</em> (86 a 109 anos).
`,
    demonios: `
    <strong>Faixas etárias:</strong><br><br>
    <em>Infância:</em> Criança jovem (5 a 9 anos).<br><br>
    <em>Pré-adolescente:</em> (10 a 13 anos).<br><br>
    <em>Adolescência:</em> Adolescente (14 a 19 anos).<br><br>
    <em>Jovem adulto:</em> (20 a 35 anos).<br><br>
    <em>Vida adulta:</em> Adulto (36 a 47 anos).<br><br>
    <em>Velhice:</em> Idoso (48 a 65 anos).<br><br>
    Eles param de envelhecer após isso.
    `
};

race_name_sel.addEventListener('change', () => {
    const valor = race_name_sel.value;
    race_name_text.innerHTML = race_name_desc[valor]
})

race_age_sel.addEventListener('change', () => {
    const valor = race_age_sel.value;
    race_age_text.innerHTML = race_age_desc[valor]
})

