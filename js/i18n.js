// ===== LANGUAGE SWITCH (EN / PT-BR / ES) =====
// English text is captured from the HTML itself on first load.
// To edit Portuguese or Spanish text, change the strings in PT / ES below.

const LANG_KEY = 'cw-lang';

const PT = {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.reports': 'Relatórios de Exemplo',
    'nav.newsletter': 'Assinaturas',
    'nav.classes': 'Cursos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',

    // Hero
    'hero.title': 'O Cosmos <span>Fala</span>',
    'hero.tagline': 'Intérprete Profissional da Linguagem Cósmica da Astrologia',
    'hero.desc': 'Mapas natais, trânsitos e sinastrias — enriquecidos por mais de vinte anos de prática terapêutica em Medicina Tradicional Chinesa, yoga e Ayurveda.',
    'hero.book': 'Agendar uma Leitura',
    'hero.samples': 'Ver Relatórios de Exemplo',

    // About
    'about.h2': 'Sobre Mim',
    'about.sub': 'Astróloga, terapeuta e estudiosa do cosmos para a vida toda',
    'about.h3': 'Boas-vindas',
    'about.p1': 'Encontrei a astrologia por volta dos doze anos, em um momento em que eu tentava compreender as raízes do carma e do sofrimento e os acontecimentos que pareciam tão injustos. Eu buscava significado e uma compreensão mais profunda da vida. O que começou como uma busca por respostas tornou-se uma jornada de uma vida pela astrologia e pelos mistérios da experiência humana.',
    'about.p2': 'Meus estudos formais começaram em 1998 no Instituto Ganesha de Práticas de Cura, no Rio de Janeiro, onde estudei Astropsicologia baseada na obra de Liz Greene e na tradição da astrologia psicológica conhecida como Astrologia Moderna. Essa foi minha primeira introdução formal à astrologia como forma de compreender o mundo interior, nossos padrões emocionais, nossas lutas e as camadas mais profundas de quem somos.',
    'about.p3': 'Por muitos anos, a astrologia foi algo que eu praticava principalmente com amigos e familiares. Trabalhava com mapas natais, trânsitos e progressões, enquanto continuava a estudar e aprofundar minha compreensão do assunto. Com o tempo, a astrologia tornou-se muito mais do que um interesse. Tornou-se uma forma de olhar para a vida, compreender nossas experiências e reconhecer a conexão entre nosso mundo interior e os ciclos maiores da existência. Em 2023, decidi trazer esse caminho de uma vida para o meu trabalho profissional e expandir meu conhecimento para pessoas fora da minha comunidade.',
    'about.p4': 'Minha abordagem também foi moldada por mais de vinte anos de estudo em disciplinas terapêuticas, incluindo Medicina Tradicional Chinesa, yoga e Ayurveda. Essas tradições me ensinaram a olhar para a pessoa como um todo e a reconhecer as conexões sutis entre corpo, mente, emoções e espírito. Elas influenciaram profundamente a forma como trabalho com a astrologia e como abordo cada mapa.',
    'about.p5': 'Hoje, meu trabalho reúne astrologia psicológica, técnicas tradicionais, astrologia preditiva e o conhecimento que acumulei ao longo de muitos anos explorando cura, consciência e a experiência humana. No centro do meu trabalho há uma ideia simples: nossas vidas fazem parte de algo muito maior do que nós mesmos, e o céu acima de nós tem uma linguagem própria. Meu papel é ajudar a interpretar essa linguagem.',
    'about.p6': '<em>Obrigada por estar aqui. Convido você a explorar a astrologia comigo como uma forma de compreender a si mesmo, sua vida e seu lugar dentro do grande mistério do Cosmos.</em>',
    'about.cta': 'Agendar uma Leitura',

    // Services
    'shop.h2': 'Serviços',
    'shop.sub': 'Leituras e análises escritas — via Zoom ou presencialmente',
    'shop.book': 'Agendar uma Leitura',
    'shop.soon': 'Em Breve',
    'shop.note': 'Os preços são oferecidos em escala móvel — se você estiver com dificuldades, por favor <a href="#contact">me envie uma mensagem</a>.',
    'svc1.h3': 'Mapa Natal',
    'svc1.desc': 'Uma análise escrita abrangente do seu mapa natal — seus pontos fortes, desafios, padrões de vida e o chamado da sua alma — fundamentada na tradição da astrologia psicológica.',
    'svc1.ul': '<li>✦ Relatório escrito detalhado</li><li>✦ Abordagem da astrologia psicológica</li><li>✦ Seu para guardar e revisitar</li>',
    'svc2.h3': 'Trânsitos e Progressões',
    'svc2.desc': 'Uma análise escrita dos ciclos planetários que ativam seu mapa no momento — o que este capítulo da sua vida está pedindo de você e como trabalhar com isso de forma consciente.',
    'svc2.ul': '<li>✦ Trânsitos atuais e futuros</li><li>✦ Progressões secundárias</li><li>✦ Timing para decisões importantes</li>',
    'svc3.h3': 'Consulta',
    'svc3.desc': 'Uma sessão ao vivo e individual, via Zoom ou presencial, sem relatório escrito. Traga suas perguntas e exploraremos seu mapa juntos.',
    'svc3.ul': '<li>✦ Zoom ou presencial</li><li>✦ Formato de conversa</li><li>✦ Ideal como acompanhamento ou primeiro contato</li>',
    'svc4.h3': 'Sinastria',
    'svc4.desc': 'Uma análise escrita de compatibilidade entre dois mapas — parceiros românticos, familiares ou sócios — revelando as dinâmicas, forças e pontos de crescimento entre vocês.',
    'svc4.ul': '<li>✦ Dois mapas analisados em conjunto</li><li>✦ Dinâmicas e padrões do relacionamento</li><li>✦ Relatório escrito incluído</li>',
    'svc5.h3': 'Revolução Solar',
    'svc5.desc': 'Seu mapa do ano que começa, calculado para o momento exato em que o Sol retorna à sua posição natal — um mapa dos temas e oportunidades do seu novo ano pessoal.',
    'svc5.ul': '<li>✦ Previsão para o ano</li><li>✦ Disponível em breve</li>',
    'svc6.h3': 'Astrologia Horária',
    'svc6.desc': 'Uma resposta a uma pergunta específica, lida a partir de um mapa calculado para o exato momento em que a pergunta é feita. Uma das artes mais antigas e precisas da astrologia.',
    'svc6.ul': '<li>✦ Perguntas específicas e diretas</li><li>✦ Disponível em breve</li>',

    // Sample Reports
    'reports.h2': 'Relatórios de Exemplo',
    'reports.sub': 'Veja exatamente o que você receberá e baixe um exemplo de cada análise escrita',
    'reports.dl': 'Baixar PDF',
    'reports.note': 'Os PDFs de exemplo são adicionados assim que ficam disponíveis. Para solicitar um antes, é só <a href="#contact">entrar em contato</a>.',
    'rep1.h3': 'Exemplo de Mapa Natal',
    'rep1.desc': 'Um exemplo anonimizado da análise completa de mapa natal, para você conhecer a profundidade e o estilo do que receberá.',
    'rep2.h3': 'Exemplo de Trânsitos e Progressões',
    'rep2.desc': 'Veja como os ciclos planetários atuais são interpretados e apresentados em uma análise escrita de trânsitos e progressões.',
    'rep3.h3': 'Exemplo de Sinastria',
    'rep3.desc': 'Um exemplo de análise de relacionamento entre dois mapas, em que exploramos a dinâmica de um relacionamento.',

    // Newsletter / Subscriptions
    'news.h2': 'Assinaturas',
    'news.sub': 'Conteúdo exclusivo para assinantes, com trânsitos e reflexões da semana, disponível por uma pequena taxa.',
    'news.tier': 'Assinatura',
    'news.free': '$5/mês',
    'news.ul': '<li>Análise de trânsitos para cada um dos signos Ascendentes</li><li>Lições e artigos aprofundados</li><li>Reflexões para o período</li>',
    'news.btnSub': 'Assinar no Substack',
    'news.btnPat': 'Assinar no Patreon',
    'news.note': 'Cancele quando quiser — sem fidelidade.',

    // Classes
    'classes.h2': 'Cursos e Círculo de Membros',
    'classes.sub': 'Aprenda astrologia em um ambiente estruturado e acolhedor',
    'classes.intro': 'Os cursos estão em desenvolvimento — os temas planejados incluem fundamentos da astrologia psicológica, leitura de mapa natal e técnicas preditivas. Eles provavelmente serão hospedados no Patreon, onde um círculo de membros com conteúdo exclusivo também está tomando forma.',
    'classes.soon': 'Cursos e Círculo de Membros — Em Breve',
    'classes.cta': 'Assine para Receber Novidades',
    'classes.note': 'ou volte sempre para ver o novo conteúdo',

    // Blog
    'blog.h2': 'Últimas do Blog',
    'blog.sub': 'Reflexões sobre trânsitos, trabalho com mapas e a vida astrológica',
    'blog.all': 'Ver Todos os Posts',
    'blogpage.h2': 'Reflexões Cósmicas',
    'blogpage.sub': 'Artigos, previsões e reflexões do reino astrológico',

    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.desc': 'Tem alguma pergunta sobre uma leitura ou relatório, ou quer agendar? Envie uma mensagem abaixo — será um prazer ouvir de você.',
    'contact.phName': 'Seu nome',
    'contact.phEmail': 'Seu e-mail',
    'contact.phMessage': 'Sua mensagem',
    'contact.send': 'Enviar Mensagem',

    // Footer
    'footer.text': '© 2026 Prema Moksha Astrology. Todos os direitos reservados. | Feito com amor cósmico ✦'
};

const ES = {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.services': 'Servicios',
    'nav.reports': 'Informes de Ejemplo',
    'nav.newsletter': 'Suscripciones',
    'nav.classes': 'Cursos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'El Cosmos <span>Habla</span>',
    'hero.tagline': 'Intérprete Profesional del Lenguaje Cósmico de la Astrología',
    'hero.desc': 'Cartas natales, tránsitos y sinastrías — enriquecidas por más de veinte años de práctica terapéutica en Medicina Tradicional China, yoga y Ayurveda.',
    'hero.book': 'Reservar una Lectura',
    'hero.samples': 'Ver Informes de Ejemplo',

    // About
    'about.h2': 'Sobre Mí',
    'about.sub': 'Astróloga, terapeuta y estudiosa del cosmos de toda la vida',
    'about.h3': 'Bienvenidos',
    'about.p1': 'Encontré la astrología alrededor de los doce años, en un momento en que intentaba comprender las raíces del karma y del sufrimiento y los acontecimientos que parecían tan injustos. Buscaba significado y una comprensión más profunda de la vida. Lo que comenzó como una búsqueda de respuestas se convirtió en un viaje de toda la vida hacia la astrología y los misterios de la experiencia humana.',
    'about.p2': 'Mis estudios formales comenzaron en 1998 en el Instituto Ganesha de Prácticas de Sanación en Río de Janeiro, donde estudié Astropsicología basada en la obra de Liz Greene y la tradición de la astrología psicológica conocida como Astrología Moderna. Esta fue mi primera introducción formal a la astrología como forma de comprender el mundo interior, nuestros patrones emocionales, nuestras luchas y las capas más profundas de quiénes somos.',
    'about.p3': 'Durante muchos años, la astrología fue algo que practicaba principalmente con amigos y familiares. Trabajaba con cartas natales, tránsitos y progresiones, mientras continuaba estudiando y profundizando mi comprensión del tema. Con el tiempo, la astrología se convirtió en mucho más que un interés. Se convirtió en una forma de mirar la vida, comprender nuestras experiencias y reconocer la conexión entre nuestro mundo interior y los ciclos más grandes de la existencia. En 2023, decidí llevar este camino de toda la vida a mi trabajo profesional y expandir mi conocimiento a personas fuera de mi comunidad.',
    'about.p4': 'Mi enfoque también ha sido moldeado por más de veinte años de estudio en disciplinas terapéuticas, incluyendo Medicina Tradicional China, yoga y Ayurveda. Estas tradiciones me enseñaron a mirar a la persona como un todo y a reconocer las conexiones sutiles entre cuerpo, mente, emociones y espíritu. Han influido profundamente en la forma en que trabajo con la astrología y en la manera en que abordo cada carta.',
    'about.p5': 'Hoy, mi trabajo reúne astrología psicológica, técnicas tradicionales, astrología predictiva y el conocimiento que he reunido a lo largo de muchos años explorando la sanación, la conciencia y la experiencia humana. En el corazón de mi trabajo hay una idea simple: nuestras vidas son parte de algo mucho más grande que nosotros mismos, y el cielo sobre nosotros tiene un lenguaje propio. Mi papel es ayudar a interpretar ese lenguaje.',
    'about.p6': '<em>Gracias por estar aquí. Te invito a explorar la astrología conmigo como una forma de comprenderte a ti mismo, tu vida y tu lugar dentro del gran misterio del Cosmos.</em>',
    'about.cta': 'Reservar una Lectura',

    // Services
    'shop.h2': 'Servicios',
    'shop.sub': 'Lecturas y análisis escritos — por Zoom o en persona',
    'shop.book': 'Reservar una Lectura',
    'shop.soon': 'Próximamente',
    'shop.note': 'Los precios se ofrecen en escala variable — si lo necesitas, por favor <a href="#contact">envíame un mensaje</a>.',
    'svc1.h3': 'Carta Natal',
    'svc1.desc': 'Un análisis escrito completo de tu carta natal — tus fortalezas, desafíos, patrones de vida y el llamado de tu alma — fundamentado en la tradición de la astrología psicológica.',
    'svc1.ul': '<li>✦ Informe escrito detallado</li><li>✦ Enfoque de astrología psicológica</li><li>✦ Tuyo para guardar y revisitar</li>',
    'svc2.h3': 'Tránsitos y Progresiones',
    'svc2.desc': 'Un análisis escrito de los ciclos planetarios que activan tu carta en este momento — lo que este capítulo de tu vida te está pidiendo y cómo trabajar con ello de forma consciente.',
    'svc2.ul': '<li>✦ Tránsitos actuales y próximos</li><li>✦ Progresiones secundarias</li><li>✦ Timing para decisiones importantes</li>',
    'svc3.h3': 'Consulta',
    'svc3.desc': 'Una sesión en vivo e individual, por Zoom o en persona, sin informe escrito. Trae tus preguntas y exploraremos tu carta juntos.',
    'svc3.ul': '<li>✦ Zoom o en persona</li><li>✦ Formato de conversación</li><li>✦ Ideal como seguimiento o primer contacto</li>',
    'svc4.h3': 'Sinastría',
    'svc4.desc': 'Un análisis escrito de compatibilidad entre dos cartas — parejas románticas, familiares o socios de negocios — revelando las dinámicas, fortalezas y áreas de crecimiento entre ustedes.',
    'svc4.ul': '<li>✦ Dos cartas analizadas en conjunto</li><li>✦ Dinámicas y patrones de la relación</li><li>✦ Informe escrito incluido</li>',

    // Sample Reports
    'reports.h2': 'Informes de Ejemplo',
    'reports.sub': 'Mira exactamente lo que recibirás y descarga un ejemplo de cada análisis escrito',
    'reports.dl': 'Descargar PDF',
    'reports.note': 'Los PDF de ejemplo se agregan a medida que están disponibles. Para solicitar uno antes, solo <a href="#contact">ponte en contacto</a>.',
    'rep1.h3': 'Ejemplo de Carta Natal',
    'rep1.desc': 'Un ejemplo anonimizado del análisis completo de carta natal, para que conozcas la profundidad y el estilo de lo que recibirás.',
    'rep2.h3': 'Ejemplo de Tránsitos y Progresiones',
    'rep2.desc': 'Mira cómo se interpretan y presentan los ciclos planetarios actuales en un análisis escrito de tránsitos y progresiones.',
    'rep3.h3': 'Ejemplo de Sinastría',
    'rep3.desc': 'Un ejemplo de un análisis de relación entre dos cartas, donde exploramos la dinámica de una relación.',

    // Newsletter / Subscriptions
    'news.h2': 'Suscripciones',
    'news.sub': 'Contenido exclusivo para suscriptores, con tránsitos y reflexiones de la semana, disponible por una pequeña tarifa.',
    'news.tier': 'Suscripción',
    'news.free': '$5/mes',
    'news.ul': '<li>Análisis de tránsitos para cada uno de los signos Ascendentes</li><li>Lecciones y artículos en profundidad</li><li>Reflexiones para el período</li>',
    'news.btnSub': 'Suscribirse en Substack',
    'news.btnPat': 'Suscribirse en Patreon',
    'news.note': 'Cancela cuando quieras — sin permanencia.',

    // Classes
    'classes.h2': 'Cursos y Círculo de Miembros',
    'classes.sub': 'Aprende astrología en un ambiente estructurado y acogedor',
    'classes.intro': 'Los cursos están en desarrollo — los temas planeados incluyen fundamentos de astrología psicológica, lectura de carta natal y técnicas predictivas. Probablemente estarán alojados en Patreon, donde también está tomando forma un círculo de miembros con contenido exclusivo.',
    'classes.soon': 'Cursos y Círculo de Miembros — Próximamente',
    'classes.cta': 'Suscríbete para Recibir Novedades',
    'classes.note': 'o vuelve a menudo para ver el nuevo contenido',

    // Blog
    'blog.h2': 'Últimas del Blog',
    'blog.sub': 'Reflexiones sobre tránsitos, trabajo con cartas y la vida astrológica',
    'blog.all': 'Ver Todos los Posts',
    'blogpage.h2': 'Reflexiones Cósmicas',
    'blogpage.sub': 'Artículos, pronósticos y reflexiones del reino astrológico',

    // Contact
    'contact.title': 'Hablemos',
    'contact.desc': '¿Tienes alguna pregunta sobre una lectura o informe, o quieres reservar? Envía un mensaje abajo — será un placer saber de ti.',
    'contact.phName': 'Tu nombre',
    'contact.phEmail': 'Tu correo electrónico',
    'contact.phMessage': 'Tu mensaje',
    'contact.send': 'Enviar Mensaje',

    // Footer
    'footer.text': '© 2026 Prema Moksha Astrology. Todos los derechos reservados. | Hecho con amor cósmico ✦'
};

const DICTS = { pt: PT, es: ES };
const LANG_TAGS = { en: 'en', pt: 'pt-BR', es: 'es' };

// Cache the original English from the DOM on first load
const EN = {};
const EN_PH = {};

function currentLang() {
    const lang = localStorage.getItem(LANG_KEY) || 'en';
    return DICTS[lang] || lang === 'en' ? lang : 'en';
}

function applyLang(lang) {
    document.documentElement.lang = LANG_TAGS[lang] || 'en';
    const dict = DICTS[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict && dict[key] !== undefined) {
            el.innerHTML = dict[key];
        } else if (EN[key] !== undefined) {
            el.innerHTML = EN[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict && dict[key] !== undefined) {
            el.placeholder = dict[key];
        } else if (EN_PH[key] !== undefined) {
            el.placeholder = EN_PH[key];
        }
    });

    document.querySelectorAll('#langSwitch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Capture English originals before anything changes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        EN[el.getAttribute('data-i18n')] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        EN_PH[el.getAttribute('data-i18n-placeholder')] = el.placeholder;
    });

    document.querySelectorAll('#langSwitch button').forEach(btn => {
        btn.addEventListener('click', () => {
            localStorage.setItem(LANG_KEY, btn.dataset.lang);
            applyLang(btn.dataset.lang);
        });
    });

    applyLang(currentLang());
});
