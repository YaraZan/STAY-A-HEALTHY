
const container = document.querySelector('.app-container');

// Создание startPage элементов

const createStartPageElements = () => {

    // CREATING HTML ELEMENTS </>
    // Main StartPage container
    const startPageContainer = document.createElement('div');

    // Main title
    const titleMain = document.createElement('h2');

    // Main interactZone container
    const interactZone = document.createElement('div');

    // left interact container
    const interactZoneLeft = document.createElement('div'),
        leftDescr = document.createElement('p'),
        shareBtn = document.createElement('button'),
        moreBtn = document.createElement('button');
    
    // right interact container
    const interactZoneRight = document.createElement('div');
    const rightDescr = document.createElement('span');
    const rightForm = document.createElement('form'),
        labelText = document.createElement('label'),
        labelNumber = document.createElement('label'),
        inputText = document.createElement('input'),
        wrapper = document.createElement('div'),
        inputNumber = document.createElement('input'),
        btnWrap = document.createElement('div'),
        btnMin = document.createElement('input'),
        btnMax = document.createElement('input'),
        btnSubmitStart = document.createElement('button');

        btnMin.type = 'button';
        btnMax.type = 'button';
        btnSubmitStart.type = 'submit';
        

    // ADDING WITH DATA []
    titleMain.innerHTML = 'Достаточно ли хорошо ты следишь за своим <span style="color: #2FCC59;">здоровьем</span>?';
    leftDescr.textContent = 'Проверь свои знания и узнай свой результат, прокачай знания о том как следить за своим питанием, нагрузками и сном.';
    shareBtn.textContent = 'Поделиться с друзьями';
    moreBtn.textContent = 'Подробнее';
    rightDescr.textContent = 'Заполни форму и начни играть';
    labelText.textContent = 'Как тебя зовут?';
    labelNumber.textContent = 'Сколько тебе лет?';
    btnSubmitStart.textContent = 'Начать';

    inputNumber.addEventListener('input', () => {
        if (isNaN(parseInt(inputNumber.value))) {
            inputNumber.value = '';
        }
    })

    btnMin.addEventListener('click', () => {
        if (inputNumber.value == 0) {
            inputNumber.value = '';
        }
        
        inputNumber.value ? inputNumber.value = parseInt(inputNumber.value) - 1 : inputNumber.value = '';
    });

    btnMax.addEventListener('click', () => {
        inputNumber.value ? inputNumber.value = parseInt(inputNumber.value) + 1 : inputNumber.value = 1;
    });

    // ADDING CLASSES .
    startPageContainer.classList.add('start-page-container');
    titleMain.classList.add('title-main');
    interactZone.classList.add('interact-zone');
    interactZoneLeft.classList.add('interact-zone__left');
    leftDescr.classList.add('left__descr');
    shareBtn.classList.add('left__button', 'share-btn');
    moreBtn.classList.add('left__button', 'more-btn');
    interactZoneRight.classList.add('interact-zone__right');
    rightDescr.classList.add('right__descr');
    rightForm.classList.add('right__form');
    labelText.classList.add('form__label');
    labelNumber.classList.add('form__label');
    inputText.classList.add('form__input', 'input-text');
    inputNumber.classList.add('form__input', 'input-number');
    wrapper.classList.add('wrapper');
    btnWrap.classList.add('btn-wrap');
    btnMin.classList.add('input-number-min');
    btnMax.classList.add('input-number-max');
    btnSubmitStart.classList.add('form__submit-start');

    // CONVERTING BY TREE
    btnWrap.append(
        btnMin,
        btnMax
    );
    wrapper.append(
        inputNumber,
        btnWrap
    );
    rightForm.append(
        labelText,
        inputText,
        labelNumber,
        wrapper,
        btnSubmitStart
    );
    interactZoneRight.append(
        rightDescr,
        rightForm
    );
    interactZoneLeft.append(
        leftDescr,
        shareBtn,
        moreBtn
    );
    interactZone.append(
        interactZoneLeft,
        interactZoneRight
    );
    startPageContainer.append(
        titleMain,
        interactZone
    );

    // RETURN DATA TO INTERACT WITH
    return {
        rightForm,
        inputText,
        inputNumber,
        btnMax,
        btnMin,
        btnSubmitStart,
        moreBtn,
        shareBtn,
        startPageContainer
    };
}

function startApp(container) {
    const startPageContainer = createStartPageElements();
    container.append(startPageContainer.startPageContainer);
};

startApp(container);
