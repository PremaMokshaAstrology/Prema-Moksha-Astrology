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
    'shop.sub': 'Consultas, relatórios escritos ou ambos — via Zoom ou presencialmente',
    'shop.book': 'Saiba Mais',
    'shop.soon': 'Em Breve',
    'shop.note': 'Os preços são oferecidos em escala móvel — se você estiver com dificuldades, por favor <a href="#contact">me envie uma mensagem</a>.',
    'svc1.h3': 'Consulta por Zoom',
    'svc1.desc': 'Uma sessão ao vivo e individual, via Zoom ou presencial — inicial ou de acompanhamento. Traga suas perguntas e exploraremos seu mapa juntos.',
    'svc1.ul': '<li>✦ Sessão inicial ou de acompanhamento</li><li>✦ Zoom ou presencial</li><li>✦ Preço em escala móvel</li>',
    'svc2.h3': 'Relatório Escrito',
    'svc2.desc': 'Uma análise escrita completa do seu mapa natal, trânsitos ou progressões — sem consulta ao vivo.',
    'svc2.ul': '<li>✦ Natal, trânsitos ou progressões</li><li>✦ Relatório detalhado e personalizado</li><li>✦ Seu para guardar e revisitar</li>',
    'svc3.h3': 'Análise Completa',
    'svc3.desc': 'Uma análise completa de mapa natal, trânsitos ou progressões — inclui relatório escrito, consulta e orientação personalizada.',
    'svc3.ul': '<li>✦ Relatório escrito incluído</li><li>✦ Consulta de 1 hora via Zoom ou presencial</li><li>✦ Orientação personalizada</li>',
    'svc4.h3': 'Sinastria',
    'svc4.desc': 'Interpretação de dois mapas natais, explorando as dinâmicas e os padrões que vocês criam juntos, e as formas como o relacionamento pode apoiar o crescimento e a compreensão mútuos. Análise para qualquer relacionamento pessoal ou profissional entre duas pessoas.',
    'svc4.ul': '<li>✦ Dois mapas analisados em conjunto</li><li>✦ Relatório escrito incluído</li><li>✦ Consulta de 1 hora via Zoom</li>',

    // Session page
    'session.h2': 'Uma Sessão de Astrologia Comigo',
    'session.sub': 'O que esperar, como funciona e como se preparar',
    'session.p1': 'Uma consulta astrológica começa com você. Antes de interpretar seu mapa, quero entender o que o levou a buscar apoio astrológico, o que você está vivenciando e o que espera compreender mais profundamente. Sinta-se à vontade para compartilhar apenas o que lhe for confortável. Mesmo um pouco de conhecimento sobre sua história, relacionamentos, carreira, perguntas e circunstâncias atuais me ajuda a conectar o simbolismo do seu mapa com a sua realidade. Por favor, veja as orientações para compartilhamento abaixo.',
    'session.natal.h3': 'Análise de Mapa Natal',
    'session.natal.p': 'Em uma Análise de Mapa Natal, essas informações me permitem direcionar o relatório para uma compreensão mais profunda de quem você é e do alinhamento com a sua promessa astrológica. O mapa descreve suas disposições naturais, tensões internas, pontos fortes, possibilidades de desenvolvimento e os padrões que podem acompanhá-lo ao longo da vida. Quando seu simbolismo é conectado com a sua experiência vivida, a interpretação torna-se mais pessoal, prática e acolhedora.',
    'session.transit.h3': 'Consulta de Trânsitos',
    'session.transit.p': 'Durante uma Consulta de Trânsitos, podemos nos concentrar nas áreas da vida que você mais deseja compreender. Suas perguntas me ajudam a identificar quais posições natais, alinhamentos planetários e padrões de geometria sagrada estão mais ativos naquele período. Os trânsitos podem revelar a mão do destino se movendo através de um tempo específico, enquanto a consciência permite que você encontre esse tempo de forma mais presente, faça escolhas significativas e use sua vontade com sabedoria.',
    'session.prog.h3': 'Consulta de Progressões',
    'session.prog.p': 'Uma Consulta de Progressões segue uma abordagem semelhante. Ao conhecer você e partir da fundação do seu mapa natal, podemos delinear uma linha do tempo do seu desenvolvimento interior e reconhecer os ciclos pelos quais sua vida se desdobrou. Isso revela como você se desenvolveu a partir da Promessa Natal até a pessoa que é hoje e como seus ciclos atuais podem continuar a se desdobrar em um futuro próximo.',
    'session.prog.p2': 'Na sua primeira Consulta de Progressões, o relatório escrito cobrirá seus ciclos do nascimento até o presente, bem como o próximo ano. As consultas anuais de acompanhamento de Progressões são mais curtas e, portanto, são oferecidas pelo mesmo preço de uma consulta por Zoom.',
    'session.followup.h3': 'Consultas de Acompanhamento',
    'session.followup.p': 'Consultas de Acompanhamento são sessões mais curtas e focadas, que podem ser agendadas sempre que surgir uma nova pergunta, quando você quiser explorar uma influência astrológica específica do momento ou quando desejar continuar sua autoinvestigação astrológica.',
    'session.closing': '<em>A astrologia é o estudo dos ciclos celestes e de sua sincronicidade com os ciclos humanos. Ao compreender como esses ciclos se movem juntos, você ganha uma perspectiva mais ampla e a sabedoria para reconhecer a natureza de um determinado período, responder com mais consciência e fazer escolhas que apoiem o seu desenvolvimento.</em>',
    'session.sliding.h2': 'Escala Móvel Explicada',
    'session.sliding.p': 'Ofereço uma faixa de preços para as Consultas por Zoom porque quero que as pessoas possam acessar o apoio astrológico em diferentes momentos financeiros de suas vidas, especialmente nos momentos em que mais precisam. Você pode escolher, dentro da faixa, o valor que reflete honestamente suas circunstâncias atuais.',
    'session.price1.h3': 'Consulta Inicial ou de Acompanhamento por Zoom',
    'session.price1.note': 'escala móvel',
    'session.price2.h3': 'Relatório Escrito sem Consulta',
    'session.price2.note': 'por relatório',
    'session.price3.h3': 'Análise Completa',
    'session.price3.note': 'Mapa natal, trânsitos ou progressões — inclui relatório escrito, consulta e orientação personalizada',
    'session.payments': 'Os pagamentos pelos serviços podem ser feitos via PayPal, Venmo e Zelle. Para pagamento por Zelle, envie-me uma mensagem para obter as informações. Obrigada. :)',
    'session.before.h2': 'Antes de Começarmos',
    'session.before.p': 'Ao contratar meus serviços, envie-me uma mensagem se apresentando e compartilhando um pouco sobre os quatro pilares centrais da sua vida. Você pode escrever o quanto se sentir confortável.',
    'session.pillar1.h3': 'Você e Seu Desenvolvimento Pessoal',
    'session.pillar1.p': 'Conte-me algo sobre quem você é, como você se vê, como sente que os outros o percebem, sua relação com seu corpo e sua forma instintiva de responder à vida.',
    'session.pillar2.h3': 'Lar, Família e Raízes',
    'session.pillar2.p': 'Você pode compartilhar algo sobre sua família, criação, raízes, ancestralidade, experiências emocionais iniciais ou feridas de infância. Isso me ajuda a conectar o simbolismo do seu mapa com as experiências que moldaram sua base interior.',
    'session.pillar3.h3': 'Relacionamentos e Parcerias',
    'session.pillar3.p': 'Conte-me sobre os relacionamentos importantes um-a-um em sua vida. Eles podem incluir casamento, relacionamentos românticos, parcerias de negócios, amizades mais próximas ou outras conexões significativas e duradouras.',
    'session.pillar4.h3': 'Carreira e Reputação',
    'session.pillar4.p': 'Compartilhe algo sobre seu trabalho, vocação, ambições, vida pública e a reputação que você está construindo. Você também pode me contar sobre suas questões, mudanças ou aspirações profissionais atuais.',
    'session.control': '<em>Você está sempre no controle do que escolhe compartilhar. Esses detalhes simplesmente me permitem ir além de uma interpretação geral e criar uma orientação astrológica que fale mais diretamente com a sua vida, suas perguntas e as escolhas diante de você.</em>',
    'session.cta': 'Envie-me uma Mensagem para Começar',

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
    'shop.sub': 'Consultas, informes escritos o ambos — por Zoom o en persona',
    'shop.book': 'Más Información',
    'shop.soon': 'Próximamente',
    'shop.note': 'Los precios se ofrecen en escala variable — si lo necesitas, por favor <a href="#contact">envíame un mensaje</a>.',
    'svc1.h3': 'Consulta por Zoom',
    'svc1.desc': 'Una sesión en vivo e individual, por Zoom o en persona — inicial o de seguimiento. Trae tus preguntas y exploraremos tu carta juntos.',
    'svc1.ul': '<li>✦ Sesión inicial o de seguimiento</li><li>✦ Zoom o en persona</li><li>✦ Precio en escala variable</li>',
    'svc2.h3': 'Informe Escrito',
    'svc2.desc': 'Un análisis escrito completo de tu carta natal, tránsitos o progresiones — sin consulta en vivo.',
    'svc2.ul': '<li>✦ Natal, tránsitos o progresiones</li><li>✦ Informe detallado y personalizado</li><li>✦ Tuyo para guardar y revisitar</li>',
    'svc3.h3': 'Análisis Completo',
    'svc3.desc': 'Un análisis completo de carta natal, tránsitos o progresiones — incluye informe escrito, consulta y orientación personalizada.',
    'svc3.ul': '<li>✦ Informe escrito incluido</li><li>✦ Consulta de 1 hora por Zoom o en persona</li><li>✦ Orientación personalizada</li>',
    'svc4.h3': 'Sinastría',
    'svc4.desc': 'Interpretación de dos cartas natales, explorando las dinámicas y los patrones que crean juntos, y las formas en que la relación puede apoyar el crecimiento y la comprensión mutuos. Análisis para cualquier relación personal o profesional entre dos personas.',
    'svc4.ul': '<li>✦ Dos cartas analizadas en conjunto</li><li>✦ Informe escrito incluido</li><li>✦ Consulta de 1 hora por Zoom</li>',

    // Session page
    'session.h2': 'Una Sesión de Astrología Conmigo',
    'session.sub': 'Qué esperar, cómo funciona y cómo prepararte',
    'session.p1': 'Una consulta astrológica comienza contigo. Antes de interpretar tu carta, quiero comprender qué te llevó a buscar apoyo astrológico, qué estás viviendo y qué esperas comprender más profundamente. Puedes compartir solo lo que te resulte cómodo. Incluso un poco de conocimiento sobre tu historia, relaciones, carrera, preguntas y circunstancias actuales me ayuda a conectar el simbolismo de tu carta con tu realidad. Por favor, consulta las pautas para compartir a continuación.',
    'session.natal.h3': 'Análisis de Carta Natal',
    'session.natal.p': 'En un Análisis de Carta Natal, esta información me permite orientar el informe hacia una comprensión más profunda de quién eres y de la alineación con tu promesa astrológica. La carta describe tus disposiciones naturales, tensiones internas, fortalezas, posibilidades de desarrollo y los patrones que pueden acompañarte a lo largo de la vida. Cuando su simbolismo se conecta con tu experiencia vivida, la interpretación se vuelve más personal, práctica y de apoyo.',
    'session.transit.h3': 'Consulta de Tránsitos',
    'session.transit.p': 'Durante una Consulta de Tránsitos, podemos concentrarnos en las áreas de la vida que más deseas comprender. Tus preguntas me ayudan a identificar qué posiciones natales, alineaciones planetarias y patrones de geometría sagrada están más activos durante ese período. Los tránsitos pueden revelar la mano del destino moviéndose a través de un tiempo particular, mientras que la conciencia te permite encontrar ese tiempo de manera más presente, tomar decisiones significativas y usar tu voluntad sabiamente.',
    'session.prog.h3': 'Consulta de Progresiones',
    'session.prog.p': 'Una Consulta de Progresiones sigue un enfoque similar. Al conocerte y partir de la base de tu carta natal, podemos delinear una línea de tiempo de tu desarrollo interior y reconocer los ciclos a través de los cuales tu vida se ha desarrollado. Esto revela cómo te has desarrollado desde la Promesa Natal hasta la persona que eres hoy y cómo tus ciclos actuales pueden continuar desarrollándose en el futuro cercano.',
    'session.prog.p2': 'En tu primera Consulta de Progresiones, el informe escrito cubrirá tus ciclos desde el nacimiento hasta el presente, así como el próximo año. Las consultas anuales de seguimiento de Progresiones son más cortas y, por lo tanto, se ofrecen al mismo precio que una consulta por Zoom.',
    'session.followup.h3': 'Consultas de Seguimiento',
    'session.followup.p': 'Las Consultas de Seguimiento son sesiones más cortas y enfocadas que se pueden programar cada vez que surja una nueva pregunta, cuando desees explorar una influencia astrológica particular del momento o cuando quieras continuar tu autoindagación astrológica.',
    'session.closing': '<em>La astrología es el estudio de los ciclos celestes y su sincronicidad con los ciclos humanos. Al comprender cómo estos ciclos se mueven juntos, obtienes una perspectiva más amplia y la sabiduría para reconocer la naturaleza de un período particular, responder de manera más consciente y tomar decisiones que apoyen tu desarrollo.</em>',
    'session.sliding.h2': 'Escala Variable Explicada',
    'session.sliding.p': 'Ofrezco un rango de precios para las Consultas por Zoom porque quiero que las personas puedan acceder al apoyo astrológico en diferentes etapas financieras de sus vidas, especialmente en los momentos en que más lo necesitan. Puedes elegir, dentro del rango, la cantidad que refleje honestamente tus circunstancias actuales.',
    'session.price1.h3': 'Consulta Inicial o de Seguimiento por Zoom',
    'session.price1.note': 'escala variable',
    'session.price2.h3': 'Informe Escrito sin Consulta',
    'session.price2.note': 'por informe',
    'session.price3.h3': 'Análisis Completo',
    'session.price3.note': 'Carta natal, tránsitos o progresiones — incluye informe escrito, consulta y orientación personalizada',
    'session.payments': 'Los pagos por los servicios se pueden realizar a través de PayPal, Venmo y Zelle. Para pagos por Zelle, envíame un mensaje para obtener la información. Gracias. :)',
    'session.before.h2': 'Antes de Comenzar',
    'session.before.p': 'Al contratar mis servicios, envíame un mensaje presentándote y compartiendo un poco sobre los cuatro pilares centrales de tu vida. Puedes escribir tanto o tan poco como te resulte cómodo.',
    'session.pillar1.h3': 'Tú y Tu Desarrollo Personal',
    'session.pillar1.p': 'Cuéntame algo sobre quién eres, cómo te ves, cómo sientes que los demás te perciben, tu relación con tu cuerpo y tu forma instintiva de responder a la vida.',
    'session.pillar2.h3': 'Hogar, Familia y Raíces',
    'session.pillar2.p': 'Puedes compartir algo sobre tu familia, crianza, raíces, ancestros, experiencias emocionales tempranas o heridas de la infancia. Esto me ayuda a conectar el simbolismo de tu carta con las experiencias que han moldeado tu base interior.',
    'session.pillar3.h3': 'Relaciones y Parejas',
    'session.pillar3.p': 'Cuéntame sobre las relaciones importantes de uno a uno en tu vida. Pueden incluir matrimonio, relaciones románticas, socios de negocios, amistades más cercanas u otras conexiones significativas y duraderas.',
    'session.pillar4.h3': 'Carrera y Reputación',
    'session.pillar4.p': 'Comparte algo sobre tu trabajo, vocación, ambiciones, vida pública y la reputación que estás construyendo. También puedes contarme sobre tus preguntas, cambios o aspiraciones profesionales actuales.',
    'session.control': '<em>Siempre tienes el control de lo que eliges compartir. Estos detalles simplemente me permiten ir más allá de una interpretación general y crear una orientación astrológica que hable más directamente a tu vida, tus preguntas y las decisiones que tienes por delante.</em>',
    'session.cta': 'Envíame un Mensaje para Comenzar',

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
