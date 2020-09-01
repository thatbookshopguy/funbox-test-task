## Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:

- пользователя: хорошая верстка адекватно отображается на любом устройстве и в любом браузере, позволяет интуитивно разобраться в элементах и взаимодействию с ними, не тормозит загрузку сайта
- менеджера проекта: хорошая верстка сделана строго по техническому заданию и в обозначенные сроки 
- дизайнера: хорошая верстка максимально соответствует макету, а в деталях, где не соответствует, это оправдано улучшением пользовательского опыта
- верстальщика: хорошая верстка имеет очевидную логику и удобно структурирована, поэтому необходимость вносить изменения в код не вызывает затруднений
- клиентского программиста: хорошая верстка позволяет без затруднений и необходимости переделывать разметку разрабатывать на ее основе интерфейсы
- серверного программиста: в хорошей верстке адекватно прописаны элементы, подразумевающие взаимодействие с сервером — формы поиска, фильтрация, обратная связь и так далее


## Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

В верстке крупных сайтов, которые в дальнейшем предстоит поддерживать, ключевая особенность — это построение понятной структуры, с помощью которой сориентироваться в коде в дальнейшем не составит труда. Построение подобной структуры состоит из, например:
— работы по конкретному кодгайду, приводящему написанный кем угодно код к привычному виду с конкретным порядком атрибутов и свойств и одинаковым синтаксисом;
— CSS методологии, с помощью которых другие разработчики смогут быстрее разобраться в структуре проекта. В работе я использую БЭМ, благодаря которой проект делится на независимые блоки, что тоже упрощает дальнейшую работу с кодом;
— препроцессоры CSS, упрощающие работу и дальнейшую поддержку, например, с помощью переменных и вложенности, а так же возможности разделить стилизацию на отдельные файлы. Так как пока я делала только небольшие лендинги, полных проектов с использованием препроцессоров у меня нет, но в процессе учебы начинала работать с SCSS.
— использование сборщиков, не только компилирующих файлы препроцессора в готовый CSS, но и автоматизирующих рутинные мелочи, например, расстановку префиксов для адекватной поддержки браузерами, сжатие кода и так далее. Например, в проектах с использованием SCSS я пробовала работать с Gulp.
— прописывание понятных комментариев, облегчающих дальнейшее понимание кода.

## Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

В верстке сайтов, подстраивающихся под разные устройства, на мой взгляд, два ключевых момента — адаптация элементов сайта под разные разрешения экрана с помощью медиа-запросов и работа с изображениями. В адаптивной верстке важно учитывать читаемость шрифтов, адекватную работу интерактивных элементов (например, слайдеров, которые с телефона пользователю логичнее свайпать, чем нажимать на стрелки), прописывать максимальную ширину изображений и оптимизировать их для Retina-дисплеев.  
Опыт верстки адаптивных сайтов у меня небольшой и по факту лучший пример это верстка макета из второй части этого ТЗ. В работе над ним я использовала медиа-запросы для переопределения позиционирования элементов, проверяя результат с помощью встроенного в Chrome эмулятора мобильных устройств.  

## Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Для написания кода я использую редактор Atom, который настроила под себя с помощью плагинов, форматирующих код и проверяющих его на ошибки, упрощающих визуальное восприятие кода, подключающих терминал внутри самого редактора для работы с Node.js, и Emmet. Из внешних ресурсов пользуюсь валидаторами кода.
Мой основной браузер это Chrome, поэтому в работе с кодом я использую его встроенные инструменты разработчика, из наиболее частых — редактирование стилей элементов в браузере, работа с консолью в проверке JS-кода и эмуляция мобильных устройств. 


## Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

На практике с подобными ситуациями я не сталкивалась, потому что не работала с чужим кодом, но вероятно я бы проверила, подключен ли Normalize, прописаны ли браузерные префиксы. В случае с iOS я бы запустила эмулятор в Xcode и попробовала поменять свойства через инструменты разработчика в Safari, аналогично с эмулятором Windows и IE. Параллельно с эмулятором я бы поискала похожие ситуации на Stack Overflow и Хабре.

## Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

В таком случае сначала я постараюсь связаться с дизайнером и запросить необходимую информацию. Если связаться с дизайнером по каким-то причинам невозможно или он не дает внятного ответа, то спрошу совета  наставника. Если же вариант с наставником тоже не сработает, то поищу информацию об оптимальных практиках в дизайне интерактивных элементов и оформлю элементы соответственно этому.

## Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).

В основном я читаю телеграм-каналы для начинающих разработчиков, которые публикуют тьюториалы, задачи или полезные статьи (https://t.me/seniorFront, https://t.me/frontendquestions, https://t.me/godinhtml), стараюсь по мере возможности читать каналы о фронтенде, рассчитанные на более профессиональную аудиторию (https://t.me/defront, https://t.me/frontendnoteschannel, https://t.me/frontend_info, https://t.me/front_end_dev). Если говорить о сайтах, то из русскоязычных я слежу за блогами HTML Academy и Нетологии, журналом Яндекс.Практикума и за хабом веб-разработки на Хабре. Из англоязычного — CSS-Tricks и блог Лии Веру. Периодически стараюсь слушать тематические подкасты, иногда берусь за профильные книги, из последнего — «Грокаем алгоритмы», «Выразительный JS», «Секреты CSS».

### Какое направление развития вам более близко: JS-программирование, HTML/CSS верстка или и то, и другое?

Изучая фронтенд, я больше занималась версткой, а JS знаю на уровне подключения интерактивных элементов, поэтому сейчас я скорее верстальщик, но хочу постепенно уходить в программирование. По учебным проектам мне приходилось немного работать в том числе и с Node.JS и писать простенькие лабораторные с подключением API Dropbox для стороннего добавления файлов и получения статистики о количестве файлов в корневой папке пользователя или, например, я делала доску объявлений с подключением MongoDB. И после этого поняла, что верстка и в целом работа с визуалом это интересно, но хотелось бы чаще иметь шанс засесть на полдня, продумывая как должен работать алгоритм.

### Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

Если брать айтишные области, не связанные с фронтендом, то давно заглядываюсь на Data Science и надеюсь в обозримом будущем почитать пару книг и получить базовые представления об этом. Если речь о диджитал-сферах, то интересуюсь дизайном, копирайтом и маркетингом. Если уходить совсем далеко, то как человек с травмой гуманитарного образования все еще не могу отпустить из жизни историю и философию.

## Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Меня зовут Юля, мне 24. Год назад я закончила факультет свободных искусств и наук СПбГУ (что это такое рассказать могу, но лучше не надо), если коротко — дипломированный историк. 

В юности я, проводя время в интернете, нахваталась знаний о HTML и CSS и только года полтора назад осознала, что юношеское увлечение (в отличие от своего диплома) можно превратить в профессию. Так я попала сначала на сайт HTML Academy и вместо того чтобы писать диплом на выпускном курсе погрузилась в интерактивные тренажеры. И с тех пор год параллельно с подработкой в кофейне самостоятельно училась делать так, чтобы сайты были приятными на глаз и удобными в использовании. И теперь, когда я уже более-менее уверена в своих силах, ищу постоянную работу в этой сфере.

В основном моя практика это верстка бесплатных макетов, найденных в сети, последний из них можно посмотреть по ссылке — https://github.com/thatbookshopguy/planning-app-landing-page.  
